import { motion } from "motion/react";
import { 
  Heart, 
  Sparkles, 
  Mail, 
  ChevronRight, 
  Lock, 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  Smartphone, 
  HelpCircle, 
  Compass, 
  UserCheck, 
  Award,
  Bookmark
} from "lucide-react";

interface BlockSevenProps {
  onCtaClick: () => void;
}

export default function BlockSeven({ onCtaClick }: BlockSevenProps) {
  // 14 Additional Secrets with premium contextual details (Portuguese for Women)
  const extraDiscoveries = [
    {
      title: "Conversas Magnéticas",
      text: "A maneira biológica de iniciar conversas que capturam o interesse e a atenção imediata dele, sem parecer necessitada ou ansiosa.",
    },
    {
      title: "Respostas Fluidas",
      text: "Como elevar radicalmente as chances de receber mensagens rápidas, carinhosas e com alto nível de investimento por parte dele.",
    },
    {
      title: "O Ponto de Inflexão",
      text: "O minúsculo ajuste psicológico em suas palavras que pode transformar uma conversa fria em pura cumplicidade afetiva.",
    },
    {
      title: "Presença Remota",
      text: "Como potencializar o seu magnetismo feminino na mente dele, mesmo quando passam dias sem se falar ou se ver devido à rotina.",
    },
    {
      title: "Escudo Anti-Frieza",
      text: "O que fazer exatamente quando ele repentinamente se mostra distante, demora a responder ou age com indiferença.",
    },
    {
      title: "Leitura de Intenções",
      text: "Como decifrar rapidamente se ele está atraído biologicamente por você ou se apenas te procura por tédio ou atenção passageira.",
    },
    {
      title: "Moeda de Valor Percebido",
      text: "Comportamentos específicos que multiplicam o seu status de mulher de alto valor aos olhos dele e aqueles que destroem o seu magnetismo silenciosamente.",
    },
    {
      title: "Restauração de Calma",
      text: "Como recuperar a sua confiança e magnetismo após rejeições anteriores ou decepções sentimentais do passado.",
    },
    {
      title: "Memória Masculina Oculta",
      text: "O princípio exato que faz com que os homens se lembrem de uma mulher durante toda a vida com nostalgia e afeto profundo.",
    },
    {
      title: "Atração Sustentável",
      text: "Como consolidar uma dinâmica de atração que continue crescendo em vez de esfriar com o passar dos meses.",
    },
    {
      title: "Sentimentos Genuínos",
      text: "Os sutis indícios em mensagens e linguagem corporal que confirmam que ele está se apaixonando seriamente por você.",
    },
    {
      title: "Reciprocidade Ativa",
      text: "Como estruturar uma dinâmica saudável e de respeito mútuo que estimule de forma natural o compromisso e o papel ativo dele.",
    },
    {
      title: "Leitura Cristalina",
      text: "O método que te ajuda a parar de se torturar assumindo coisas falsas e a ler o comportamento dele com total clareza.",
    },
    {
      title: "Mulher Prioridade",
      text: "Como se tornar aquela mulher seleta que naturalmente inspira respeito, desejo e prioridade absoluta na vida dele."
    }
  ];

  // Repeat text for the scrolling marquee ticker
  const marqueeText = Array(15).fill("O CÓDIGO DA MULHER INESQUECÍVEL •");

  return (
    <div id="value-multiplier-block-seven" className="w-full bg-black relative overflow-hidden text-white font-sans">
      
      {/* Top golden luxury hairline */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      {/* Atmospheric lighting glows for high-converting visual flow */}
      <div className="absolute top-[10%] left-[-15%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#9E1B32]/4 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-15%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#D4AF37]/4 rounded-full blur-[140px] pointer-events-none z-0" />

      <section className="relative z-10 py-24 px-4 md:px-8 max-w-7xl mx-auto">
        


        {/* SECTION HEADER: "E AINDA TEM MUITO MAIS..." */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">
            E AINDA TEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5E298] via-[#FFEBC2] to-[#D4AF37]">MUITO MAIS...</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
          <p className="font-serif italic text-base md:text-lg text-[#F5E298]/80 max-w-2xl mx-auto leading-relaxed">
            A maravilhosa sensação de receber muito mais do que o esperado. Você também descobrirá em detalhes:
          </p>
        </div>

        {/* LUXURIOUS DISCOVERY CARDS GRID (14 secrets representing an abundance of knowledge) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {extraDiscoveries.map((disc, idx) => (
            <motion.div
              key={idx}
              id={`additional-secret-card-${idx}`}
              className="group p-6 rounded-2xl bg-gradient-to-br from-[#0F0407] via-black to-[#050102] border border-white/[0.03] hover:border-[#D4AF37]/20 transition-all duration-300 flex gap-4 shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.03, duration: 0.4 }}
            >
              <div className="w-10 h-10 rounded-full bg-[#180509] border border-[#9E1B32]/25 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
                <Heart className="w-5 h-5 text-[#9E1B32] fill-[#9E1B32]/20 group-hover:text-red-400 group-hover:fill-[#9E1B32]/40 transition-colors" />
              </div>

              <div className="space-y-1 flex-1">
                <span className="text-[10px] font-sans font-extrabold text-[#D4AF37]/80 block uppercase tracking-wider font-serif">
                  {disc.title}
                </span>
                <p className="text-xs md:text-[13.5px] text-neutral-350 leading-relaxed font-sans">
                  {disc.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CONCLUDING MASSIVE VALUE TEXT */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20 bg-gradient-to-b from-[#140608] to-black relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-center space-y-6 mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent_70%)] pointer-events-none" />
          
          <span className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] tracking-widest font-black uppercase inline-block rounded font-serif">
            Material de Máxima Qualidade
          </span>
          
          <h3 className="font-serif text-xl md:text-3xl font-black text-white uppercase tracking-tight">
            E isso é apenas uma pequena parte do que você vai dominar dentro d'O Código da Mulher Inesquecível.
          </h3>

          <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Cada seção foi minuciosamente estruturada para te ajudar a compreender melhor os comportamentos internos do cérebro masculino, consolidando a sua inteligência emocional e permitindo que você construa conexões magnéticas, sólidas e completamente correspondidas com naturalidade.
          </p>

          {/* Core assurances layout inside Block 7 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto">
            <div className="p-3.5 bg-black/40 rounded-xl border border-white/[0.03] space-y-1">
              <span className="text-teal-400 font-bold block text-base">✓</span>
              <h5 className="text-[11px] font-serif font-black text-white uppercase tracking-wider">Sem Manipulações</h5>
            </div>
            <div className="p-3.5 bg-black/40 rounded-xl border border-white/[0.03] space-y-1">
              <span className="text-teal-400 font-bold block text-base">✓</span>
              <h5 className="text-[11px] font-serif font-black text-white uppercase tracking-wider">Sem Jogos Infantis</h5>
            </div>
            <div className="p-3.5 bg-black/40 rounded-xl border border-white/[0.03] space-y-1">
              <span className="text-teal-400 font-bold block text-base">✓</span>
              <h5 className="text-[11px] font-serif font-black text-white uppercase tracking-wider">Total Respeito e Conexão</h5>
            </div>
          </div>

          <p className="font-serif italic text-xs md:text-sm text-[#F5E298] pt-2">
            "Para mulheres comprometidas com o sucesso duradouro em sua vida afetiva."
          </p>
        </div>

      </section>

      {/* -------------------- DYNAMIC SCROLLING RIBBON ROW (MARQUEE EFFECT) -------------------- */}
      <div className="w-full bg-gradient-to-r from-[#9E1B32] via-[#660C1F] to-[#1F0207] py-4 border-t border-b border-white/[0.15] overflow-hidden whitespace-nowrap relative select-none z-10 my-4 shadow-inner">
        <div className="inline-block animate-[marquee_25s_linear_infinite]">
          {marqueeText.map((txt, index) => (
            <span 
              key={index} 
              className="inline-block text-[11px] md:text-xs font-serif font-black tracking-[0.2em] text-[#F5E298] uppercase mx-4"
            >
              {txt}
            </span>
          ))}
        </div>
        {/* Repeating block to maintain seamless loop visually */}
        <div className="inline-block animate-[marquee_25s_linear_infinite] absolute top-4 left-full pl-4 whitespace-nowrap">
          {marqueeText.map((txt, index) => (
            <span 
              key={`repeat-${index}`} 
              className="inline-block text-[11px] md:text-xs font-serif font-black tracking-[0.2em] text-[#F5E298] uppercase mx-4"
            >
              {txt}
            </span>
          ))}
        </div>
      </div>

      {/* -------------------- SECTION FINALE -------------------- */}
      <section className="relative z-10 py-16 px-4 md:px-8 text-center bg-gradient-to-b from-black to-[#050102]">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-bold text-teal-400 tracking-widest block font-serif">Aproveite hoje mesmo</span>
            <h3 className="font-serif text-2xl md:text-3.5xl lg:text-4.5xl font-black text-white uppercase">
              O MELHOR DE TUDO?
            </h3>
            <p className="font-serif italic text-base md:text-lg text-amber-50/80">
              Você pode começar hoje mesmo com download digital imediato.
            </p>
          </div>

          <div className="flex items-center justify-center gap-x-6 gap-y-2 flex-wrap text-xs md:text-sm text-[#CD9B4A] font-sans font-semibold">
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4" /> Sem esperas ou frete físico</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Compass className="w-4 h-4" /> Acesso imediato</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Award className="w-4 h-4" /> Acesso vitalício</span>
          </div>

          {/* GIANT FINAL CALL TO ACTION BUTTON FOR BLOCK SEVEN */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <motion.button
              onClick={onCtaClick}
              className="relative w-full max-w-md h-16 rounded-xl bg-gradient-to-b from-[#008000] via-[#006400] to-[#014101] text-white font-sans font-black text-[12px] md:text-[14px] uppercase tracking-wider shadow-[0_12px_30px_rgba(0,100,0,0.4)] border border-[#008000]/30 cursor-pointer overflow-hidden group flex items-center justify-center gap-3 hover:shadow-[0_15px_30px_rgba(212,175,55,0.255)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-6 h-6 rounded bg-black/30 flex items-center justify-center font-serif">
                <Bookmark className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>
              <span>DESBLOQUEAR MEU MAPA DE ACESSO</span>
              <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform ml-1" />
              
              {/* Shiny reflection */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[wiggle_1s_infinite] pointer-events-none" />
            </motion.button>

            {/* Privacy details */}
            <div className="flex items-center justify-center gap-4 text-[10px] md:text-xs text-neutral-400 font-sans mt-1">
              <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-[#D4AF37]" /> Servidor criptografado SSL</span>
              <span>•</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-[#D4AF37]" /> Processo 100% confidencial</span>
            </div>
          </div>

        </div>
      </section>

      {/* Ticker Animation workaround */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

    </div>
  );
}