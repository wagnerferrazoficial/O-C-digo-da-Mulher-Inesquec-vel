import { motion } from "motion/react";
import { 
  Award, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Compass, 
  Heart, 
  Lock, 
  BookOpen, 
  ShieldAlert,
  ChevronRight,
  ShieldCheck,
  Zap,
  Bookmark
} from "lucide-react";

// Importing the generated ultra-realistic pictures
import authorOfficePortrait from "../assets/images/author_office_portrait_1780456798234.png";
import authorLibraryPortrait from "../assets/images/author_library_portrait_1780456812409.png";

interface BlockFiveProps {
  onCtaClick: () => void;
}

export default function BlockFive({ onCtaClick }: BlockFiveProps) {
  // Method highlights in Portuguese for Women
  const features = [
    {
      title: "Erros Invisíveis Corrigidos",
      desc: "Descubra os pequenos deslizes inconscientes que destroem a atração e fazem os homens se distanciarem de imediato, sem qualquer explicação.",
    },
    {
      title: "Gatilhos da Atração Involuntária",
      desc: "Mecanismos biocomportamentais que despertam uma atração espontânea, admiração e reciprocidade de forma extremamente saudável e verdadeira.",
    },
    {
      title: "Conexão Emocional Profunda",
      desc: "Como reestruturar o desejo dele a nível profundo, fazendo com que ele queira te procurar e se preocupar com você de forma espontânea.",
    },
    {
      title: "A Visão d'A Mulher Inesquecível",
      desc: "O que diferencia a mulher que os homens de valor fazem de tudo para estar junto, daquela que é vista apenas como opção passageira.",
    },
    {
      title: "Postura d'A Mulher de Alto Valor",
      desc: "Como posicionar sua presença e se valorizar com segurança, sem qualquer necessidade de cobrar atenção ou mendigar migalhas de afeto.",
    },
    {
      title: "Da Atração ao Compromisso",
      desc: "Passos práticos para consolidar o interesse magnético em um compromisso de casal sólido e dedicado, onde ele seja o maior interessado em estar com você.",
    }
  ];

  return (
    <div id="authority-discovery-block-five" className="w-full bg-[#030101] relative overflow-hidden text-white font-sans">
      
      {/* Visual Top Decorative Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      
      {/* Soft Elegant Ambient Lighting Glows */}
      <div className="absolute top-[25%] left-[-15%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#9E1B32]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[35%] right-[-15%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#D4AF37]/4 rounded-full blur-[140px] pointer-events-none" />

      {/* -------------------- MAIN SECTION: STORY & REVELATION -------------------- */}
      <section className="relative z-10 py-24 px-4 md:px-8 max-w-7xl mx-auto">
        


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: THE DISCOVERY STORY & AUTHOR COPY (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] block">
                Pesquisa Comportamental e Psicologia Evolutiva
              </span>
              
              <h2 className="font-serif text-2xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight">
                Depois de anos estudando biologia, comportamento evolutivo e padrões de conexão emocional...
              </h2>
              
              <div className="w-20 h-0.5 bg-[#D4AF37]" />
            </div>

            {/* Author Copy */}
            <div className="space-y-6 text-sm md:text-base text-neutral-300 leading-relaxed font-sans">
              <p className="font-serif italic text-[#F5E298] text-base md:text-lg">
                "Descobri algo que mudou para sempre a forma como encaramos as relações amorosas. Uma verdade biológica oculta que 99% das mulheres nunca ouviu falar."
              </p>

              {/* Redefining points with checklist */}
              <div className="p-5 rounded-2xl bg-[#0F0507] border border-[#9E1B32]/15 space-y-3.5">
                <span className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider block font-serif">O que eu aprendi é que a atração real:</span>
                <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                  <div className="flex items-center gap-2 text-white/90">
                    <span className="text-red-500 font-black font-sans">✕</span>
                    <span>Não depende de beleza inacessível</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <span className="text-red-500 font-black font-sans">✕</span>
                    <span>Não depende de idade ou peso</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <span className="text-red-500 font-black font-sans">✕</span>
                    <span>Não depende de fazer joguinhos mentais</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <span className="text-red-500 font-black font-sans">✕</span>
                    <span>Não exige se humilhar ou implorar</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-2 font-sans">
                <p>
                  A grande verdade é que <strong className="text-white">existem gatilhos instintivos e comportamentais muito profundos</strong>, enraizados na mente inconsciente dos homens, que definem de maneira automática de quem ele vai se afastar e quem ele vai valorizar e desejar ao seu lado.
                </p>
                <p>
                  Quando você ignora esses gatilhos na sua comunicação diária com ele... ele naturalmente começará a esfriar, responderá com desdém, ou simplesmente perderá o interesse, se afastando para buscar outra prioridade que ative essas forças (mesmo que ela não seja mais atraente ou interessante que você).
                </p>
                <p className="border-l-4 border-[#9E1B32] pl-4 text-white font-medium italic">
                  "Mas quando você compreende e ativa esses interruptores emocionais internos, a postura dele com você dá uma virada completa de 180 graus de forma quase imediata, fazendo com que ele passe a te priorizar por vontade própria."
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: REASSURING PHOTO COMPOSITION (5 columns) */}
          <div className="lg:col-span-5 space-y-6 pt-6 lg:pt-12 relative flex flex-col items-center">
            
            <div className="relative w-full max-w-[340px] h-[400px]">
              
              {/* Photo 1: Higher Back Layer */}
              <div className="absolute right-0 top-0 w-[70%] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.7)] z-0 transition-transform duration-500 hover:scale-[1.03]">
                <img 
                  src={authorLibraryPortrait} 
                  alt="Estudo de comportamento e psicologia evolutiva" 
                  className="w-full h-full object-cover filter brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 right-3 text-[9px] font-sans text-white/60 tracking-widest uppercase font-semibold">
                  BASES EVOLUTIVAS
                </span>
              </div>

              {/* Photo 2: Front Layer */}
              <div className="absolute left-0 bottom-0 w-[75%] aspect-[3/4] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_25px_50px_rgba(0,0,0,0.85)] z-10 transition-transform duration-500 hover:scale-[1.03]">
                <img 
                  src={authorOfficePortrait} 
                  alt="Mariana Vabo • Especialista em comportamento humano" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-3.5 left-4 space-y-0.5">
                  <span className="text-[10px] text-[#D4AF37] tracking-wider font-extrabold uppercase block font-serif">
                    Mariana Vabo
                  </span>
                  <span className="text-[9px] text-white/80 font-medium font-sans">
                    Bióloga e Científica de Atracção
                  </span>
                </div>
              </div>

              <div className="absolute left-[-20px] top-[40px] text-amber-100/5 rotate-[-12deg] pointer-events-none select-none text-7xl font-serif">
                ★
              </div>
            </div>

            {/* Soft authority confirmation footer */}
            <div className="text-center md:text-left max-w-[340px] space-y-1 pt-2">
              <span className="text-[10px] uppercase font-bold text-teal-400 tracking-wider flex items-center justify-center md:justify-start gap-1.5 font-serif">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Embasamento Científico Real
              </span>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Fundamentado em princípios de psicologia comportamental e atração humana real, totalmente livre de técnicas baratas ou joguinhos de internet.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* -------------------- SUBSECTION 2: HISTÓRIAS & ANÁLISE COMPARTILHADA -------------------- */}
      <section className="relative z-10 bg-[#080203] pb-24 px-4 md:px-8 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto pt-20">
          
          {/* Core Insights Highlight banner */}
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-5">
            <h3 className="font-serif text-xl md:text-3.5xl font-extrabold text-white leading-tight uppercase">
              Ao longo dos anos de estudos, analisei centenas de dinâmicas relacionais e gatilhos que se repetiam nas mulheres que os homens consideram absolutamente inesquecíveis...
            </h3>
            <div className="w-16 h-0.5 bg-[#D4AF37]/50 mx-auto" />
            <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              E descobri um fator comum absoluto entre as mulheres que conseguem inspirar profundo respeito, atração e compromisso genuíno: elas não se desgastam correndo atrás, não mendigam atenção e nunca demonstram carência ansiosa. Elas simplesmente sabem ativar os gatilhos emocionais corretos no inconsciente masculino.
            </p>
          </div>

          {/* THE GRAND INTRODUCTION OF METODO */}
          <div className="text-center max-w-3xl mx-auto space-y-8 bg-gradient-to-b from-[#140609] to-[#040102] rounded-3xl p-8 md:p-14 border border-[#D4AF37]/20 shadow-[0_15px_40px_rgba(158,27,51,0.15)] mb-20 relative">
            
            <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-serif text-sm font-black shadow-lg">
              ★
            </div>

            <div className="space-y-3">
              <span className="text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase font-serif block">
                Um Método Estruturado e Confiável
              </span>
              <h2 className="font-serif text-2xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
                ASSIM NASCEU O CÓDIGO DA MULHER INESQUECÍVEL
              </h2>
            </div>
            
            <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed">
              Um guia direto, objetivo e profundamente prático, criado para te revelar com exatidão como funciona a psicologia e o inconsciente masculino de forma limpa, sem joguinhos infantis ou mentiras da internet. Apenas psicologia do comportamento real.
            </p>

            <div className="h-px bg-white/[0.06] w-2/3 mx-auto" />

            {/* Grid display showcasing WHAT SHE WILL DISCOVER */}
            <div className="space-y-4 text-left">
              <h4 className="font-serif text-xs md:text-sm font-black uppercase text-center text-[#D4AF37] tracking-wider mb-6">
                Veja uma prévia do que você vai descobrir lá dentro:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feat, idx) => (
                  <motion.div 
                    key={idx}
                    id={`method-curriculum-${idx}`}
                    className="p-5 rounded-xl bg-black/40 border border-white/[0.04] flex items-start gap-3 hover:border-[#D4AF37]/25 transition-all"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                  >
                    <div className="w-5 h-5 rounded bg-teal-950/40 border border-teal-500/30 flex items-center justify-center shrink-0 text-teal-400 mt-0.5">
                      <span className="text-xs font-bold font-sans">✓</span>
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-serif text-[12px] md:text-[13.5px] font-extrabold text-white uppercase tracking-tight">
                        {feat.title}
                      </h5>
                      <p className="font-sans text-[11px] md:text-xs text-neutral-400 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="font-serif italic text-xs md:text-sm text-[#F5E298] max-w-2xl mx-auto pt-4 leading-relaxed">
              "Tudo unificado em um manual conciso, direto ao ponto e criado para mulheres que decidiram compreender os homens de verdade e construir relacionamentos autênticos com valor mútuo."
            </p>
          </div>

          {/* THE BETTER NEWS ZONE */}
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <span className="px-3.5 py-1 rounded bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] md:text-xs tracking-widest font-black uppercase inline-block font-serif">
              Acesso Imediato Sem Esperas
            </span>
            
            <h4 className="font-serif text-xl md:text-3xl font-black text-white uppercase">
              E o melhor... você pode começar hoje mesmo.
            </h4>

            <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed max-w-lg mx-auto">
              Sim, todo este material é 100% digital e estará disponível para leitura imediata no seu celular, tablet ou computador a poucos segundos após a confirmação da compra.
            </p>

            <div className="pt-4 flex flex-col items-center gap-4">
              <motion.button
                onClick={onCtaClick}
                className="relative w-full max-w-md h-16 rounded-xl bg-gradient-to-b from-[#008000] via-[#006400] to-[#014101] text-white font-sans font-black text-[13px] md:text-[15px] uppercase tracking-wider shadow-[0_12px_30px_rgba(0,100,0,0.4)] border border-[#008000]/30 cursor-pointer overflow-hidden group flex items-center justify-center gap-3 hover:shadow-[0_15px_30px_rgba(212,175,55,0.2)] animate-pulse"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-6 h-6 rounded bg-black/25 flex items-center justify-center">
                  <Bookmark className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
                <span>QUERO GARANTIR MEU ACESSO INTEGRAL</span>
                <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform ml-1" />
                
                {/* Refletive gloss light */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[wiggle_1s_infinite] pointer-events-none" />
              </motion.button>

              {/* Secure information indicators */}
              <div className="flex items-center gap-4 text-[10px] md:text-xs text-neutral-400 font-sans font-medium mt-2">
                <span className="flex items-center gap-1 font-sans"><Lock className="w-3 h-3 text-[#D4AF37]" /> Servidor Seguro</span>
                <span>•</span>
                <span className="flex items-center gap-1 font-sans"><ShieldCheck className="w-3 h-3 text-[#D4AF37]" /> Compra Garantida</span>
                <span>•</span>
                <span className="flex items-center gap-1 font-sans"><Zap className="w-3 h-3 text-[#D4AF37]" /> Acesso Imediato</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
