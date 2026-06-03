import { motion } from "motion/react";
import { 
  Heart, 
  Sparkles, 
  BookOpen, 
  Lock, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  Compass, 
  RotateCcw,
  Eye,
  MessageSquare,
  UserCheck
} from "lucide-react";

// Importing the generated ultra-realistic picture
import elegantWomanImg from "../assets/images/unforgettable_woman_portrait_1780455560774.png";

interface BlockSixProps {
  onCtaClick: () => void;
}

export default function BlockSix({ onCtaClick }: BlockSixProps) {
  // 15 Secrets that she will discover
  const secrets = [
    {
      text: "O motivo real pelo qual os homens se distanciam, se tornam frios ou começam a agir de forma diferente... e o que fazer exatamente para restaurar a conexão sem implorar.",
    },
    {
      text: "Como despertar um interesse ardente mesmo quando ele parece distraído, confuso ou indeciso por causa de outras opções.",
    },
    {
      text: "Os pilares fundamentais nos quais se apoia a atração involuntária masculina e por que 99% das mulheres os ignoram.",
    },
    {
      text: "O erro invisível que as mulheres atenciosas cometem que as faz serem catalogadas apenas como a 'amiga legal' para sempre.",
    },
    {
      text: "Por que a sua aparência, dinheiro ou status não são os fatores determinantes para ter o homem que você deseja aos seus pés.",
    },
    {
      text: "O princípio biológico que faz com que ele valorize mais a sua presença e decida propor encontros e planos por iniciativa própria.",
    },
    {
      text: "Como manter conversas estimulantes que despertem uma tensão sexual e emocional irresistível por mensagens.",
    },
    {
      text: "O mecanismo de intriga e mistério que faz com que você ocupe os pensamentos dele durante todo o dia de maneira recorrente.",
    },
    {
      text: "Como consolidar o seu poder de atração feminina mesmo quando há distância física ou vocês não podem se ver com frequência.",
    },
    {
      text: "Os sinais físicos e psicológicos que revelam se ele sente desejo real ou se está apenas te usando como combustível para o ego dele.",
    },
    {
      text: "Como identificar as atitudes submissas ou carentes que sabotam o seu magnetismo como mulher sem que você perceba.",
    },
    {
      text: "O segredo por trás das mulheres que são procuradas, respeitadas e priorizadas sempre pelos homens mais cobiçados.",
    },
    {
      text: "Como estruturar uma dinâmica onde ele assuma o papel ativo e decida se esforçar para manter o seu interesse vivo.",
    },
    {
      text: "Os princípios práticos baseados na biologia humana para transformar uma simples atração em obsessão incontrolável.",
    },
    {
      text: "O que realmente diferencia as mulheres esquecidas daquelas que se tornam obsessões inesquecíveis na mente dele.",
    }
  ];

  // Reassurances (Even if...)
  const reassurances = [
    "Mesmo que hoje você sinta que não tem sorte no amor ou com os homens.",
    "Mesmo que ele esteja extremamente frio, distante ou ignorando as suas mensagens neste exato momento.",
    "Mesmo que você acredite que já tentou absolutamente de tudo para chamar a atenção dele.",
    "Mesmo que você esteja cansada de ser rejeitada ou tratada apenas como uma segunda opção."
  ];

  return (
    <div id="curriculum-block-six" className="w-full bg-[#030101] relative overflow-hidden text-white font-sans">
      
      {/* Golden Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      
      {/* Luxury Background Shines */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#9E1B32]/4 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#D4AF37]/3 rounded-full blur-[140px] pointer-events-none z-0" />

      <section className="relative z-10 py-24 px-4 md:px-8 max-w-7xl mx-auto">
        


        {/* SECTION HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
          <h2 className="font-serif text-2xl md:text-3.5xl lg:text-4.5xl font-black text-white leading-tight uppercase tracking-tight">
            O QUE VOCÊ DESCOBRIRÁ DENTRO DO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5E298] via-[#FFEBC2] to-[#D4AF37]">
              CÓDIGO DA MULHER INESQUECÍVEL
            </span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
          <p className="font-sans text-xs md:text-sm text-neutral-400 tracking-wider uppercase font-semibold">
            Um método biológico completo para ativar o desejo, atenção e instinto de perseguição dos homens.
          </p>
        </div>

        {/* BOOK / LIST TWO-COLUMN COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-20">
          
          {/* LEFT: BOOK MOCKUP COLUMN WITH HIGH LUX JUXTAPOSITION (4 columns) */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl bg-gradient-to-b from-[#120608] via-black to-[#050102] border border-[#9E1B32]/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
            
            {/* Ambient subtle warm glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(158,27,50,0.08),transparent_70%)] pointer-events-none" />

            <div className="relative group w-full max-w-[240px] md:max-w-[280px] mb-8">
              <div className="absolute inset-4 rounded-2xl bg-[#9E1B32]/10 blur-2xl group-hover:bg-[#9E1B32]/20 transition-all duration-500" />
              
              {/* Premium Book Spine Mockup */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/35 bg-[#141210] p-2.5 shadow-[0_25px_50px_rgba(0,0,0,0.95)] transition-transform duration-500 hover:scale-[1.02]">
                <div className="aspect-[3/4] relative overflow-hidden rounded-xl">
                  <img 
                    src={elegantWomanImg} 
                    alt="Livro O Código da Mulher Inesquecível" 
                    className="w-full h-full object-cover filter brightness-[0.88]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  
                  {/* Decorative corner borders */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/25" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/25" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/25" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/25" />
                </div>
              </div>
            </div>

            {/* Book Info Summary Column */}
            <div className="text-center space-y-3 relative z-10 max-w-xs">
              <span className="text-[10px] uppercase tracking-[0.25em] font-extrabold text-[#D4AF37] block font-serif">
                Manual Completo
              </span>
              <h4 className="font-serif text-base md:text-lg font-black uppercase text-white tracking-wide">
                Leis Biológicas da Atração
              </h4>
              <p className="text-[11px] md:text-xs text-neutral-400 leading-relaxed font-sans">
                Acesso imediato e vitalício à versão digital exclusiva, otimizada para leitura fácil no seu celular, tablet e computador.
              </p>
            </div>

          </div>

          {/* RIGHT: LIST OF 15 SECRETS CARRIED WITH RED CARDS (8 columns) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar-styling">
              {secrets.map((secret, idx) => (
                <motion.div
                  key={idx}
                  id={`secret-bullet-${idx}`}
                  className="p-5 rounded-2xl bg-[#090304] border border-white/[0.04] flex gap-3.5 hover:border-[#D4AF37]/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.03, duration: 0.4 }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#1A060A] border border-[#9E1B32]/30 flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                    <Heart className="w-4 h-4 text-[#9E1B32] fill-[#9E1B32]/30" />
                  </div>
                  <div>
                    <span className="text-[9px] font-sans text-[#D4AF37]/75 font-semibold block uppercase tracking-wider mb-0.5 font-serif">
                      Segredo Revelado #{String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="text-xs md:text-[13px] text-neutral-200 leading-relaxed font-sans font-medium">
                      {secret.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="text-center text-[10px] text-white/30 uppercase font-sans tracking-widest mt-4 flex items-center justify-center gap-1.5 font-bold italic select-none">
              <span>Deslize para ver mais segredos</span>
              <span>↓</span>
            </div>
          </div>

        </div>

        {/* TRANSITIONAL PIECE */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 border border-[#D4AF37]/25 bg-gradient-to-b from-[#18080C] through-[#0C0305] to-black relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] mb-16">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#D4AF37]/45" />

          <div className="relative z-10 text-center space-y-8">
            <span className="text-[#D4AF37] font-semibold text-[10px] md:text-xs tracking-[0.25em] uppercase font-serif block">
              Prático e direto ao ponto
            </span>

            <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight">
              E ISSO É SÓ O COMEÇO...
            </h3>

            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto font-sans">
              Cada seção do <strong className="text-white">Código da Mulher Inesquecível</strong> foi estruturada com uma linguagem simples para te ensinar com total clareza o que fazer, o que evitar de forma absoluta e como calibrar o seu magnetismo de forma tranquila e irresistível.
            </p>

            {/* Avoidances bad practices highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center border-t border-b border-white/[0.06] py-6 my-2 font-serif">
              <div className="space-y-1">
                <span className="text-red-400 font-bold block text-sm">✕</span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-widest block font-semibold">Sem Teorias Chatas</span>
              </div>
              <div className="space-y-1">
                <span className="text-red-400 font-bold block text-sm">✕</span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-widest block font-semibold">Sem Manipulação</span>
              </div>
              <div className="space-y-1">
                <span className="text-red-400 font-bold block text-sm">✕</span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-widest block font-semibold">Sem Truques Infantis</span>
              </div>
              <div className="space-y-1">
                <span className="text-red-400 font-bold block text-sm">✕</span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-widest block font-semibold">Sem Mudar Quem Você É</span>
              </div>
            </div>

            <p className="font-serif text-xs md:text-sm text-[#F5E298] italic font-semibold max-w-xl mx-auto leading-relaxed">
              "Tudo organizado em um passo a passo direto, prático, objetivo e criado exclusivamente para transformar a vida amorosa da mulher."
            </p>
          </div>
        </div>

        {/* REASSURANCES ACCORDION BAR (Mesmo que...) */}
        <div className="max-w-3xl mx-auto mb-16 space-y-3 font-serif">
          <h4 className="font-serif text-[11px] md:text-xs text-white/50 space-y-1 tracking-[0.2em] uppercase font-bold text-center mb-6 block">
            Este manual foi desenvolvido especialmente para você:
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reassurances.map((reass, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-black/45 border border-white/[0.03] flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#9E1B32] shrink-0" />
                <p className="text-xs md:text-[13px] text-neutral-300 font-sans">
                  {reass}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CONCLUSION WORDING */}
        <div className="max-w-2xl mx-auto text-center space-y-8 font-sans">
          <p className="font-serif text-base md:text-xl font-bold text-white uppercase leading-relaxed">
            Porque uma vez que você compreende as dinâmicas biológicas da atração masculina... Tudo faz um sentido perfeito.
          </p>

          <div className="flex flex-col items-center justify-center space-y-4">
            <motion.button
              onClick={onCtaClick}
              className="relative w-full max-w-md h-16 rounded-xl bg-gradient-to-b from-[#008000] via-[#006400] to-[#014101] text-white font-sans font-black text-[12px] md:text-[14px] uppercase tracking-wider shadow-[0_12px_30px_rgba(0,100,0,0.4)] border border-[#008000]/30 cursor-pointer overflow-hidden group flex items-center justify-center gap-3.5 hover:shadow-[0_15px_30px_rgba(212,175,55,0.25)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-6 h-6 rounded bg-black/25 flex items-center justify-center">
                <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]/30" />
              </div>

              <span>QUERO ACESSO COMPLETO AO MÉTODO</span>

              <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform ml-1" />
              
              {/* Gloss light effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[wiggle_1s_infinite] pointer-events-none" />
            </motion.button>

            {/* Payment security info */}
            <div className="flex items-center justify-center gap-x-5 gap-y-1 flex-wrap text-[10px] md:text-xs text-neutral-400 font-sans font-medium">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Servidor 100% Seguro e Criptografado</span>
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-[#D4AF37]" /> Envio Imediato por E-mail</span>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}