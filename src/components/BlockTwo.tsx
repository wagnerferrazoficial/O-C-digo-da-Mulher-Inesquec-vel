import { motion } from "motion/react";
import { 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Youtube, 
  Heart, 
  ThumbsUp, 
  Check, 
  CheckCircle2, 
  Lock, 
  ShieldCheck, 
  Award, 
  Zap, 
  Sparkles,
  ChevronRight,
  XCircle
} from "lucide-react";

// Importing the generated ultra-realistic pictures
import coupleHistoryCenter from "../assets/images/couple_history_center_1780456027843.png";
import coupleElegantCafe from "../assets/images/couple_elegant_cafe_1780456061482.png";
import coupleCoastalTravel from "../assets/images/couple_coastal_travel_1780456127063.png";
import coupleDinnerRomantic from "../assets/images/couple_dinner_romantic_1780456142664.png";

interface BlockTwoProps {
  onCtaClick: () => void;
}

export default function BlockTwo({ onCtaClick }: BlockTwoProps) {
  // Testimonial Screenshots / Prints Data rewritten into Portuguese for Women
  const prints = [
    {
      id: "whatsapp-01",
      platform: "WhatsApp",
      user: "Juliana R.",
      detail: "31 anos • WhatsApp",
      message: "No início eu não acreditava. Ele me ignorava por dias e não demonstrava nenhum interesse... Assim que apliquei as técnicas, ele mesmo me mandou mensagem me convidando para sair. Estou em choque de verdade! 🔥",
      avatarBg: "bg-teal-700/80",
      icon: MessageCircle,
      iconColor: "text-green-400",
      bgColor: "bg-[#0B141A]", // Sleek WhatsApp dark theme
      accentBorder: "border-teal-500/20",
    },
    {
      id: "whatsapp-02",
      platform: "WhatsApp",
      user: "Letícia M.",
      detail: "28 anos • WhatsApp",
      message: "Parecia que era sempre eu quem fazia todo o esforço. Pela primeira vez em meses, ele começou a tomar a iniciativa sem eu precisar cobrar ou insistir. É incrível como isso funciona!",
      avatarBg: "bg-emerald-700/80",
      icon: MessageCircle,
      iconColor: "text-green-400",
      bgColor: "bg-[#0B141A]",
      accentBorder: "border-emerald-500/20",
    },
    {
      id: "whatsapp-03",
      platform: "WhatsApp",
      user: "Amanda G.",
      detail: "35 anos • WhatsApp",
      message: "Em poucos dias comecei a notar que ele me dava muito mais atenção, me mandava mensagens para saber como eu estava e procurava desculpas para me ver. Recomendo muito!",
      avatarBg: "bg-cyan-700/80",
      icon: MessageCircle,
      iconColor: "text-green-400",
      bgColor: "bg-[#0B141A]",
      accentBorder: "border-cyan-500/20",
    },
    {
      id: "instagram-04",
      platform: "Instagram DM",
      user: "amanda_p_",
      detail: "Comentário • Instagram",
      message: "Eu já tinha tentado de tudo com os conselhos típicos dessas blogueiras de relacionamento na internet, e nada funcionava. Este método ativou o instinto inconsciente dele e hoje ele está completamente louco por mim. Vale cada centavo.",
      avatarBg: "bg-fuchsia-700/80",
      icon: Instagram,
      iconColor: "text-pink-400",
      bgColor: "bg-[#121212]", // Instagram dark mode background
      accentBorder: "border-pink-500/20",
    },
  ];

  // Transformation stories translated and adapted to Portuguese for Women
  const stories = [
    {
      title: "Mariana e Ricardo",
      description: "Após semanas em que parecia que a relação estava esfriando e ele vivia dando desculpas, Mariana aplicou o método. Hoje desfrutam de uma conexão intensa e ele faz questão de propor os planos.",
      image: coupleHistoryCenter,
      alt: "Mariana e Ricardo caminhando de mãos dadas",
      visualTip: "Reconexão profunda após ativar o magnetismo"
    },
    {
      title: "Sofia e Lucas",
      description: "Sofia sentia que Lucas estava distante e desinteressado. Após ativar os gatilhos emocionais ocultos, percebeu uma virada total: ele se tornou atencioso, presente e muito carinhoso.",
      image: coupleElegantCafe,
      alt: "Sofia e Lucas em um café",
      visualTip: "Chamas do desejo reacendidas com força"
    },
    {
      title: "Gabriela e Pedro",
      description: "Gabriela achava que o interesse dele tinha sumido de vez. Com pequenas mudanças na sua postura e dinâmica emocional, Pedro voltou a vê-la como sua prioridade inquestionável.",
      image: coupleCoastalTravel,
      alt: "Gabriela e Pedro viajando",
      visualTip: "Obsessão e cumplicidade restauradas no casal"
    },
    {
      title: "Larissa e Bruno",
      description: "Reconstruíram a atração física e psicológica em níveis muito mais profundos do que jamais tinham experimentado, deixando o fantasma do desinteresse para trás.",
      image: coupleDinnerRomantic,
      alt: "Larissa e Bruno jantando",
      visualTip: "Atração renovada e duradoura sem desculpas"
    }
  ];

  return (
    <div id="results-and-transformation-block" className="w-full bg-black relative">
      
      {/* -------------------- SECTION 1: RESULTADOS & PRINTS -------------------- */}
      <section className="relative w-full py-20 px-4 md:px-8 border-t border-white/[0.05] overflow-hidden bg-gradient-to-b from-black via-[#110609] to-black">
        
        {/* Ambient Dark-red backdrop glow to connect with Hero */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#9E1B32]/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Indicator */}
          <div className="flex justify-center mb-4">
            <span className="px-3 py-1 rounded-full text-[10px] md:text-xs font-cinzel tracking-[0.2em] font-extrabold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/25 uppercase">
              Resultados Reais
            </span>
          </div>

          {/* Section Main Title */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-2xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight">
              O Método Que Está Ajudando{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5E298] via-[#FFEBC2] to-[#D4AF37]">
                Mulheres Comuns
              </span>{" "}
              a Despertar Desejo, Atenção Absoluta e Obsessão Masculina
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent mx-auto" />
            <p className="font-sans text-xs md:text-sm text-amber-50/70 leading-relaxed max-w-2xl mx-auto">
              Depois de aprenderem os princípios d’<strong className="text-[#D4AF37] font-semibold">O Código da Mulher Inesquecível</strong>, centenas de alunas relatam mudanças drásticas no comportamento dos homens, que passam a demonstrar interesse real e procurá-las de forma voluntária.
            </p>
          </div>

          {/* Print Cards Grid (WhatsApp, Insta, Facebook, Youtube Mockups) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {prints.map((print, index) => {
              const ScreenIcon = print.icon;
              return (
                <motion.div
                  key={print.id}
                  id={`testimonial-print-${index}`}
                  className={`flex flex-col h-full rounded-2xl border ${print.accentBorder} ${print.bgColor} shadow-lg p-5 relative overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/35 hover:-translate-y-1`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <div className="absolute right-3 top-3 opacity-[0.03] pointer-events-none">
                    <ScreenIcon className="w-24 h-24 stroke-[1]" />
                  </div>

                  <div className="flex items-center gap-3 pb-3.5 border-b border-white/[0.06] mb-3.5">
                    <div className={`w-9 h-9 rounded-full ${print.avatarBg} flex items-center justify-center text-white font-sans font-bold text-xs shrink-0 shadow-inner`}>
                      {print.user.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-sans text-xs md:text-sm font-bold text-amber-50/95 truncate">
                        {print.user}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[10px] text-white/50 font-sans">
                          {print.detail}
                        </span>
                        <CheckCircle2 className="w-3 h-3 text-[#D4AF37] fill-transparent stroke-[2]" />
                      </div>
                    </div>
                    <span className="text-[9px] font-sans tracking-wider uppercase opacity-60 text-white border border-white/10 px-2 py-0.5 rounded mr-1">
                      {print.platform.split(" ")[0]}
                    </span>
                  </div>

                  <div className="flex-1 text-xs md:text-[13px] text-amber-50/90 leading-relaxed font-sans italic pl-1">
                    "{print.message}"
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-white/[0.04]">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-[#D4AF37]">
                        <Check className="w-3.5 h-3.5" />
                        <Check className="w-3.5 h-3.5 -ml-2" />
                        <span className="text-[9px] font-sans text-white/40 ml-1">visto às 09:41</span>
                      </div>
                    </div>

                    <div className="text-[9px] font-sans text-[#D4AF37]/50 tracking-wider font-semibold">
                      ALUNA ATIVA
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* -------------------- SECTION 2: TRANSFORMATION STORIES -------------------- */}
      <section className="relative w-full py-20 px-4 md:px-8 bg-[#080203]">
        
        {/* Soft elegant lights background */}
        <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] bg-[#2A141A]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Indicator */}
          <div className="flex justify-center mb-4">
            <span className="px-3 py-1 rounded-full text-[10px] md:text-xs font-cinzel tracking-[0.2em] font-extrabold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/25 uppercase">
              Atração Real
            </span>
          </div>

          {/* Title */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-2xl md:text-4xl font-extrabold text-white leading-tight uppercase">
              Histórias de Sucesso Feminino
            </h2>
            <div className="w-16 h-0.5 bg-[#D4AF37]/50 mx-auto" />
            <p className="font-sans text-xs md:text-sm text-amber-50/70 max-w-xl mx-auto">
              Veja a evolução prática que nossas alunas experimentaram após ativarem os gatilhos emocionais da atração.
            </p>
          </div>

          {/* Couples grid cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
            {stories.map((story, index) => (
              <motion.div
                key={story.title}
                id={`story-card-${index}`}
                className="group flex flex-col sm:flex-row rounded-2xl overflow-hidden bg-black border border-white/[0.05] shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:border-[#D4AF37]/25 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(212,175,55,0.05)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-full sm:w-1/2 h-56 sm:h-auto min-h-[220px] relative overflow-hidden shrink-0">
                  <img
                    src={story.image}
                    alt={story.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2.5s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
                  
                  <span className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded text-[10px] font-sans text-[#D4AF37]/90 uppercase font-semibold">
                    {story.title}
                  </span>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <h3 className="font-serif text-lg md:text-xl font-bold text-white uppercase tracking-tight">
                      {story.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed">
                    {story.description}
                  </p>

                  <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-sans text-[#D4AF37]/60 font-medium italic">
                    <span>💡 {story.visualTip}</span>
                    <span className="text-[10px] uppercase font-bold text-teal-400 not-italic">Resultado</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------- SECTION 3: COMPARISON SIDE-BY-SIDE TAB (SCREENSHOT 1) -------------------- */}
      <section className="relative w-full py-24 px-4 md:px-8 border-t border-white/[0.05] overflow-hidden bg-gradient-to-b from-[#050102] via-[#0B0204] to-black">
        
        {/* Subtle decorative glow stars */}
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-[#9E1B32]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-[#D4AF37]/4 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          
          {/* Main Screenshot Header Title */}
          <div className="space-y-4 mb-16">
            <span className="text-red-500 font-sans font-bold text-xs md:text-sm tracking-widest uppercase block animate-pulse">
              A diferença é brutal
            </span>
            <h2 className="font-serif text-3xl md:text-[42px] font-black text-white leading-tight uppercase max-w-4xl mx-auto">
              Esta é a única decisão sensata para que o homem que você tanto deseja fique completamente louco por você!
            </h2>
            <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
            
            <p className="font-sans text-neutral-300 text-sm md:text-base max-w-3xl mx-auto pt-4 leading-relaxed">
              Até quando você vai continuar se desgastando para chamar a atenção dele? Correndo atrás, sendo ignorada, rejeitada ou tratada apenas como uma opção passageira? <br /><br />
              Já é hora de deixar de ser aquela mulher que ele só procura quando convém... E passar a ser a única mulher que ele pensa, deseja e faz de tudo para ter por perto. Chega de mendigar migalhas de atenção.
            </p>

            <p className="font-serif text-lg md:text-xl text-[#CD9B4A] font-extrabold max-w-3xl mx-auto pt-4 uppercase tracking-wide">
              O Código da Mulher Inesquecível é o passo que te separa de se tornar o tipo de mulher que os homens simplesmente não conseguem tirar da cabeça.
            </p>
          </div>

          {/* TWO SIDE-BY-SIDE COLUMNS COMPARISON CARD (EXACT REPLICA FROM SCREENSHOT 1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto mb-16 text-left">
            
            {/* COLUMN 1: LIBRO - LA GUÍA DEL INSTINTO PRIMITIVO */}
            <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-b from-teal-950/20 via-black to-[#05110E] p-8 md:p-10 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,128,128,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-white/[0.08]">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                  <h3 className="font-serif text-lg md:text-xl font-extrabold text-white uppercase tracking-tight">
                    Livro - O Código da Mulher Inesquecível
                  </h3>
                </div>

                <div className="space-y-4 text-xs md:text-sm text-neutral-300 font-sans font-medium">
                  <div className="flex gap-3 items-start">
                    <span className="text-teal-400 text-sm mt-0.5">✔</span>
                    <p>Comprovado cientificamente pela psicologia</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-teal-400 text-sm mt-0.5">✔</span>
                    <p>Totalmente acessível e fácil de aplicar</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-teal-400 text-sm mt-0.5">✔</span>
                    <p>Faça ele correr atrás de você de forma natural, sem precisar cobrar ou insistir</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-teal-400 text-sm mt-0.5">✔</span>
                    <p>Ative o interesse genuíno e a atração emocional sem depender de joguinhos desgastantes</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-teal-400 text-sm mt-0.5">✔</span>
                    <p>Permite virar o jogo de forma elegante e fazer com que o homem que antes sumia agora te procure</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-teal-400 text-sm mt-0.5">✔</span>
                    <p>Desperta gatilhos comportamentais profundos que criam uma forte conexão emocional</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#008080]/20">
                <p className="font-serif italic text-sm text-teal-300 font-bold leading-normal">
                  "Com este método, você conseguirá se posicionar de forma tão magnética que ele sentirá um medo real de te perder."
                </p>
              </div>
            </div>

            {/* COLUMN 2: OTRAS ALTERNATIVAS DE LOS COACHCITOS DE SEDUCCIÓN */}
            <div className="rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-950/10 via-black to-[#110508] p-8 md:p-10 flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-white/[0.08]">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <h3 className="font-serif text-lg md:text-xl font-extrabold text-white uppercase tracking-tight">
                    Outras "alternativas" de conselhos antigos
                  </h3>
                </div>

                <div className="space-y-4 text-xs md:text-sm text-neutral-400 font-sans">
                  <div className="flex gap-3 items-start">
                    <span className="text-red-500 text-sm mt-0.5">✖</span>
                    <p>Sem qualquer base comportamental ou científica</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-red-500 text-sm mt-0.5">✖</span>
                    <p>Fazem você perder tempo e paciência sem ver resultados</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-red-500 text-sm mt-0.5">✖</span>
                    <p>Mantêm você presa no ciclo de correr atrás e se desgastar</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-red-500 text-sm mt-0.5">✖</span>
                    <p>Obrigam você a seguir regras artificiais que te fazem parecer insegura</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-red-500 text-sm mt-0.5">✖</span>
                    <p>Gera distanciamento e frieza por parte dele no dia a dia</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-red-500 text-sm mt-0.5">✖</span>
                    <p>E no final, você acaba se desgastando e sendo vista apenas como um passatempo</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-red-500/10">
                <p className="font-serif italic text-sm text-red-400 font-bold leading-normal">
                  "O resultado: você se sente insegura, frustrada e se questionando o tempo todo."
                </p>
              </div>
            </div>

          </div>

          {/* Quick interactive call to action underneath */}
          <div className="py-2.5 space-y-6">
            <p className="font-serif text-base md:text-lg font-black text-white uppercase tracking-tight max-w-xl mx-auto">
              Eu te desafio a encontrar qualquer outro livro que te ensine isso com tanta elegância, clareza e resultados.
            </p>
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <motion.button
                onClick={onCtaClick}
                className="relative w-full max-w-sm h-16 rounded-xl bg-gradient-to-b from-[#008000] via-[#006400] to-[#014101] text-white font-sans font-black text-xs md:text-sm uppercase tracking-wider shadow-[0_12px_30px_rgba(0,100,0,0.45)] border border-[#008000]/30 cursor-pointer overflow-hidden group flex items-center justify-center gap-3.5 hover:shadow-[0_15px_30px_rgba(212,175,55,0.25)]"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
              >
                <div className="w-6 h-6 rounded bg-black/25 flex items-center justify-center">
                  <Lock className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]/30" />
                </div>

                <span>QUERO GARANTIR MEU ACESSO COMPLETO</span>

                <ChevronRight className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform ml-1" />
                <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[wiggle_1s_infinite] pointer-events-none" />
              </motion.button>

              <div className="flex items-center justify-center gap-x-5 gap-y-1.5 flex-wrap text-[10px] md:text-xs text-neutral-400">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Acesso Completo</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-[#D4AF37]" /> Garantia de 7 Dias</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-[#D4AF37]" /> Entrega Imediata</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
