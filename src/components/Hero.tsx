import { motion } from "motion/react";
import { Lock, ShieldCheck, Award, Zap, Check } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
  womanImageUrl: string;
}

export default function Hero({ onCtaClick, womanImageUrl }: HeroProps) {
  const benefits = [
    "Método direto, prático e simples de aplicar.",
    "Inspirado em princípios científicos da psicologia biológica e evolutiva.",
    "Acesso imediato e seguro direto na sua caixa de entrada de e-mail."
  ];

  return (
    <section 
      id="hero-anchor-block" 
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#2A141A] to-black py-16 px-4 md:px-8 xl:py-24"
    >
      {/* Luxury Damask Pattern Layer */}
      <div className="absolute inset-0 bg-cover bg-top opacity-5 mix-blend-overlay pointer-events-none damask-pattern" />

      {/* Golden top light glow */}
      <div className="absolute top-[-10%] left-1/4 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-2 lg:pt-6">
        
        {/* LEFT COLUMN: THE COMPLETE PERSUASIVE COPY */}
        <div id="copy-column" className="lg:col-span-7 flex flex-col space-y-6 text-left">
          
          {/* Tagline Subtitle */}
          <div className="space-y-1">
            <span className="text-[11px] md:text-[13px] uppercase tracking-[0.16em] text-[#D4AF37] font-serif font-bold leading-normal block">
              O Código da Mulher Inesquecível
            </span>
            <span className="text-xs md:text-sm text-neutral-300 font-sans block font-medium leading-relaxed">
              — descubra o mecanismo emocional que faz um homem deixar de te ver como uma opção casual e começar a temer a ideia de te perder.
            </span>
          </div>

          {/* Main Hero Hook Title with Premium Formatting */}
          <h1 className="font-serif text-xl md:text-3xl xl:text-4.5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm uppercase">
            DESCUBRA O MECANISMO EMOCIONAL QUE FAZ UM HOMEM{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFF] via-[#F5E298] to-[#D4AF37] border-b-2 border-[#D4AF37]/45 pb-1">
              DEIXAR DE TE VER COMO COISA DE MOMENTO
            </span>{" "}
            E COMEÇAR A{" "}
            <span className="text-[#D4AF37] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#F5E298] to-[#9E7D15]">
              TEMER A IDEIA DE TE PERDER.
            </span>
          </h1>

          {/* Body Paragraph copy */}
          <div className="space-y-4 text-xs md:text-sm text-neutral-300 leading-relaxed font-sans pr-2 md:pr-10">
            <p>
              Se você já viu um homem se afastar sem dar explicações claras, esfriar de repente após conversas interessantes ou demonstrar menos interesse com o passar dos dias, saiba que isso não tem nada a ver com a sua aparência, sua idade ou seu corpo.
            </p>
            <p>
              Existe um instinto biológico primitivo que pouquíssimas mulheres conhecem e que faz um homem ver uma mulher de presença marcante como alguém absolutamente magnética e insubstituível.
            </p>
            <p className="font-semibold text-white/95">
              Clique no botão abaixo e descubra como ativar esse magnetismo hoje.
            </p>
          </div>

          {/* Bulleted list of benefits with customized checkmarks */}
          <div className="space-y-3 pt-2 font-sans">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/35 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] stroke-[3]" />
                </div>
                <span className="text-xs md:text-sm text-neutral-200 font-medium font-sans">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Trigger Anchored Block */}
          <div id="cta-anchor-block" className="pt-4 space-y-4 font-sans">
            <motion.button
              onClick={onCtaClick}
              className="relative w-full md:w-auto md:px-12 h-14 rounded-xl bg-gradient-to-b from-[#008000] via-[#006400] to-[#014101] text-white font-sans font-extrabold text-xs md:text-sm uppercase tracking-wider shadow-[0_12px_25px_rgba(0,100,0,0.3)] border border-[#008000]/30 cursor-pointer overflow-hidden group flex items-center justify-center gap-3.5 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] active:scale-[0.99] transition-all"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
            >
              {/* Security Lock on Left */}
              <div className="w-6 h-6 rounded bg-black/25 flex items-center justify-center">
                <Lock className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]/30" />
              </div>

              <span>QUERO GARANTIR MINHA VAGA NO MÉTODO AGORA</span>

              {/* Shine effect across the button */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[wiggle_1s_infinite] pointer-events-none" />
            </motion.button>

            {/* Seals of trust inline underneath CTA */}
            <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-3 pt-2 text-[10px] md:text-xs text-neutral-400 font-sans font-semibold">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Compra Segura</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Award className="w-4 h-4 text-[#D4AF37]" /> Garantia Incondicional</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-[#D4AF37]" /> Acesso Imediato</span>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: HIGH-RISC VISUAL COMPOSITION */}
        <div id="visual-column" className="lg:col-span-5 relative flex items-start justify-center min-h-[720px] lg:min-h-[860px] pt-10 lg:pt-0">
          
          {/* 1. Large elegant woman portrait floating gracefully */}
          <div 
            id="main-woman-portrait" 
            className="absolute right-0 bottom-0 top-0 w-full max-w-[500px] md:max-w-[620px] h-full overflow-hidden opacity-100 pointer-events-none z-0"
          >
            <div className="relative w-full h-full">
              <img
                src={womanImageUrl}
                alt="Portrait elegance UHD"
                className="w-full h-full object-cover object-top select-none"
                referrerPolicy="no-referrer"
              />
              {/* Beautiful soft gradients around the portrait backface */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent hidden lg:block" />
            </div>
          </div>

          {/* 2. Access count indicator at bottom-right */}
          <div 
            id="access-pill-indicator"
            className="absolute bottom-8 right-0 md:right-8 lg:right-[-2%] z-30 px-4 py-2 rounded-full border border-white/10 bg-black/65 backdrop-blur-md shadow-lg"
          >
            <span className="text-[10px] md:text-xs text-neutral-300 font-semibold flex items-center gap-2 font-sans">
              <span className="inline-block w-2 h-2 rounded-full bg-[#006400] animate-pulse" />
              Mais de <strong className="text-[#D4AF37] font-bold">14.200</strong> mulheres com acesso ativo
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
