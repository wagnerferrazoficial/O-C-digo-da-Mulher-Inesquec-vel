import { motion } from "motion/react";
import { 
  Headphones, 
  Gift, 
  Percent, 
  ShieldCheck, 
  Lock, 
  Zap, 
  ChevronRight, 
  Bookmark,
  Calendar,
  Sparkles,
  Volume2
} from "lucide-react";

// Using the generated ultra-realistic cover artwork
import elegantWomanImg from "../assets/images/unforgettable_woman_portrait_1780455560774.png";

interface BlockEightProps {
  onCtaClick: () => void;
}

export default function BlockEight({ onCtaClick }: BlockEightProps) {
  // Limited time countdown or helper text
  const currentHour = new Date().getHours();
  const showMidnightHour = currentHour >= 22 ? "02:00" : "23:59";

  return (
    <div id="bonuses-block-eight" className="w-full bg-[#050102] relative overflow-hidden text-white font-sans">
      
      {/* Top golden horizontal luxury line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      {/* Decorative Warm Red/Gold background lights */}
      <div className="absolute top-[20%] right-[-15%] w-[450px] h-[450px] bg-[#9E1B32]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-15%] w-[450px] h-[450px] bg-[#D4AF37]/4 rounded-full blur-[140px] pointer-events-none z-0" />

      <section className="relative z-10 py-24 px-4 md:px-8 max-w-5xl mx-auto">
        
        {/* Bonus indicator badge */}
        <div className="flex justify-center mb-6">
          <span className="px-5 py-1.5 rounded-full text-[10px] md:text-xs font-serif tracking-[0.25em] font-extrabold text-[#D4AF37] bg-[#9E1B32]/15 border border-[#D4AF37]/35 uppercase shadow-[0_0_15px_rgba(158,27,50,0.15)] animate-pulse">
            Bônus Exclusivos
          </span>
        </div>

        {/* Big high converting headers */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-2xl md:text-3.5xl lg:text-4.5xl font-black text-white leading-tight uppercase tracking-tight">
            GARANTA SEU ACESSO HOJE E LEVE DE PRESENTE ESTES{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5E298] via-[#FFEBC2] to-[#D4AF37]">
              BÔNUS ESPECIAIS:
            </span>
          </h2>
          
          {/* Limited bonus deadline warning indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-red-950/40 border border-red-900/40 text-red-400 text-xs md:text-sm font-extrabold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />
            <span>BÔNUS LIMITADO DISPONÍVEL APENAS ATÉ ÀS {showMidnightHour}</span>
          </div>
        </div>

        {/* BONUS ITEMS CONTAINER */}
        <div className="space-y-8 max-w-4xl mx-auto mb-20 font-sans">
          
          {/* BONUS #1: COUPON FOR PHYSICAL BOOK (próximamente) */}
          <motion.div 
            id="bonus-card-one"
            className="rounded-3xl border border-white/[0.05] p-6 md:p-10 lg:p-12 bg-gradient-to-br from-[#0D0407] via-[#050102] to-black relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 group hover:border-[#D4AF37]/20 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Visual background luxury stamp */}
            <div className="absolute right-4 top-4 text-white/[0.01] font-serif text-[180px] pointer-events-none select-none font-bold">
              01
            </div>

            {/* Left side text descriptors */}
            <div className="flex-1 space-y-5 text-left order-2 md:order-1">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Percent className="w-5 h-5 stroke-[2.5]" />
                <span className="text-xs uppercase font-extrabold tracking-widest block font-sans">
                  Bônus Especial #01
                </span>
              </div>

              <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-black text-white uppercase leading-tight">
                Cupom de Desconto para o Livro Físico{" "}
                <span className="text-red-400 block font-sans text-xs md:text-sm tracking-widest font-bold lowercase mt-1 italic">
                  (breve lançamento)
                </span>
              </h3>

              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-sans">
                Ao garantir a versão digital do método <strong>O Código da Mulher Inesquecível</strong> hoje, além de receber o acesso imediato à leitura, você garante automaticamente um cupom especial de 50% de desconto de compradora antecipada para solicitar a sua luxuosa cópia impressa de capa física assim que ela sair da gráfica.
              </p>

              {/* Real Value vs Today Value price indicator */}
              <div className="pt-2 flex items-center gap-4 text-xs md:text-sm font-sans">
                <span className="text-neutral-400">
                  Valor se vendido separadamente: <del className="text-red-400 font-semibold">R$ 97,00</del>
                </span>
                <span className="px-2.5 py-0.5 rounded bg-teal-900/30 border border-teal-500/20 text-teal-400 font-extrabold text-[10px] md:text-xs uppercase tracking-wider font-serif">
                  HOJE: GRÁTIS
                </span>
              </div>
            </div>

            {/* Right side mockups representation */}
            <div className="w-full md:w-1/3 max-w-[220px] shrink-0 order-1 md:order-2 flex justify-center relative">
              <div className="relative w-full aspect-[4/5]">
                
                {/* Book backing shadow */}
                <div className="absolute inset-4 rounded bg-black/60 blur-xl md:blur-2xl" />

                {/* Back mockup (Book) */}
                <div className="absolute left-0 bottom-2 w-[80%] aspect-[3/4] rounded-xl overflow-hidden border border-[#D4AF37]/25 shadow-2xl skew-y-3 p-1.5 bg-[#171412] transition-transform group-hover:scale-105 duration-300">
                  <img 
                    src={elegantWomanImg} 
                    alt="Mockup visual do cupom do livro físico" 
                    className="w-full h-full object-cover filter brightness-[0.85]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Front mockup */}
                <div className="absolute right-0 top-2 w-[55%] aspect-[9/19] rounded-2xl overflow-hidden border border-white/20 shadow-[0_15px_30px_rgba(0,0,0,0.85)] p-0.5 bg-black/95 flex flex-col justify-between -rotate-6 transition-transform group-hover:rotate-0 group-hover:scale-110 duration-300">
                  <div className="w-full h-full rounded-2xl relative overflow-hidden flex flex-col justify-end p-1.5">
                    <img 
                      src={elegantWomanImg} 
                      alt="Mockup do smartphone" 
                      className="absolute inset-0 w-full h-full object-cover filter brightness-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 aspect-[1/1] bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end items-center p-1.5 text-center">
                      <span className="text-[6px] text-amber-200 uppercase font-black tracking-widest leading-0">CÓDIGO</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>

          {/* BONUS #2: AUDIOLIVRO COMPLETO */}
          <motion.div 
            id="bonus-card-two"
            className="rounded-3xl border border-white/[0.05] p-6 md:p-10 lg:p-12 bg-gradient-to-br from-[#0F0406] via-[#050102] to-black relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 group hover:border-[#D4AF37]/20 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Visual background luxury stamp */}
            <div className="absolute right-4 top-4 text-white/[0.01] font-serif text-[180px] pointer-events-none select-none font-bold">
              02
            </div>

            {/* Left side text descriptors */}
            <div className="flex-1 space-y-5 text-left order-2 md:order-1">
              <div className="flex items-center gap-2 text-[#D4AF37]">
                <Headphones className="w-5 h-5 stroke-[2.5]" />
                <span className="text-xs uppercase font-extrabold tracking-widest block font-sans">
                  Bônus Especial #02
                </span>
              </div>

              <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-black text-white uppercase leading-tight">
                Audiolivro Completo Integrado
                <span className="text-[#D4AF37] block font-sans text-xs md:text-sm tracking-widest font-bold uppercase mt-1">
                  Narração Completa com Voz de Estúdio
                </span>
              </h3>

              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-sans">
                Acesso imediato e ilimitado vitalício à versão em áudio completa do método <strong>O Código da Mulher Inesquecível</strong>. Ideal para ouvir no carro a caminho do trabalho, na academia ou nos seus momentos de descanso, permitindo que você domine a psicologia biológica do magnetismo, do desejo e da obsessão masculina onde quer que esteja.
              </p>

              {/* Real Value vs Today Value price indicator */}
              <div className="pt-2 flex items-center gap-4 text-xs md:text-sm font-sans">
                <span className="text-neutral-400">
                  Valor se vendido separadamente: <del className="text-red-400 font-semibold">R$ 77,00</del>
                </span>
                <span className="px-2.5 py-0.5 rounded bg-teal-900/30 border border-teal-500/20 text-teal-400 font-extrabold text-[10px] md:text-xs uppercase tracking-wider font-serif">
                  HOJE: GRÁTIS
                </span>
              </div>
            </div>

            {/* Right side representation with Headphones */}
            <div className="w-full md:w-1/3 max-w-[220px] shrink-0 order-1 md:order-2 flex justify-center relative">
              <div className="relative w-full aspect-[4/5] flex items-center justify-center p-2">
                
                {/* Backing glow & shadow elements */}
                <div className="absolute inset-4 rounded-full bg-[#1e070a]/40 blur-xl" />

                {/* Audiobook Book Art vertical layout */}
                <div className="relative w-[125px] aspect-[3/4.5] rounded-xl overflow-hidden border border-[#D4AF37]/25 shadow-2xl p-1 bg-[#120f0d] transition-transform group-hover:scale-105 duration-300">
                  <img 
                    src={elegantWomanImg} 
                    alt="Capa do audiolivro" 
                    className="w-full h-full object-cover filter brightness-[0.80]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  
                  <div className="absolute top-2 right-2 flex items-center gap-0.5 text-xs text-white/55">
                    <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                </div>

                {/* Headphones overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:rotate-6 transition-transform duration-300">
                  <div className="w-[170px] h-[170px] rounded-full border-4 border-dashed border-white/5 flex items-center justify-center relative">
                    <div className="absolute w-[140px] h-[140px] rounded-full border border-[#D4AF37]/25 animate-pulse bg-black/40 flex items-center justify-center backdrop-blur-sm">
                      <Headphones className="w-16 h-16 text-white drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>

        </div>

        {/* SECURITY & GUARANTEED SATISFACTION SUMMARY CODA */}
        <div className="max-w-2xl mx-auto text-center space-y-8 font-sans">
          <div className="w-10 h-[1px] bg-[#D4AF37]/50 mx-auto" />
          
          <h4 className="font-serif text-lg md:text-2xl font-black text-white uppercase tracking-normal">
            Ao resgatar seu acesso hoje, você leva R$ 174,00 em Bônus Gratuitos Imediatamente
          </h4>

          <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed max-w-lg mx-auto">
            Sim, esta é uma oportunidade limitada para blindar a sua vida amorosa e adquirir a versão completa deste material exclusivo pelo menor preço histórico.
          </p>

          {/* CALL TO ACTION BUTTON FOR BLOCK EIGHT */}
          <div className="pt-2 flex flex-col items-center gap-4">
            <motion.button
              onClick={onCtaClick}
              className="relative w-full max-w-md h-16 rounded-xl bg-gradient-to-b from-[#008000] via-[#006400] to-[#014101] text-white font-sans font-black text-[12px] md:text-[14px] uppercase tracking-wider shadow-[0_12px_30px_rgba(0,100,0,0.4)] border border-[#008000]/30 cursor-pointer overflow-hidden group flex items-center justify-center gap-3 hover:shadow-[0_15px_30px_rgba(212,175,55,0.25)] scroll-smooth"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-6 h-6 rounded bg-black/30 flex items-center justify-center animate-bounce">
                <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>
              <span>QUERO MEU LIVRO + BÔNUS GRÁTIS</span>
              <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform ml-1" />
              
              {/* Gloss animation effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[wiggle_1s_infinite] pointer-events-none" />
            </motion.button>

            {/* Quick trust reassurance labels */}
            <div className="flex items-center gap-5 text-[10px] md:text-xs text-neutral-400 font-sans justify-center">
              <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-[#D4AF37]" /> Servidor criptografado SSL</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Sem taxas recorrentes</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-[#D4AF37]" /> Envio imediato</span>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}