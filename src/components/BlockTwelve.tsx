import { motion } from "motion/react";
import { ShieldCheck, Star, ArrowRight, Lock, CheckCircle2 } from "lucide-react";

interface BlockTwelveProps {
  onCtaClick: () => void;
}

export default function BlockTwelve({ onCtaClick }: BlockTwelveProps) {
  return (
    <div id="guarantee-block-twelve" className="w-full bg-black relative overflow-hidden text-white font-sans">
      
      {/* Golden Highlight lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#9E1B32]/25 to-transparent" />

      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-[25%] left-[-15%] w-[450px] h-[450px] bg-[#9E1B32]/5 rounded-full blur-[145px] pointer-events-none z-0" />
      <div className="absolute bottom-[25%] right-[-15%] w-[450px] h-[450px] bg-[#D4AF37]/3 rounded-full blur-[145px] pointer-events-none z-0" />

      <section className="relative z-10 py-24 px-4 md:px-8 max-w-5xl mx-auto">
        


        {/* CROWNING HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-5.5xl font-black text-white uppercase tracking-tight leading-tight">
            RISCO ABSOLUTAMENTE ZERO
          </h2>
          <div className="w-20 h-0.5 bg-[#D4AF37] mx-auto" />
          <p className="text-xs md:text-sm text-neutral-400 font-medium">
            Você está amparada por uma garantia incondicional de reembolso por 7 dias seguidos.
          </p>
        </div>

        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center max-w-4xl mx-auto mb-12">
          
          {/* LEFT COLUMN: Luxurious 3D Shield Badge element */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              className="relative w-full max-w-[310px] aspect-square rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-b from-[#12080a] to-[#040102] p-6 flex flex-col items-center justify-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden font-serif"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
              
              {/* Giant numeral "7" layout */}
              <div className="relative z-10 mb-2">
                <span className="block font-serif text-[115px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFFEEF] via-[#D4AF37] to-[#8c701f] tracking-tighter drop-shadow-[0_8px_20px_rgba(212,175,55,0.25)]">
                  7
                </span>
                <span className="block font-serif text-sm font-black tracking-[0.25em] text-[#D4AF37] uppercase -mt-4 text-center">
                  Dias de Garantia
                </span>
              </div>

              {/* 5 Shiny Golden Stars */}
              <div className="flex items-center gap-1.5 my-4 z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="w-4.5 h-4.5 text-[#D4AF37] fill-[#D4AF37] drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)] animate-pulse" 
                    style={{ animationDelay: `${star * 150}ms` }}
                  />
                ))}
              </div>

              {/* Shield & satisfaction seal */}
              <div className="flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-white/[0.03] border border-white/5 z-10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] stroke-[2.5]" />
                <span className="text-[10px] text-white/70 uppercase font-sans font-bold tracking-wider">
                  Satisfação Assegurada
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Reassuring dynamic copywriting */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            <h3 className="font-serif text-2xl md:text-3xl lg:text-3.5xl font-black uppercase tracking-tight text-white leading-tight">
              CONFIO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5E298] via-[#FFF] to-[#CD9B4A]">100%</span> NO MEU MÉTODO!
            </h3>

            <div className="w-16 h-0.5 bg-[#D4AF37] opacity-60" />

            <div className="font-sans text-xs md:text-[14px] text-neutral-300 leading-relaxed space-y-4">
              <p>
                Por essa mesma razão, assumo inteiramente todo o risco sobre o seu progresso. Te ofereço uma <strong className="text-white">garantia incondicional e sem restrições por 7 dias completos</strong> para que você teste, leia e sinta o impacto deste método prático na total privacidade e conforto do seu dia a dia.
              </p>
              
              <p className="font-serif text-sm md:text-base font-black text-[#F5E298] tracking-tight italic border-l-2 border-[#D4AF37] pl-4">
                "Sim, é exatamente como você leu. Sem letras miúdas, nem burocracia desnecessária."
              </p>

              <p>
                Se durante esse período, por qualquer motivo (até mesmo se você simplesmente não gostar da aparência do portal de leitura), decidir que o método ou os bônus não superaram suas expectativas, envie um e-mail diretamente para nosso canal de suporte.
              </p>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/15">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <p className="text-[11.5px] font-sans text-[#CD9B4A] font-semibold">
                  Nós reembolsaremos 100% do seu dinheiro de forma extremamente rápida, integral e amigável. Sem perguntas incômodas e com respeito total à sua decisão.
                </p>
              </div>

              <p>
                Ficou fácil tomar a única decisão sensata e lógica hoje, não é? Você não corre risco financeiro algum e tem todo um caminho de poder de atração e autoestima a ganhar.
              </p>
            </div>

          </div>

        </div>

        {/* COMPREHENSIVE CTA BUTTON FOR MAXIMUM CONVERSION */}
        <div className="max-w-md mx-auto text-center pt-4 font-sans">
          <motion.button
            onClick={onCtaClick}
            className="relative w-full h-16 rounded-xl bg-gradient-to-b from-[#008000] via-[#006400] to-[#014101] text-white font-sans font-black text-[12px] md:text-[14px] uppercase tracking-wider shadow-[0_12px_35px_rgba(0,100,0,0.5)] border border-[#008000]/30 cursor-pointer overflow-hidden group flex items-center justify-center gap-3.5 hover:shadow-[0_15px_30px_rgba(212,175,55,0.25)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-6 h-6 rounded bg-black/30 flex items-center justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            </div>

            <span>QUERO GARANTIR MEU ACESSO COM COBERTURA DE RISCO ZERO</span>

            <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform ml-1" />
            
            {/* Elegant gloss highlights anim */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[wiggle_1s_infinite] pointer-events-none" />
          </motion.button>
          
          <div className="flex items-center justify-center gap-3 mt-3 text-[10px] md:text-xs text-neutral-400 font-sans font-semibold">
            <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-[#D4AF37]" /> Servidor SSL Seguro</span>
            <span>•</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-[#D4AF37]" /> 7 Dias de Satisfação Plena</span>
          </div>
        </div>

      </section>

    </div>
  );
}
