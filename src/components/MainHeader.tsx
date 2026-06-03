import { motion } from "motion/react";

export default function MainHeader() {
  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      id="main-app-header" 
      className="w-full shrink-0 border-b border-[#D4AF37]/15 bg-black/80 backdrop-blur-md relative z-40"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
        
        {/* LOGO */}
        <motion.div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer group flex flex-col items-center md:items-start"
          whileHover={{ scale: 1.01 }}
        >
          <span className="font-serif text-base md:text-xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF] to-[#D4AF37] leading-none">
            MULHER
          </span>
          <span className="font-serif text-xs md:text-sm tracking-[0.3em] text-[#D4AF37] leading-none mt-1">
            INESQUECÍVEL
          </span>
        </motion.div>

        {/* MENU */}
        <nav className="flex items-center gap-6 md:gap-8 text-xs tracking-[0.15em] uppercase text-white/70 font-sans">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#D4AF37] transition-colors relative py-1 focus:outline-none cursor-pointer"
          >
            Início
          </button>
          
          <button 
            onClick={() => scrollToAnchor("the-shift-block-three")}
            className="hover:text-[#D4AF37] transition-colors relative py-1 focus:outline-none cursor-pointer"
          >
            Atração
          </button>

          <button 
            onClick={() => scrollToAnchor("stack-offer-block-ten")}
            className="hover:text-[#D4AF37] transition-colors relative py-1 focus:outline-none cursor-pointer"
          >
            Adquirir
          </button>

          <button 
            onClick={() => scrollToAnchor("faq-footer-block-fourteen")}
            className="hover:text-[#D4AF37] transition-colors relative py-1 focus:outline-none cursor-pointer"
          >
            Dúvidas
          </button>
        </nav>
      </div>
    </header>
  );
}
