import { motion } from "motion/react";
import { 
  X, 
  Sparkles, 
  AlertCircle, 
  BookOpen, 
  VolumeX
} from "lucide-react";

// Using the elegant woman portrait for direct brand alignment
import elegantWomanImg from "../assets/images/unforgettable_woman_portrait_1780455560774.png";

interface BlockFourProps {
  onCtaClick?: () => void;
}

export default function BlockFour({ onCtaClick }: BlockFourProps) {
  // False beliefs women have about men (Portuguese for Women)
  const falseBeliefs = [
    { 
      title: "Beleza Irresistível", 
      desc: "A beleza física atrai os olhares de imediato, mas os gatilhos biológicos masculinos que realmente ativam a obsessão emocional vão muito além do visual." 
    },
    { 
      title: "Estar 100% disponível", 
      desc: "A ansiedade e o medo de perder fazem você se colocar sempre à disposição. Isso anula a tensão emocional e o instinto masculino de conquista." 
    },
    { 
      title: "Cobrar com textões", 
      desc: "Tentar forçar conversas intermináveis por mensagens apenas pressiona o homem e desgasta seu magnetismo, fazendo ele perder o interesse de forma silenciosa." 
    },
    { 
      title: "Esforço unilateral", 
      desc: "Carregar a relação inteira nas costas, planejando e cobrando tudo sozinha, apenas te faz parecer ansiosa e sem valor perante ele." 
    },
    { 
      title: "Mendigar compromisso", 
      desc: "Cobrar um relacionamento sério ou se declarar antes que exista atração emocional mútua gera desconforto, fazendo ele se afastar involuntariamente." 
    }
  ];

  // Core Pillars of O Código da Mulher Inesquecível (Portuguese)
  const methodPillars = [
    { 
      title: "Gatilho de Conexão Emocional Magnética", 
      text: "Princípios da psicologia evolutiva que desarmam o distanciamento de um homem, ativando uma atração sincera por você." 
    },
    { 
      title: "Postura d'A Mulher Inesquecível", 
      text: "Mudanças na sua comunicação e atitude que elevam o seu valor, fazendo você deixar de ser uma opção rápida para se tornar a prioridade exclusiva dele." 
    },
    { 
      title: "Exclusividade e Devoção Total", 
      text: "Como gerar memórias tão marcantes e profundas que ele simplesmente se tornará incapaz de conceber um futuro feliz sem a sua presença." 
    }
  ];

  return (
    <div id="the-revelation-block-four" className="w-full bg-black relative">
      <section className="relative w-full py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-[#050102] via-[#0E0407] to-black">
        
        {/* Soft, warm luxury background visual elements */}
        <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] bg-[#9E1B32]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-15%] w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 font-sans">
          


          {/* Core Card Section */}
          <motion.div 
            id="creed-breaker-white-page" 
            className="w-full bg-[#FAF9F5] rounded-3xl text-[#1C1816] shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-white/20 p-8 md:p-14 lg:p-16 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Top gold geometric line detail */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            
            <div className="space-y-10">
              
              {/* HEADER: BIG HEADINGS & INTRODUCING THE COMMON SABOTAGE */}
              <div className="text-center space-y-6 max-w-4xl mx-auto">
                <span className="text-[11px] md:text-xs font-serif font-black tracking-[0.25em] text-[#9E1B32] uppercase block">
                  A verdade oculta que ninguém te conta sobre a mente masculina
                </span>
                
                <h2 className="font-serif text-2xl md:text-4xl lg:text-4.5xl font-black text-[#1C1816] uppercase leading-tight tracking-tight">
                  A VERDADE SOBRE OS HOMENS QUE A SOCIEDADE TE OCULTA
                </h2>

                <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto opacity-70" />

                <h3 className="font-serif italic text-base md:text-lg text-neutral-500 font-medium leading-relaxed max-w-3xl mx-auto">
                  Se tudo o que você aprendeu sobre os homens e relacionamentos veio de redes sociais, comédias românticas ou conselhos de amigas solteiras...
                </h3>

                {/* Severe warning highlighted badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#9E1B32]/10 border border-[#9E1B32]/25 text-[#9E1B32] text-xs md:text-[13px] font-bold tracking-wide shadow-sm max-w-xl mx-auto mt-2 text-left">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Lamento dizer, mas esses conselhos errados estão sabotando a sua vida amorosa e afastando os homens de você.</span>
                </div>
              </div>

              {/* TWO COLUMN EXPLANATORY PARAGRAPH */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#4E4742] text-xs md:text-sm leading-relaxed border-t border-[#EDEBE5] pt-10 font-sans">
                <div className="space-y-4">
                  <p>
                    A grande realidade é que a imensa maioria dos conselhos que você ouve por aí foram criados com boas intenções, mas <strong className="text-[#1C1816] font-semibold">carecem de embasamento comportamental</strong> sob a ótica evolutiva da mente masculina inconsciente.
                  </p>
                  <p>
                    Muitas vezes, as pessoas desconhecem por completo os verdadeiros gatilhos emocionais que despertam a obsessão e o interesse genuíno de um homem, enquanto ignoram por que algumas poucas mulheres conseguem ter tudo o que desejam de forma natural.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    As suas amigas e os posts de internet não conseguem explicar os padrões comportamentais exatos que tornam uma mulher <strong className="text-[#9E1B32] font-semibold">absolutamente inesquecível</strong>, a ponto de fazê-lo desejar assumir um compromisso sério e de forma voluntária.
                  </p>
                  <p className="border-l-4 border-[#D4AF37] pl-4 italic text-[#6E6760] font-sans">
                    "É extremamente cansativo agir às cegas no amor, tentando técnicas artificiais de relacionamento apenas para tentar agradá-lo."
                  </p>
                </div>
              </div>

              {/* LIST OF DOOM */}
              <div className="bg-[#FAF8F2] rounded-2xl border border-black/5 p-6 md:p-10 space-y-6">
                <div className="text-center space-y-2">
                  <span className="text-[10px] uppercase font-bold text-[#9E1B32] tracking-widest block">O SINTOMA</span>
                  <h4 className="font-serif text-lg md:text-xl font-bold text-[#1C1816] uppercase">
                    Por que a maioria das mulheres se sente frustrada:
                  </h4>
                  <p className="text-xs text-[#6E6760] font-sans">
                    Elas fazem exatamente tudo o que a cartilha social dita como supostamente correto:
                  </p>
                </div>

                {/* Subversive Errors Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {falseBeliefs.map((belief, idx) => (
                    <div 
                      key={idx} 
                      className="p-5 rounded-xl bg-white border border-[#EDEBE5] shadow-sm flex flex-col justify-between hover:border-red-200 transition-colors duration-300"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-[#9E1B32]">
                          <X className="w-4 h-4 shrink-0 stroke-[2.5]" />
                          <h5 className="font-serif font-black text-xs md:text-[13px] uppercase tracking-tight text-[#1C1816]">
                            {belief.title}
                          </h5>
                        </div>
                        <p className="text-[11px] text-[#5C5551] leading-relaxed font-sans">
                          {belief.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* disappointed punchline */}
                <div className="text-center text-xs md:text-sm text-[#9E1B32] font-serif font-black italic pt-2 uppercase tracking-wide">
                  "E apesar de sua dedicação constante... continuam vendo os homens perderem o interesse, se afastarem ou tratá-las apenas como uma opção passageira."
                </div>
              </div>

              {/* CORE CULPRIT: REMOVING BLAME FROM HER */}
              <div className="border-t border-[#EDEBE5] pt-10 text-center space-y-6">
                <span className="text-[#9E1B32] uppercase text-xs font-bold tracking-widest block">E A PIOR PARTE?</span>
                
                <p className="text-[#3C3531] text-sm md:text-base leading-relaxed max-w-3xl mx-auto space-y-4">
                  Muitas mulheres carregam a dolorosa sensação de que <strong className="text-[#1C1816] underline decoration-[#D4AF37]/60 underline-offset-4">há algo de errado com elas mesmas</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto py-2">
                  <div className="p-3 bg-white border border-[#EDEBE5] rounded-xl flex items-center justify-center gap-2">
                    <span className="text-xs text-[#9E1B32] font-black">✔</span>
                    <span className="text-xs text-[#4E4742] font-medium font-sans">Nunca foi o seu físico</span>
                  </div>
                  <div className="p-3 bg-white border border-[#EDEBE5] rounded-xl flex items-center justify-center gap-2">
                    <span className="text-xs text-[#9E1B32] font-black">✔</span>
                    <span className="text-xs text-[#4E4742] font-medium font-sans">Nunca foi sua idade</span>
                  </div>
                  <div className="p-3 bg-white border border-[#EDEBE5] rounded-xl flex items-center justify-center gap-2">
                    <span className="text-xs text-[#9E1B32] font-black">✔</span>
                    <span className="text-xs text-[#4E4742] font-medium font-sans">Nunca foi seu valor</span>
                  </div>
                </div>

                <div className="max-w-2xl mx-auto text-[#4E4742] text-xs md:text-sm leading-relaxed bg-[#FAF8F5] p-5 rounded-xl border border-[#EDEBE5] text-left font-sans">
                  <p>
                    O verdadeiro e único problema é que <strong className="text-[#1C1816]">ninguém nunca te ensinou com bases reais</strong> como opera de verdade o instinto inconsciente e o sistema emocional biológico dos homens de valor.
                  </p>
                </div>
              </div>

              {/* TRANSITIONAL PIECE */}
              <div className="border-t border-b border-[#EDEBE5] py-8 text-center space-y-3">
                <h4 className="font-serif text-lg md:text-xl font-bold text-[#1C1816] uppercase tracking-normal">
                  Mas isso não precisa continuar assim.
                </h4>
                <p className="text-xs md:text-sm text-[#5C5551] max-w-2xl mx-auto leading-relaxed font-sans">
                  Porque hoje você está a poucos minutos de ter acesso às informações que apenas 1% das mulheres realmente domina. Uma revelação comportamental que vai elevar totalmente a sua vida amorosa.
                </p>
              </div>

              {/* INTRODUCING METODO */}
              <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
                
                {/* Brand book showcase */}
                <div className="lg:col-span-5 relative flex justify-center">
                  <div className="relative group w-full max-w-[280px]">
                    <div className="absolute inset-4 rounded-2xl bg-black/40 blur-xl group-hover:bg-black/55 transition-all" />
                    
                    <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/35 bg-[#1C1816]/95 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                      <div className="aspect-[3/4] relative overflow-hidden rounded-xl">
                        <img 
                          src={elegantWomanImg} 
                          alt="Capa do livro O Código da Mulher Inesquecível" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/35" />
                        
                        <div className="absolute inset-x-3 bottom-4 text-center space-y-1 z-10">
                          <span className="text-[9px] font-sans text-amber-100 uppercase tracking-[0.2em] opacity-80 block">O Método Exclusivo</span>
                          <h5 className="font-serif text-xs md:text-sm font-black text-white hover:text-[#D4AF37] uppercase tracking-wider leading-tight">
                            O Código da Mulher Inesquecível
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pillars of Method info */}
                <div className="lg:col-span-7 space-y-6 font-sans">
                  <div className="flex items-center gap-2 text-[#9E1B32]">
                    <VolumeX className="w-4 h-4" />
                    <span className="font-serif text-xs font-black tracking-widest uppercase">Chega de se desgastar ou mendigar atenção</span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2.5xl font-black text-[#1C1816] uppercase leading-tight">
                    APRESENTAMOS O CÓDIGO DA MULHER INESQUECÍVEL
                  </h3>

                  <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                    Um sistema estruturado para ativar os gatilhos subconscientes no cérebro biológico masculino, fazendo com que ele perceba o seu real valor, sinta atração magnética e queira estar ao seu lado de forma genuína.
                  </p>

                  <div className="space-y-4 pt-2">
                    {methodPillars.map((p, idx) => (
                      <div key={idx} className="flex gap-3 leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-[#9E1B32]/10 flex items-center justify-center shrink-0 mt-0.5 border border-[#9E1B32]/20">
                          <span className="text-[10px] text-[#9E1B32] font-black">✔</span>
                        </div>
                        <p className="text-xs text-[#5C5551]">
                          <strong className="text-[#1C1816] font-semibold">{p.title}:</strong> {p.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>



        </div>
      </section>
    </div>
  );
}
