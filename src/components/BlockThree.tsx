import { motion } from "motion/react";
import { 
  Heart, 
  HelpCircle, 
  XCircle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  UserCheck
} from "lucide-react";

export default function BlockThree() {
  // Questions that hook the female reader
  const desires = [
    "Fazer com que o homem que você deseja pense em você mesmo quando vocês não estão juntos?",
    "Sentir que ele escolhe você de forma espontânea, sem você precisar mendigar atenção?",
    "Fazer com que aquele homem que se afastou volte a sentir um desejo ardente por você?",
    "Deixar de ser apenas uma opção temporária e finalmente se tornar a prioridade absoluta dele?",
    "Entender por que os homens se apaixonam obsessivamente por algumas mulheres enquanto ignoram outras?",
    "Nunca mais sofrer tentando adivinhar o que realmente passa pela cabeça dele?",
    "Construir um magnetismo tão forte que ele não consiga se imaginar sem você no futuro?"
  ];

  // Common mistakes women make that actually push men away (Portuguese for Women)
  const commonMistakes = [
    { 
      title: "Ser boazinha demais", 
      desc: "Tentar agradar ele em tudo e anular suas próprias vontades, o que destrói a tensão da atração e anula o seu valor." 
    },
    { 
      title: "Estar 100% disponível", 
      desc: "Responder no mesmo segundo e estar sempre livre, eliminando o mistério e apagando por completo o instinto de conquista dele." 
    },
    { 
      title: "Pressionar com textões", 
      desc: "Enviar mensagens enormes para cobrar explicações ou pedir atenção quando ele se afasta, o que gera um afastamento imediato." 
    },
    { 
      title: "Colocar ele em um pedestal", 
      desc: "Fazer de tudo para impressioná-lo rápido demais, mostrando que ele já te tem nas mãos antes mesmo de demonstrar valor real." 
    },
    { 
      title: "Sempre tomar a iniciativa", 
      desc: "Mandar mensagem sempre primeiro, organizar tudo e nunca deixar o espaço necessário para que ele sinta a sua falta e te procure." 
    }
  ];

  // The positive activation sequence (Portuguese for Women)
  const shiftTriggers = [
    { 
      label: "Conexão Magnética", 
      text: "Ele naturalmente passa a pensar em você de forma constante ao longo do dia, lembrando da sua voz e das suas fotos." 
    },
    { 
      label: "Presença Cobiçada", 
      text: "Sua companhia e atenção se tornam o momento mais esperado, valioso e emocionante do dia dele." 
    },
    { 
      label: "Inversão de Papéis", 
      text: "A dinâmica muda e ele começa a tomar a iniciativa, mandando mensagens e fazendo questão de agendar encontros." 
    },
    { 
      label: "Conexão Inabalável", 
      text: "Ativa-se um gatilho emocional profundo no inconsciente dele que o impede de tirar você da cabeça." 
    }
  ];

  return (
    <div id="the-shift-block-three" className="w-full bg-[#050102] relative overflow-hidden text-white font-sans">
      
      {/* Luxurious Abstract Decorative Top Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />
      
      {/* Decorative Warm Red/Gold Ambient Glows */}
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#9E1B32]/5 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#D4AF37]/5 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* -------------------- PART 1: SÉ SINCERO... -------------------- */}
      <section className="relative z-10 pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        


        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl font-black tracking-tight text-white uppercase">
            SEJA SINCERA...
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
          <p className="font-serif italic text-base md:text-xl text-[#F5E298]/90 font-medium">
            Será que você não adoraria...
          </p>
        </div>

        {/* List of Intimate Desires */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20 text-left">
          {desires.map((desire, idx) => (
            <motion.div
              key={idx}
              id={`desire-card-${idx}`}
              className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#120609] via-[#0D0406] to-[#080203] border border-white/[0.04] shadow-md hover:border-[#D4AF37]/20 transition-all duration-300 hover:-translate-y-1 group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              {/* Soft Golden/Pink Heart Circle */}
              <div className="w-10 h-10 rounded-full bg-[#1e070d] border border-[#9E1B32]/35 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-5 h-5 text-[#9E1B32] fill-[#9E1B32]/35 group-hover:fill-[#9E1B32] transition-colors duration-300" />
              </div>
              <p className="text-sm md:text-base text-amber-50/90 font-medium leading-relaxed font-sans mt-0.5">
                {desire}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transitional Question Card */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20 bg-gradient-to-b from-[#160a0e] through-[#0a0406] to-[#040102] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          
          <div className="relative z-10 space-y-6">
            <h3 className="font-serif text-lg md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F5E298] via-[#FFEBC2] to-[#D4AF37] uppercase tracking-wider leading-relaxed">
              Você respondeu "SIM" a algum dos pontos acima?
            </h3>
            
            <p className="text-sm md:text-base text-amber-50/70 max-w-xl mx-auto font-sans leading-relaxed">
              Então há uma pergunta crucial e inevitável que você deve fazer a si mesma neste exato instante...
            </p>

            <div className="py-4">
              <span className="inline-block text-2xl md:text-4xl font-serif font-black text-white uppercase tracking-tight relative px-4">
                "Por que isso ainda não aconteceu?"
                <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-red-800/60" />
              </span>
            </div>

            {/* Hook: Loop Questions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left border-t border-white/[0.05]">
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wide">Frieza Inexplicável</span>
                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed italic">
                  "Por que os homens começam tão interessados no início, mas depois se afastam e ficam frios?"
                </p>
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wide">Perda de Interesse</span>
                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed italic">
                  "Por que ele parecia louco por você e, da noite para o dia, passou a te tratar apenas como uma opção passageira?"
                </p>
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wide">O Grande Contraste</span>
                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed italic">
                  "Por que outros perfis de mulheres despertam atração natural, enquanto você tenta ser atenciosa e acaba ignorada?"
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* -------------------- PART 2: YO SÉ EXACTAMENTE EL MOTIVO -------------------- */}
      <section className="relative z-10 py-20 px-4 md:px-8 bg-gradient-to-b from-[#050102] via-[#0E0407] to-[#050102] border-t border-b border-white/[0.03]">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-900/40 text-red-400 text-xs md:text-sm font-semibold">
              <AlertTriangle className="w-4 h-4" />
              <span>EU SEI EXATAMENTE O MOTIVO...</span>
            </div>

            <h3 className="font-serif text-2xl md:text-4xl font-extrabold text-white leading-tight uppercase tracking-tight">
              E acredite, não tem nada a ver com o que você imagina.
            </h3>

            {/* List of negated misconceptions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6">
              <div className="p-4 rounded-xl bg-black/45 border border-white/[0.03] space-y-1">
                <span className="text-[10px] text-white/50 block font-bold uppercase tracking-wider">Seu Físico</span>
                <p className="text-sm md:text-base font-serif font-bold text-red-400">Não é a chave</p>
              </div>
              <div className="p-4 rounded-xl bg-black/45 border border-white/[0.03] space-y-1">
                <span className="text-[10px] text-white/50 block font-bold uppercase tracking-wider">Sua Idade</span>
                <p className="text-sm md:text-base font-serif font-bold text-red-400 font-sans">Não importa</p>
              </div>
              <div className="p-4 rounded-xl bg-black/45 border border-white/[0.03] space-y-1">
                <span className="text-[10px] text-white/50 block font-bold uppercase tracking-wider">Seu Corpo</span>
                <p className="text-sm md:text-base font-serif font-bold text-red-400">Secundário</p>
              </div>
              <div className="p-4 rounded-xl bg-black/45 border border-white/[0.03] space-y-1">
                <span className="text-[10px] text-white/50 block font-bold uppercase tracking-wider">Ser Perfeita</span>
                <p className="text-sm md:text-base font-serif font-bold text-red-400">Não é o segredo</p>
              </div>
            </div>

            {/* Real reason box */}
            <div className="max-w-2xl mx-auto p-6 md:p-8 rounded-2xl bg-[#1c080d] border border-[#9E1B32]/20 shadow-inner text-left space-y-4">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-[#D4AF37]" />
                <span className="font-serif text-sm md:text-base font-black text-[#D4AF37] uppercase tracking-wider">A verdadeira razão é muito simples:</span>
              </div>
              <p className="text-sm md:text-base text-amber-50/90 leading-relaxed font-sans">
                Você nunca aprendeu os <strong className="text-white underline decoration-[#D4AF37] underline-offset-4">gatilhos emocionais e interruptores psicológicos</strong> do comportamento masculino que realmente ativam o instinto de proteção, desejo e a necessidade incontrolável de te valorizar e se comprometer com você.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* -------------------- PART 3: LA MAYORÍA DE LOS HOMBRES COMETEN EL MISMO ERRO -------------------- */}
      <section className="relative z-10 py-24 px-4 md:px-8 max-w-7xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mistakes Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="font-serif text-[11px] md:text-xs font-black tracking-widest text-[#D4AF37] uppercase">
                O Ciclo do Desgaste
              </span>
              <h3 className="font-serif text-2xl md:text-4xl font-black text-white uppercase leading-tight">
                A MAIORIA DAS MULHERES COMETE OS MESMOS ERROS...
              </h3>
              <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed">
                Tentam desesperadamente conquistar a atenção dele redobrando esforços que apenas desgastam seu próprio valor e atrativo:
              </p>
            </div>

            <div className="space-y-3 pt-4">
              {commonMistakes.map((mistake, idx) => (
                <div 
                  key={idx}
                  id={`mistake-item-${idx}`}
                  className="flex gap-3.5 p-4 rounded-xl bg-black/40 border border-white/[0.04] hover:border-red-950 transition-colors"
                >
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-xs md:text-sm font-extrabold text-white uppercase tracking-wider">
                      {mistake.title}
                    </h4>
                    <p className="font-sans text-xs text-neutral-300 leading-relaxed mt-0.5">
                      {mistake.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-red-950/15 border border-red-900/20 text-xs md:text-sm text-red-200 italic">
              "Quanto mais você corre atrás... menos interesse ele demonstra. Nenhum desses comportamentos desgastantes ativa a verdadeira química emocional da atração."
            </div>
          </div>

          {/* Trigger/What actually works Column */}
          <div className="lg:col-span-6 space-y-8 bg-gradient-to-b from-[#180a0e] to-black rounded-3xl p-8 md:p-10 border border-[#D4AF37]/20 shadow-2xl relative">
            <div className="absolute top-4 right-4 text-[#D4AF37]">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>

            <div className="space-y-4">
              <span className="font-serif text-[10px] md:text-xs font-black tracking-widest text-teal-400 uppercase flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Atração Involuntária
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight">
                O QUE REALMENTE MUDA TUDO
              </h3>
              <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed">
                Existe uma combinação exata de gatilhos comportamentais e inconscientes no cérebro masculino. Quando você ativa essas forças:
              </p>
            </div>

            {/* Golden checks flow */}
            <div className="space-y-4 pt-2">
              {shiftTriggers.map((trig, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-teal-900/30 border border-teal-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3 text-teal-400" />
                  </div>
                  <p className="font-sans text-xs md:text-sm text-amber-50/90 leading-relaxed">
                    <strong className="text-white border-b border-teal-400/30 font-semibold">{trig.label}:</strong> {trig.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.05] text-xs text-neutral-400 leading-relaxed flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-teal-400 shrink-0" />
              <span>E finalmente, você deixa de correr atrás para que ele comece a te procurar.</span>
            </div>
          </div>

        </div>
      </section>

      {/* -------------------- CODA: E É EXATAMENTE ISSO... -------------------- */}
      <section className="relative z-10 py-16 px-4 md:px-8 text-center border-t border-white/[0.04] bg-gradient-to-b from-black to-[#050102]">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mx-auto mb-2 border border-[#D4AF37]/20">
            <UserCheck className="w-6 h-6" />
          </div>
          
          <h4 className="font-serif text-lg md:text-2xl font-black text-white uppercase tracking-normal">
            E é exatamente isso o que você vai descobrir neste método.
          </h4>

          <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Porque quando você compreende como funciona a psicologia comportamental e emocional masculina... <strong className="text-white">tudo passa a fazer sentido</strong>. Os erros invisíveis que você cometia sem perceber são revelados, e seu magnetismo pessoal se eleva de uma forma fantástica.
          </p>

          <div className="flex justify-center pt-4">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-1 bg-[#D4AF37] rounded-full" />
              <span className="w-8 h-1 bg-[#D4AF37] rounded-full" />
              <span className="w-2.5 h-1 bg-[#D4AF37] rounded-full" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
