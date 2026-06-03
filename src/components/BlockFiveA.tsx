import { motion } from "motion/react";
import { 
  Heart, 
  X, 
  Sparkles, 
  ChevronRight, 
  Lock, 
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle,
  Clock,
  Eye,
  AlertTriangle
} from "lucide-react";

interface BlockFiveAProps {
  onCtaClick: () => void;
}

export default function BlockFiveA({ onCtaClick }: BlockFiveAProps) {
  // Features with ❤️ (Portuguese for Women)
  const youCanAccomplish = [
    "Entender com precisão milimétrica o que faz um homem te ver como uma mulher magnética, única e insubstituível.",
    "Criar uma atração inabalável, mesmo se hoje ele se mostra frio, distante, sumido ou indiferente.",
    "Deixar de sentir que precisa mendigar por um mínimo de atenção, responder rápido ou viver sufocada pela dúvida.",
    "Descobrir como posicionar a sua presença feminina para que ele decida propor encontros e te buscar ativamente por iniciativa própria.",
    "Estabelecer uma sólida base biológica de atração onde seja ele quem lute pela sua atenção e exclusividade."
  ];

  // Features with ❌ (Portuguese for Women)
  const neverAgain = [
    "Passar horas olhando para a tela do celular esperando uma resposta dele que demora dias para chegar.",
    "Ficar analisando obsessivamente cada palavra ou emoji dele tentando decifrar se ele gosta de você ou não.",
    "Colocar 200% de esforço romântico e de tempo enquanto ele mal te dá migalhas de atenção e interesse.",
    "Perguntar-se com angústia constante por que ele mudou de atitude com você tão rápido e do nada.",
    "Acreditar erroneamente que precisa agradá-lo em absolutamente tudo e aceitar tudo para não perdê-lo."
  ];

  // Features with ✨ (Portuguese for Women)
  const imagineIf = [
    "Receber a atenção e o interesse dele de forma constante, sem ter que insistir, cobrar ou mendigar.",
    "Ver que ele faz todo o esforço possível para coincidir com os seus horários e prioridades diárias.",
    "Notar que ele te busca com entusiasmo genuíno, inicia as conversas e se preocupa com o seu bem-estar de verdade.",
    "Vê-lo investir a nível emocional no relacionamento porque assim deseja o instinto primitivo dele.",
    "Sentir a paz, segurança e o controle de uma mulher magnética e valorizada, deixando para trás a ansiedade de perseguição."
  ];

  return (
    <div id="transformation-block-five-a" className="w-full bg-[#050102] relative overflow-hidden text-white font-sans">
      
      {/* Sleek Golden Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      {/* Decorative luxury red and gold dark ambient lights */}
      <div className="absolute top-[15%] right-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#9E1B32]/4 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[15%] left-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#D4AF37]/3 rounded-full blur-[140px] pointer-events-none z-0" />

      <section className="relative z-10 py-24 px-4 md:px-8 max-w-6xl mx-auto">
        


        {/* BLOCK HEADER & PAIN BREAKPOINT */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
          <h2 className="font-serif text-2xl md:text-4.5xl font-black text-white leading-tight uppercase tracking-tight">
            DEIXE DE SE SENTIR INVISÍVEL, <span className="text-[#9E1B32]">IGNORADA</span> OU COMO A ÚLTIMA OPÇÃO NA AGENDA DELE
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
          <p className="font-sans text-xs md:text-sm text-neutral-400 max-w-xl mx-auto uppercase tracking-widest font-extrabold">
            Chegou o momento de resgatar o seu magnetismo feminino autêntico
          </p>
        </div>

        {/* GRID LAYOUT: COMPARATIVE COLUMNS (ACCOMPLISH VS NEVER AGAIN) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* COLUMN 1: WHAT YOU WILL ACCOMPLISH (❤️) */}
          <motion.div 
            id="accomplishments-card"
            className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#120508] to-[#050102] border border-[#9E1B32]/25 shadow-[0_15px_35px_rgba(0,0,0,0.5)] space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-b border-[#9E1B32]/20 pb-4 font-serif">
              <span className="text-[10px] font-bold text-teal-400 tracking-wider uppercase block mb-1">
                A Atração Certa
              </span>
              <h3 className="font-serif text-lg md:text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#9E1B32] fill-[#9E1B32]" />
                Com O Código da Mulher Inesquecível você vai:
              </h3>
            </div>

            <div className="space-y-4 pt-1">
              {youCanAccomplish.map((item, idx) => (
                <div key={idx} className="flex gap-3.5 items-start">
                  <div className="w-5 h-5 rounded-full bg-teal-950/40 border border-teal-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] text-teal-400 font-bold font-sans">✓</span>
                  </div>
                  <p className="text-xs md:text-[13.5px] text-neutral-200 leading-relaxed font-sans">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2: NEVER AGAIN (❌) */}
          <motion.div 
            id="never-again-card"
            className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#15110C] to-[#040102] border border-white/[0.04] shadow-[0_15px_35px_rgba(0,0,0,0.5)] space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-b border-white/[0.06] pb-4 font-serif">
              <span className="text-[10px] font-bold text-red-500 tracking-wider uppercase block mb-1">
                Quebrando o Ciclo
              </span>
              <h3 className="font-serif text-lg md:text-xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" />
                Nunca mais se permita passar por:
              </h3>
            </div>

            <div className="space-y-4 pt-1">
              {neverAgain.map((item, idx) => (
                <div key={idx} className="flex gap-3.5 items-start">
                  <div className="w-5 h-5 rounded-full bg-red-950/40 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] text-red-500 font-bold font-sans">✕</span>
                  </div>
                  <p className="text-xs md:text-[13.5px] text-neutral-300 leading-relaxed font-sans">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* FULL WIDTH TRANSITIONAL DISPLAY: IMAGINE COMO SERIA... (✨) */}
        <motion.div 
          id="imagine-how-card"
          className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20 bg-gradient-to-b from-[#180A0F] through-[#0C0204] to-black relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] mb-16"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Subtle gold line accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          
          <div className="text-center space-y-6 mb-10 font-serif">
            <span className="text-[#D4AF37] font-semibold text-[10px] md:text-xs tracking-[0.25em] uppercase block">
              Projeção de Futuro
            </span>
            <h3 className="font-serif text-xl md:text-3xl font-extrabold uppercase text-white flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              IMAGINE COMO SERIA A SUA VIDA...
            </h3>
            <div className="w-12 h-px bg-white/10 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            {imagineIf.map((item, idx) => (
              <div 
                key={idx} 
                className="flex gap-3 p-4 rounded-xl bg-black/40 border border-white/[0.04] hover:border-[#D4AF37]/15 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5 border border-[#D4AF37]/20">
                  <span className="text-[10px] text-[#D4AF37] font-bold">✨</span>
                </div>
                <p className="text-xs md:text-sm text-neutral-200 leading-relaxed font-sans">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CORE SECRET BANNER (QUE MUDA TUDO...) */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16 font-sans">
          <span className="px-3 border-l-2 border-r-2 border-[#D4AF37]/45 text-[10px] tracking-widest text-[#D4AF37] font-bold uppercase inline-block font-serif">
            O Grande Divisor de Águas
          </span>
          <h4 className="font-serif text-lg md:text-2xl font-black text-white uppercase leading-relaxed max-w-2xl mx-auto">
            Se existe um conhecimento que realmente muda as regras do jogo... É quando você compreende como ativar o instinto primitivo no cérebro subconsciente masculino.
          </h4>
          <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed max-w-xl mx-auto justify-center">
            Porque quando você assimila este princípio biológico na sua dinâmica diária, deixa automaticamente de pressionar ou mendigar por um espaço na vida dele, e passa a se posicionar com uma solidez emocional altamente magnética.
          </p>
        </div>

        {/* THE HIGHLIGHT */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-black/55 p-6 md:p-8 border border-white/[0.05] text-center space-y-4 mb-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-4 -translate-y-1/2 text-white/5 font-serif text-[120px] pointer-events-none select-none font-black animate-pulse">
            ✦
          </div>
          <div className="relative z-10 space-y-2">
            <span className="text-[10px] uppercase font-extrabold text-teal-400 tracking-widest block font-serif">Atração Real e Magnética</span>
            <h5 className="font-serif text-base md:text-lg font-bold text-white uppercase">
              O MELHOR DE TUDO?
            </h5>
            <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              Você não precisa fingir ser quem não é, nem usar truques ridículos de manipulação barata. Você apenas compreenderá a biologia profunda que a maioria ignora, ganhando calma, clareza e autoridade absoluta em sua vida amorosa.
            </p>
          </div>
        </div>

        {/* CALL TO ACTION AREA */}
        <div className="text-center space-y-6 pt-4 max-w-md mx-auto">
          <motion.button
            onClick={onCtaClick}
            className="relative w-full h-16 rounded-xl bg-gradient-to-b from-[#008000] via-[#006400] to-[#014101] text-white font-sans font-black text-[12px] md:text-[14px] uppercase tracking-wider shadow-[0_12px_30px_rgba(0,100,0,0.4)] border border-[#008000]/30 cursor-pointer overflow-hidden group flex items-center justify-center gap-3.5 hover:shadow-[0_15px_30px_rgba(212,175,55,0.25)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-6 h-6 rounded bg-black/30 flex items-center justify-center">
              <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]/30" />
            </div>

            <span>QUERO DESBLOQUEAR O CÓDIGO DA MULHER INESQUECÍVEL AGORA</span>

            <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform ml-1" />
            
            {/* Gloss light reflex effect */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[wiggle_1s_infinite] pointer-events-none" />
          </motion.button>

          {/* Secure Indicators */}
          <div className="flex items-center justify-center gap-x-5 gap-y-1.5 flex-wrap text-[10px] md:text-xs text-neutral-400 font-sans-elite font-medium">
            <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-[#D4AF37]" /> Servidor Criptografado</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Privacidade Protegida</span>
            <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-[#D4AF37]" /> Download Instantâneo</span>
          </div>
        </div>

      </section>

    </div>
  );
}