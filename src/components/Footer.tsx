import { Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer-section" className="relative shrink-0 overflow-hidden bg-[#FAF6F0] py-12 px-6 md:px-12 border-t border-[#D4AF37]/20 select-none">
      
      {/* Container to restrict max width for perfect layouts */}
      <div className="max-w-4xl mx-auto relative flex flex-col md:flex-row items-center gap-6 justify-between">
        
        {/* Left Side: Elegant Quote Block */}
        <div className="relative text-left flex-1 max-w-2xl">
          {/* Aesthetic Large Quotes */}
          <span className="absolute top-[-10px] left-[-24px] text-4xl md:text-5xl font-serif font-bold text-[#2A141A]/15 leading-none">
            “
          </span>
          <p className="font-serif font-bold text-xs md:text-sm text-[#2A141A] tracking-wide leading-relaxed pl-2 pr-4 italic">
            Existem mulheres atraentes. Existem mulheres inteligentes. E existe um tipo de presença feminina que fica gravado na mente de um homem de forma permanente. A verdadeira diferença não está no esforço superficial, mas nas leis biológicas do desejo e da emoção que você consegue ativar nele.
          </p>
          <span className="absolute bottom-[-15px] right-2 text-4xl md:text-5xl font-serif font-bold text-[#2A141A]/15 leading-none">
            ”
          </span>
        </div>

        {/* Right Side: Diamond four-point star accent and small credit */}
        <div className="flex flex-col items-center md:items-end flex-shrink-0 gap-2 mt-4 md:mt-0">
          <div className="relative">
            {/* Sparkle 4-point star vector */}
            <svg 
              className="w-10 h-10 text-[#D4AF37] opacity-80" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </div>
          <span className="font-serif text-[8px] md:text-[9px] tracking-[0.25em] text-[#2A141A]/50">
            © 2026 O CÓDIGO DA MULHER INESQUECÍVEL
          </span>
          <span className="text-[7px] text-[#2A141A]/40 font-sans">
            Todos os direitos reservados.
          </span>
        </div>

      </div>
    </footer>
  );
}
