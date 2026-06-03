import { motion } from "motion/react";
import { ShieldCheck, BookOpen, ArrowRight, Lock, Heart, Award } from "lucide-react";
import marianaImg from "../assets/images/author_office_portrait_1780456798234.png";

interface BlockThirteenProps {
  onCtaClick: () => void;
}

export default function BlockThirteen({ onCtaClick }: BlockThirteenProps) {
  return (
    <div id="author-block-thirteen" className="w-full bg-[#030102] relative overflow-hidden text-white font-sans py-20 px-4 md:px-8">
      
      {/* Decorative premium line dividers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#9E1B32]/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      {/* Decorative Ambient Radial Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-[#9E1B32]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-[#D4AF37]/4 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        


        {/* MAIN BIOGRAPHY CARD AS VIEWED IN THE SCREENSHOT */}
        <div className="w-full bg-[#080405] rounded-3xl border border-white/[0.06] p-6 md:p-12 lg:p-14 relative overflow-hidden shadow-[0_25px_65px_rgba(0,0,0,0.95)]">
          
          {/* Red top corner floating badge: "Conheça a criadora" */}
          <div className="absolute top-6 left-6 md:top-8 md:on-8 z-20">
            <span className="bg-[#9E1B32] hover:bg-red-700 text-white text-[10px] md:text-xs font-sans font-extrabold tracking-wider px-4 py-1.5 rounded-lg select-none uppercase inline-block border border-red-500/20 shadow-lg">
              Conheça a criadora
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8">
            
            {/* LEFT COLUMN: THE ACCLAIMED COPYWRITING (7 cols on desktop) */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              
              <div className="space-y-2 mt-4 lg:mt-0">
                <h3 className="font-serif text-xl md:text-3xl lg:text-3.5xl font-black text-white leading-tight uppercase tracking-tight">
                  Aprenda com quem realmente conhece a fundo a mente masculina:
                </h3>
                <h4 className="font-serif text-3xl md:text-5xl font-black text-[#9E1B32] tracking-wide uppercase leading-none">
                  MARIANA VABO
                </h4>
              </div>

              {/* Precise Portuguese biography fitting the product and creator */}
              <div className="space-y-4 text-xs md:text-sm text-neutral-300 leading-relaxed font-sans font-medium">
                <p>
                  Mariana Vabo é bióloga, cientista e estuda há mais de 10 anos o comportamento humano e as relações afetivas. Com mais de um milhão de seguidoras nas redes sociais e criadora do best-seller internacional <strong className="text-white">«O Código da Mulher Inesquecível»</strong>, Mariana é a maior especialista do Brasil em psicologia e magnetismo para mulheres.
                </p>
                
                <p>
                  Ela idealizou o movimento <strong className="text-white">«Mulher Inesquecível»</strong>, incentivando mulheres de todo o país a resgatarem seu verdadeiro valor próprio e a conquistarem relacionamentos sólidos com homens que realmente as valorizem. Desde 2019, ela já guiou mais de 60.000 alunas por todo o mundo, ajudando-as a desenvolverem um magnetismo inabalável e uma postura elegante que atrai e retém parceiros de alto valor. Mariana ensina de maneira prática técnicas testadas da psicologia do desejo, revelando o que os homens realmente buscam em uma parceira e os segredos para se tornar insubstituível.
                </p>

                <p>
                  Hoje, através do método prático completo <strong className="text-[#D4AF37]">«O Código da Mulher Inesquecível»</strong>, Mariana disponibiliza um arsenal comportamental passo a passo de linguagem, posicionamento e elegância magnética, desenhado especialmente para as mulheres que decidiram não aceitar nada menos do que reciprocidade, respeito e devoção real na vida amorosa.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN: PORTRAIT AND INTERACTIVE BADGING WITH CAPTION (5 cols on desktop) */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              
              {/* Outer decorative borders around photo container */}
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-black/50 shadow-2xl group">
                <img 
                  src={marianaImg} 
                  alt="Mariana Vabo Portrait" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient glow edge and dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Rotating Badge on Bottom Right - EXACT MATCH */}
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    
                    {/* Rotating text */}
                    <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_12s_linear_infinite] pointer-events-none">
                      <path 
                        id="textPath-biography" 
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
                        fill="none" 
                      />
                      <text className="text-[7.2px] font-bold tracking-[0.2em] fill-white uppercase font-sans">
                        <textPath href="#textPath-biography" startOffset="0%">
                          &nbsp;&nbsp;• Mariana Vabo • Mariana Vabo • Mariana Vabo
                        </textPath>
                      </text>
                    </svg>
                    
                    {/* Inner glowing core dot */}
                    <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-[#D4AF37]/40 flex items-center justify-center">
                      <div className="w-3.5 h-3.5 bg-gradient-to-tr from-[#9E1B32] to-[#D4AF37] rounded-full animate-ping opacity-60" />
                      <div className="absolute w-2 h-2 bg-gradient-to-tr from-[#9E1B32] to-[#D4AF37] rounded-full" />
                    </div>

                  </div>
                </div>

              </div>

              {/* Small caption beneath image container */}
              <div className="mt-4 flex items-center gap-2 text-neutral-400 font-sans text-xs">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>Mariana Vabo — Pesquisadora e Especialista em Relacionamentos</span>
              </div>

            </div>

          </div>

        </div>

        {/* DECISION CALL OUT AND PROMPT BUY FOR POWERFUL CONVERSION SCENARIO */}
        <div className="max-w-4xl mx-auto mt-20 rounded-3xl p-8 md:p-12 border border-[#D4AF37]/30 bg-gradient-to-b from-[#140b02] to-[#040102] text-center space-y-8 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />
          
          <div className="space-y-3">
            <span className="text-xs text-[#D4AF37] uppercase font-bold tracking-widest block font-sans">
              O poder do magnetismo feminino supremo está hoje em suas mãos
            </span>
            <h3 className="font-serif text-2xl md:text-3.5xl font-black text-white uppercase leading-normal">
              HOJE, O PRÓXIMO PASO ESTÁ TOTALMENTE SOB O SEU CONTROLE.
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#CD9B4A] tracking-wider uppercase font-extrabold max-w-2xl mx-auto leading-relaxed">
              Junte-se hoje às milhares de mulheres seguras e inesquecíveis que escolheram deixar para trás a frustração amorosa e dominar os códigos ocultos do magnetismo pessoal.
            </p>
          </div>

          <div className="pt-2 max-w-md mx-auto space-y-4">
            <motion.button
              onClick={onCtaClick}
              className="relative w-full h-16 rounded-xl bg-gradient-to-b from-[#008000] via-[#006400] to-[#014101] text-white font-sans font-black text-[12px] md:text-[14px] uppercase tracking-wider shadow-[0_12px_35px_rgba(0,100,0,0.45)] border border-[#008000]/30 cursor-pointer overflow-hidden group flex items-center justify-center gap-3.5 hover:shadow-[0_15px_30px_rgba(212,175,55,0.25)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-6 h-6 rounded bg-black/30 flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>

              <span>QUERO GARANTIR O MEU ACESSO COMPLETO AGORA</span>

              <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform ml-1" />
              
              {/* Refraction gloss overlay */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[wiggle_1s_infinite] pointer-events-none" />
            </motion.button>

            {/* Quick Micro trust seals */}
            <div className="flex items-center justify-center gap-x-5 gap-y-1.5 flex-wrap text-[10px] md:text-xs text-white/55 font-sans font-medium">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Acesso Digital Imediato</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-[#D4AF37]" /> Pagamento 100% Seguro</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
