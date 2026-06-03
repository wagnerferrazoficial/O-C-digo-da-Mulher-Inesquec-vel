import { motion } from "motion/react";
import { 
  Check, 
  ShieldCheck, 
  Lock, 
  Zap, 
  ShoppingBag, 
  ChevronRight, 
  Sparkles, 
  Clock, 
  Award, 
  Smartphone, 
  PlayCircle,
  HelpCircle,
  CreditCard
} from "lucide-react";

interface BlockTenProps {
  onCtaClick: () => void;
}

export default function BlockTen({ onCtaClick }: BlockTenProps) {
  // Stacking elements
  const stackItems = [
    {
      title: "O CÓDIGO DA MULHER INESQUECÍVEL",
      desc: "O manual estratégico completo, fundamentado em leis biológicas e comportamentais para compreender a psicologia masculina e despertar atração genuína.",
      price: "R$ 97,00",
      isBonus: false
    },
    {
      title: "VERSÃO COMPLETA EM ÁUDIO (AUDIOLIVRO)",
      desc: "Aprenda onde e quando quiser, ouvindo todas as lições do método narradas de forma clara para escutar nos seus tempos livres.",
      price: "R$ 67,00",
      isBonus: false
    },
    {
      title: "O CÓDIGO DAS MENSAGENS MAGNÉTICAS",
      desc: "Exemplos práticos e modelos de mensagens prontas para copiar e usar que disparam uma forte conexão emocional e interesse no WhatsApp.",
      price: "R$ 97,00",
      isBonus: false
    },
    {
      title: "POSTURA COMPORTAMENTAL DE ALTO VALOR",
      desc: "Como se posicionar e se expressar com valor, inteligência emocional e elegância no seu dia a dia sem jamais se rebaixar.",
      price: "R$ 147,00",
      isBonus: false
    },
    {
      title: "SINAIS DE INTERESSE REAL REVELADOS",
      desc: "O roteiro passo a passo para identificar se ele sente interesse biológico e emocional genuíno de compromisso ou se apenas te trata como opção.",
      price: "R$ 197,00",
      isBonus: false
    },
    {
      title: "TEMAS ESTRATÉGICOS PARA DIÁLOGOS INESQUECÍVEIS",
      desc: "Assuntos interessantes, sensuais e descontraídos para gerar conexão profunda, curiosidade e manter o interesse dele sempre aceso.",
      price: "R$ 97,00",
      isBonus: false
    },
    {
      title: "As 7 Regras de Ouro d'A Mulher Inesquecível",
      desc: "Bônus Especial #01: Os princípios inabaláveis para manter o interesse, a união e a paixão em alto nível no longo prazo.",
      price: "R$ 97,00",
      isBonus: true
    },
    {
      title: "O Que Desperta a Devoção Biológica Masculina",
      desc: "Bônus Especial #02: Aula em vídeo desmistificando os mecanismos instintivos e emocionais mais profundos por trás da mente deles.",
      price: "R$ 147,00",
      isBonus: true
    },
    {
      title: "Atualizações Gratuitas Vitalícias",
      desc: "Bônus Especial #03: Acesso a futuras atualizações do material, novos conteúdos e guias complementares para sempre, sem nenhum custo extra.",
      price: "R$ 97,00",
      isBonus: true
    }
  ];

  // Guaranteed list in Portuguese
  const guaranteedFeatures = [
    "Manual Principal Completo",
    "Os 3 Bônus Especiais de Presente",
    "Versão em Audiolivro Integrada",
    "Atualizações Gratuitas Vitalícias",
    "Acesso Imediato no seu E-mail"
  ];

  return (
    <div id="stack-offer-block-ten" className="w-full bg-[#030102] relative overflow-hidden text-white font-sans">
      
      {/* Decorative premium divider lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#9E1B32]/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      {/* Extreme Deep Contrast ambient highlight blobs for sales design */}
      <div className="absolute top-[10%] left-[-15%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-[#9E1B32]/6 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-15%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <section className="relative z-10 py-24 px-4 md:px-8 max-w-5xl mx-auto">
        


        {/* CROWNING MAIN H2 TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            GARANTA SEU MÉTODO HOJE MESMO
          </h2>
          <div className="w-20 h-0.5 bg-[#D4AF37] mx-auto" />
          <h3 className="font-serif text-sm md:text-base text-amber-50/80 tracking-widest uppercase font-extrabold text-[#CD9B4A]">
            VEJA TUDO O QUE VOCÊ VAI RECEBER IMEDIATAMENTE:
          </h3>
        </div>

        {/* ULTRA VALUE STACKING ITEMS LIST */}
        <div className="max-w-4xl mx-auto space-y-4 mb-20 font-sans">
          {stackItems.map((item, idx) => (
            <motion.div
              key={idx}
              id={`offer-stack-item-${idx}`}
              className={`p-5 md:p-6 rounded-2xl border ${item.isBonus ? "border-[#D4AF37]/25 bg-gradient-to-r from-[#170C05] to-[#040102]" : "border-white/[0.04] bg-gradient-to-r from-[#0C0204] to-[#030102]"} flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:border-white/15`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.04, duration: 0.4 }}
            >
              {/* Left Item Description info */}
              <div className="space-y-1.5 flex-1 text-left font-sans">
                <div className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${item.isBonus ? "bg-[#D4AF37]/25 border border-[#D4AF37]/40 text-[#D4AF37]" : "bg-teal-950/40 border border-teal-500/30 text-teal-400"}`}>
                    <span className="text-[10px] font-black">{item.isBonus ? "🎁" : "✓"}</span>
                  </div>
                  <h4 className={`font-serif text-xs md:text-sm font-black uppercase tracking-tight ${item.isBonus ? "text-[#D4AF37]" : "text-white"}`}>
                    {item.isBonus && "🎁 BÔNUS: "}{item.title}
                  </h4>
                </div>
                <p className="text-[11px] md:text-xs text-neutral-300 leading-relaxed max-w-2xl pl-7">
                  {item.desc}
                </p>
              </div>

              {/* Right price Tag display with anchoring */}
              <div className="sm:text-right shrink-0 pl-7 sm:pl-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/[0.04] font-serif">
                <span className="text-[10px] uppercase font-bold text-neutral-400 block">Valor Individual:</span>
                <span className="font-serif text-sm md:text-base font-black text-neutral-300 tracking-tight">
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* THE GIGANTIC PRICE HERO CONTAINER (DE $245 -> POR APENAS $17,00) */}
        <motion.div 
          id="grand-pricing-hero-panel"
          className="max-w-3xl mx-auto rounded-3xl p-8 md:p-14 border border-[#F5E298]/30 bg-gradient-to-b from-[#140608] via-black to-[#050102] relative overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.95)] text-center space-y-8 mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle gold line highlights */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          
          <div className="space-y-2">
            <span className="text-[#D4AF37] font-semibold text-[10px] md:text-xs tracking-[0.25em] uppercase font-serif block">
              Oportunidade de Lançamento Comercial
            </span>
            <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-black text-neutral-400 tracking-wide uppercase">
              VALOR TOTAL DO MÉTODO COMPLETO:
            </h3>
            <div className="font-serif text-2xl md:text-3xl font-black text-red-500/80 uppercase">
              DE <del className="tracking-widest font-black decoration-red-600 decoration-3 text-red-500">R$ 1.043,00</del>
            </div>
          </div>

          <div className="w-16 h-px bg-white/10 mx-auto" />

          {/* Transitionary Anchor */}
          <div className="space-y-1 font-sans">
            <p className="text-xs md:text-sm text-neutral-400 uppercase tracking-widest font-medium">
              HOJE VOCÊ NÃO VAI PAGAR R$ 1.043,00...
            </p>
            <p className="text-[11px] md:text-xs text-neutral-500 uppercase tracking-widest font-semibold">
              Nem R$ 197,00 • Nem R$ 97,00...
            </p>
          </div>

          {/* THE GIANT R$ 17 PRICE ANCHOR */}
          <div className="py-4 px-6 rounded-2xl bg-[#9E1B32]/10 border border-[#9E1B32]/25 inline-block mx-auto space-y-1">
            <span className="text-[10px] md:text-xs text-teal-400 font-extrabold uppercase tracking-widest block font-sans">
              ★ ACESSO COMPLETO POR APENAS ★
            </span>
            <div className="font-serif text-5xl md:text-7xl font-sans font-black tracking-tight text-white drop-shadow-[0_2px_15px_rgba(212,175,55,0.2)]">
              R$ 17,00
            </div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D4AF37] block mt-1 font-serif font-sans">
              PAGAMENTO ÚNICO • ACESSO VITALÍCIO PARA SEMPRE • COMPRA SEGURA
            </span>
          </div>

          {/* Quick micro descriptors summary */}
          <div className="max-w-md mx-auto pt-4 space-y-3 font-sans">
            <span className="text-[11px] uppercase font-black text-[#D4AF37] tracking-widest block font-serif">
              VEJA O QUE RECEBE IMEDIATAMENTE:
            </span>
            
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-neutral-200 font-semibold mb-2">
              {guaranteedFeatures.map((feat, fIdx) => (
                <span key={fIdx} className="flex items-center gap-1.5 md:gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  {feat}
                </span>
              ))}
            </div>

            <div className="h-px bg-white/[0.04] w-2/3 mx-auto" />

            <p className="font-serif italic text-xs md:text-sm text-[#F5E298] max-w-sm mx-auto leading-relaxed pt-2">
              "Tudo isso por menos do que o custo de um único lanche rápido, mas com o imenso poder comportamental de te ajudar a conduzir suas relações com os homens de forma tranquila, confiante e inabalável."
            </p>
          </div>

        </motion.div>

        {/* CALL TO ACTION BUTTON & SECURITY SEALS */}
        <div className="text-center space-y-8 max-w-md mx-auto">
          
          <div className="space-y-4 font-sans">
            <motion.button
              onClick={onCtaClick}
              className="relative w-full h-16 rounded-xl bg-gradient-to-b from-[#008000] via-[#006400] to-[#014101] text-white font-sans font-black text-[12px] md:text-[14px] uppercase tracking-wider shadow-[0_12px_30px_rgba(0,100,0,0.45)] border border-[#008000]/30 cursor-pointer overflow-hidden group flex items-center justify-center gap-3.5 hover:shadow-[0_15px_30px_rgba(212,175,55,0.25)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-6 h-6 rounded bg-black/30 flex items-center justify-center font-sans">
                <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>

              <span>SIM, QUERO GARANTIR MEU ACESSO INTEGRAL</span>

              <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform ml-1" />
              
              {/* Reflection sheen effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[wiggle_1s_infinite] pointer-events-none" />
            </motion.button>

            {/* Scarcity indicator */}
            <p className="text-[10px] md:text-xs text-neutral-400 font-sans font-medium italic">
              * Oferta garantida apenas enquanto o site oficial permanecer no ar.
            </p>
          </div>

          {/* Secure Trust indicators */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.03] space-y-4">
            
            <div className="flex items-center justify-center gap-x-5 gap-y-1.5 flex-wrap text-[10px] md:text-xs text-neutral-400 font-sans font-medium">
              <span className="flex items-center gap-1 font-sans"><Lock className="w-3.5 h-3.5 text-[#D4AF37]" /> Servidor criptografado seguro SSL de 256 bits</span>
              <span>•</span>
              <span className="flex items-center gap-1 font-sans"><ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Compra 100% protegida</span>
            </div>

            <div className="flex items-center justify-center gap-3 text-neutral-400 font-sans justify-center mt-2">
              <CreditCard className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[10px] uppercase font-bold tracking-widest pl-1 leading-relaxed font-sans">
                Aceitamos todos os métodos seguros de pagamento
              </span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
