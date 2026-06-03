import { motion } from "motion/react";
import { 
  Gift, 
  Sparkles, 
  MessageSquare, 
  Headphones, 
  ShieldAlert, 
  CheckCircle2, 
  HeartHandshake, 
  Compass, 
  ArrowRight, 
  Lock, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  Bookmark,
  MessageCircle,
  Megaphone,
  Radar,
  HelpCircle
} from "lucide-react";

interface BlockNineProps {
  onCtaClick: () => void;
}

export default function BlockNine({ onCtaClick }: BlockNineProps) {
  // 5 Detailed Bonuses in Portuguese for Women
  const bonuses = [
    {
      num: "01",
      tag: "BÔNUS ESPECIAL",
      title: "GUIA DE MENSAGENS QUE DESPERTAM CONEXÃO",
      desc: "Descubra exemplos práticos e modelos prontos de mensagens de texto que te ajudam a iniciar conversas fluidas, interessantes e de alta atração emocional. Você aprenderá a iniciar, responder e guiar conversas diárias de forma magnética para que ele sinta uma urgência incontrolável de te procurar.",
      value: "R$ 97,00",
      icon: MessageCircle,
      iconColor: "text-[#D4AF37]",
      borderColor: "border-[#D4AF37]/20",
      bgGradient: "from-[#0F0A05] to-[#040102]"
    },
    {
      num: "02",
      tag: "BÔNUS COMPLETO",
      title: "AUDIOLIVRO COMPLETO: O CÓDIGO DA MULHER INESQUECÍVEL",
      desc: "Tenha acesso imediato à versão completa em áudio para ouvir onde quiser: no carro, caminhando, na academia, nas suas viagens de fim de semana ou antes de dormir. Domine toda a psicologia do magnetismo e da atração biológica de forma prática no seu tempo livre.",
      value: "R$ 67,00",
      bullets: ["No carro", "Enquanto caminha", "Na academia", "Nas suas viagens", "Antes de dormir"],
      icon: Headphones,
      iconColor: "text-[#9E1B32]",
      borderColor: "border-[#9E1B32]/20",
      bgGradient: "from-[#0F0407] to-[#050102]"
    },
    {
      num: "03",
      tag: "BÔNUS EXCLUSIVO",
      title: "O MAPA DA COMUNICAÇÃO FEMININA DE ALTO VALOR",
      desc: "Identifique e elimine os erros invisíveis de comunicação verbal e inconsciente que fazem com que as mulheres percam o seu poder de atração e valor percebido diante dos homens de forma involuntária. Aprenda as bases para se expressar com magnetismo, postura e autoconfiança inabaláveis.",
      value: "R$ 97,00",
      icon: Megaphone,
      iconColor: "text-rose-400",
      borderColor: "border-rose-950/40",
      bgGradient: "from-[#14060A] to-[#030101]"
    },
    {
      num: "04",
      tag: "BÔNUS PREMIUM",
      title: "27 SINAIS QUE REVELAM O QUE ELE SENTE REALMENTE",
      desc: "Aprenda a decifrar com precisão científica os comportamentos masculinos discretos que revelam se ele está desenvolvendo sentimentos profundos e desejo de compromisso exclusivo por você, se está apenas confuso ou se busca apenas validação passageira.",
      value: "R$ 147,00",
      bullets: ["Sentimentos profundos", "Desejo de exclusividade", "Sinais de desinteresse", "Interesse superficial", "Desejo de compromisso"],
      icon: Radar,
      iconColor: "text-teal-400",
      borderColor: "border-teal-950/40",
      bgGradient: "from-[#05110E] to-[#010302]"
    },
    {
      num: "05",
      tag: "BÔNUS EXTRA",
      title: "100 TEMAS ESTRATÉGICOS PARA CONVERSAS MEMORÁVEIS",
      desc: "Nunca mais fique em silêncio ou presa em conversas chatas que morrem em um 'tudo bem?'. Descubra uma lista de 100 gatilhos de conversa cuidadosamente projetados para despertar uma forte tensão de sedução, risadas e uma cumplicidade irresistível de forma rápida.",
      value: "R$ 47,00",
      icon: Sparkles,
      iconColor: "text-[#D4AF37]",
      borderColor: "border-[#D4AF37]/20",
      bgGradient: "from-[#100C05] to-[#040102]"
    }
  ];

  // Summary Checklist Items in Portuguese
  const summaryBoxItems = [
    { title: "Método Código da Mulher Inesquecível", desc: "O método definitivo de magnetismo e psicologia de atração" },
    { title: "Guia de Mensagens que Despertam Conexão", desc: "Exemplos práticos de conversas magnéticas de alto valor" },
    { title: "Versão Completa em Audiolivro", desc: "Para ouvir e absorver todo o conteúdo sem parar o seu dia" },
    { title: "Mapa da Comunicação Feminina de Alto Valor", desc: "Postura, autoconfiança e magnetismo irresistível sem rodeos" },
    { title: "27 Sinais que Revelam o que Ele Sente Realmente", desc: "Diga adeus às dúvidas, joguinhos e incertezas" },
    { title: "100 Temas para Conversas Memoráveis", desc: "Inicie e mantenha o interesse dele aceso com naturalidade" }
  ];

  return (
    <div id="massive-bonus-block-nine" className="w-full bg-black relative overflow-hidden text-white font-sans">
      
      {/* Golden accent horizontal line divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />

      {/* Atmospheric lighting backgrounds ensuring premium 8k feeling */}
      <div className="absolute top-[15%] left-[-15%] w-[400px] h-[400px] md:w-[650px] md:h-[650px] bg-[#9E1B32]/4 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[25%] right-[-15%] w-[400px] h-[400px] md:w-[650px] md:h-[650px] bg-[#D4AF37]/3 rounded-full blur-[140px] pointer-events-none z-0" />

      <section className="relative z-10 py-24 px-4 md:px-8 max-w-7xl mx-auto">
        


        {/* SECTION HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
          <h2 className="font-serif text-2xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">
            🎁 GARANTA SEU ACESSO HOJE E RECEBA TODOS ESSES{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5E298] via-[#FFEBC2] to-[#D4AF37]">
              BÔNUS EXCLUSIVOS:
            </span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
          <h3 className="font-serif text-xs md:text-sm text-[#CD9B4A] tracking-[0.25em] font-extrabold uppercase pt-1">
            Disponível apenas para novas alunas do método
          </h3>
        </div>

        {/* FIVE DETAILED BONUS CARDS LIST */}
        <div className="space-y-8 max-w-5xl mx-auto mb-24 font-sans">
          {bonuses.map((bonus, idx) => {
            const IconComponent = bonus.icon;
            return (
              <motion.div
                key={idx}
                id={`premium-bonus-item-${idx}`}
                className={`rounded-3xl border ${bonus.borderColor} p-6 md:p-10 lg:p-12 bg-gradient-to-br ${bonus.bgGradient} relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 group hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-all duration-300`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                {/* Large typographic numbers */}
                <div className="absolute right-6 top-4 text-white/[0.015] font-serif text-[180px] pointer-events-none select-none font-black leading-none uppercase">
                  {bonus.num}
                </div>

                {/* Text Description Left Area */}
                <div className="flex-1 space-y-4 text-left order-2 md:order-1 relative z-10 font-sans">
                  
                  {/* Tag Indicator layout with gold bullet */}
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <span className="text-[10px] uppercase font-serif font-black tracking-widest text-[#D4AF37]">
                      {bonus.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg md:text-2xl font-black text-white uppercase tracking-tight leading-tight">
                    {bonus.title}
                  </h3>

                  {/* Desc Paragraph */}
                  <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-sans">
                    {bonus.desc}
                  </p>

                  {/* Bullet Lists representation if defined */}
                  {bonus.bullets && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 pt-2 max-w-lg">
                      {bonus.bullets.map((bItem, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2">
                          <span className="text-teal-400 font-bold text-xs">✔</span>
                          <span className="text-[11px] text-neutral-300 font-sans">{bItem}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Price Anchoring Area */}
                  <div className="pt-4 border-t border-white/[0.05] flex items-center gap-4 text-xs font-sans">
                    <span className="text-neutral-400">
                      Valor normal separadamente: <del className="text-red-400 font-extrabold">{bonus.value}</del>
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-teal-900/30 border border-teal-500/20 text-teal-400 font-black text-[10px] uppercase tracking-wider font-sans font-serif">
                      HOJE: INCLUÍDO DE GRAÇA
                    </span>
                  </div>

                </div>

                {/* Visual Icon Box */}
                <div className="w-full md:w-1/4 max-w-[150px] shrink-0 order-1 md:order-2 flex justify-center relative z-10">
                  <div className="relative aspect-square w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-black to-neutral-900 border border-white/[0.06] flex items-center justify-center shadow-2xl group-hover:scale-105 duration-300">
                    <IconComponent className={`w-10 h-10 md:w-12 md:h-12 ${bonus.iconColor} filter drop-shadow-[0_2px_15px_rgba(212,175,55,0.25)]`} />
                    <div className="absolute inset-[-5px] rounded-full border border-dashed border-white/5 animate-spin" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* MASSIVE VALUE WRAPPER: SUMMARY RESUMO COMPLETO */}
        <motion.div 
          id="summary-value-box"
          className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 lg:p-14 border border-[#D4AF37]/30 bg-gradient-to-b from-[#15060A] to-black relative overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.95)] mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Accent border top line decoration */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          
          <div className="text-center space-y-4 mb-10">
            <span className="text-[#D4AF37] font-semibold text-[10px] md:text-xs tracking-[0.25em] uppercase font-serif block">
              Pacote Prático e Completo
            </span>
            <h3 className="font-serif text-xl md:text-3xl font-extrabold uppercase text-white tracking-tight flex items-center justify-center gap-2">
              <Gift className="w-6 h-6 text-[#9E1B32]" />
              VEJA TUDO O QUE VOCÊ VAI RECEBER IMEDIATAMENTE:
            </h3>
            <div className="w-16 h-px bg-white/10 mx-auto" />
          </div>

          {/* Grid Layout of items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-10">
            {summaryBoxItems.map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl bg-black/60 border border-white/[0.04] flex items-start gap-3.5 hover:border-[#D4AF37]/15 transition-all"
              >
                <div className="w-5 h-5 rounded-full bg-teal-950/40 border border-teal-500/30 flex items-center justify-center shrink-0 text-teal-400 mt-0.5">
                  <span className="text-[10px] font-black">✓</span>
                </div>
                <div>
                  <h4 className="font-serif text-[12px] md:text-[13.5px] font-extrabold text-white uppercase tracking-tight mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-300 font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Value comparison and Anchoring area */}
          <div className="text-center max-w-md mx-auto border-t border-white/[0.08] pt-8 space-y-3.5">
            <span className="text-[11px] uppercase font-bold text-red-500 tracking-widest block font-serif">
              O Seu Maior Poder de Atração do Mercado
            </span>
            
            <div className="space-y-1">
              <p className="text-xs md:text-sm text-neutral-400 uppercase font-sans">
                Valor total acumulado deste pacote completo:
              </p>
              <h4 className="font-serif text-xl md:text-2xl font-black text-white/50">
                De: <del className="text-red-500 font-extrabold tracking-wide">R$ 1.043,00</del>
              </h4>
            </div>

            <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/20 max-w-xs mx-auto">
              <span className="text-[11px] uppercase font-extrabold text-teal-400 tracking-wider block font-serif">
                HOJE EM OFERTA EXCLUSIVA
              </span>
              <p className="text-xl font-black text-[#D4AF37] font-sans my-1">
                R$ 17,00
              </p>
              <p className="text-[11px] text-neutral-300 font-sans">
                Tudo incluso e com acesso vitalício por um pagamento único.
              </p>
            </div>
          </div>

        </motion.div>

        {/* TRANSITIONAL CALL TO ACTION SECTION */}
        <div className="text-center max-w-2xl mx-auto space-y-6 pt-4 relative z-10 font-sans">
          <p className="font-serif italic text-base md:text-xl text-[#F5E298] leading-relaxed max-w-xl mx-auto">
            "Mesmo que você comprasse o método hoje apenas pelos bônus exclusivos, sua vida amorosa já daria uma virada de 180 graus imediatamente."
          </p>

          <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed max-w-lg mx-auto">
            Garanta seu pacote completo de magnetismo com total discrição e segurança de dados.
          </p>

          {/* Core Call to Action Button */}
          <div className="flex flex-col items-center gap-4 pt-2">
            <motion.button
              onClick={onCtaClick}
              className="relative w-full max-w-md h-16 rounded-xl bg-gradient-to-b from-[#008000] via-[#006400] to-[#014101] text-white font-sans font-black text-[12px] md:text-[14px] uppercase tracking-wider shadow-[0_12px_30px_rgba(0,100,0,0.4)] border border-[#008000]/30 cursor-pointer overflow-hidden group flex items-center justify-center gap-3.5 hover:shadow-[0_15px_30px_rgba(212,175,55,0.25)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-6 h-6 rounded bg-black/30 flex items-center justify-center animate-wiggle">
                <Bookmark className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>

              <span>QUERO MEU ACESSO COMPLETO</span>

              <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform ml-1" />
              
              {/* Gloss animation reflex light */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[wiggle_1s_infinite] pointer-events-none" />
            </motion.button>

            {/* Micro indicators representation */}
            <div className="flex items-center justify-center gap-x-5 gap-y-1.5 flex-wrap text-[10px] md:text-xs text-neutral-400 font-sans font-medium">
              <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-[#D4AF37]" /> Conexão SSL de 256 bits</span>
              <span>•</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> 7 Dias de Garantia Incondicional</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-[#D4AF37]" /> Entrega Imediata no seu E-mail</span>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}