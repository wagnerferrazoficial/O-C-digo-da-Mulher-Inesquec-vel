import { motion } from "motion/react";
import { 
  Heart, 
  X, 
  HelpCircle, 
  TrendingUp, 
  Compass, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Zap, 
  ChevronRight, 
  Bookmark,
  Calendar,
  AlertCircle
} from "lucide-react";

interface BlockElevenProps {
  onCtaClick: () => void;
}

export default function BlockEleven({ onCtaClick }: BlockElevenProps) {
  // Method values in Portuguese for Women
  const methodValues = [
    "Baseado em princípios sólidos de comportamento e psicologia evolutiva de atração.",
    "Linguagem direta, assertiva e extremamente simples de entender e aplicar.",
    "Conteúdo estruturado passo a passo, livre de rodeios e teorias cansativas.",
    "Acesso digital imediato enviado de forma segura diretamente ao seu e-mail.",
    "Acesso vitalício para reler e consolidar os segredos sempre que desejar.",
    "Estratégias práticas para despertar iniciativa genuína e interesse da parte dele.",
    "Ferramentas reais para reatar sua autoestima, autoconfiança e magnetismo feminino.",
    "Projetado especialmente para mulheres que buscam relacionamentos saudáveis e de valor."
  ];

  // Negative habits in Portuguese for Women
  const negativeHabits = [
    "Perder horas valiosas e sua paz mental tentando adivinhar as atitudes dele.",
    "Buscar conselhos improvisados em redes sociais sem qualquer embasamento psicológico.",
    "Seguir técnicas ultrapassadas de frieza extrema, submissão ou joguinhos baratos.",
    "Mendigar atenção ou forçar diálogos pesados que não levam a lugar nenhum.",
    "Alimentar ciclos destrutivos de ciúmes, ansiedade profunda e insegurança no amor.",
    "Acreditar que precisa agradá-lo em tudo ou anular seus valores para ser amada.",
    "Terminar repetindo de forma subconsciente os mesmos padrões de rejeição e desdém."
  ];

  return (
    <div id="polarization-block-eleven" className="w-full bg-[#050102] relative overflow-hidden text-white font-sans">
      
      {/* Sleek Golden Divider Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      {/* Luxury Red / Amber background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#9E1B32]/4 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#D4AF37]/3 rounded-full blur-[140px] pointer-events-none z-0" />

      <section className="relative z-10 py-24 px-4 md:px-8 max-w-6xl mx-auto">
        


        {/* SECTION HEADER AND PAIN QUESTIONS */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <h2 className="font-serif text-2xl md:text-4.5xl font-black text-white leading-tight uppercase tracking-tight">
            ESTE PODE SER O <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5E298] via-[#FFEBC2] to-[#D4AF37]">PONTO DE INFLEXÃO</span> NA SUA VIDA SENTIMENTAL
          </h2>
          <div className="w-20 h-px bg-[#D4AF37]/50 mx-auto" />
          <h3 className="font-serif italic text-base md:text-lg text-red-500 font-medium">
            Até quando você vai continuar suportando as mesmas situações de frieza e indiferença?
          </h3>
        </div>

        {/* 4 STRIKING "UNTIL WHEN" QUESTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-20 text-left">
          <div className="p-5 rounded-2xl bg-black/45 border border-white/[0.03] space-y-2">
            <span className="text-[#9E1B32] font-semibold text-xs uppercase tracking-widest font-serif">Distanciamento</span>
            <p className="text-xs md:text-[13.5px] text-neutral-300 leading-relaxed font-sans">
              Até quando você vai tentar adivinhar, de forma exaustiva, por que ele se afasta ou some de uma hora para a outra sem justificativa?
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-black/45 border border-white/[0.03] space-y-2">
            <span className="text-[#9E1B32] font-semibold text-xs uppercase tracking-widest font-serif">Ansiedade</span>
            <p className="text-xs md:text-[13.5px] text-neutral-300 leading-relaxed font-sans">
              Até quando vai se submeter ao desgaste emocional de analisar cada detalhe de uma mensagem ou caçar pequenas provas de interesse?
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-black/45 border border-white/[0.03] space-y-2">
            <span className="text-[#9E1B32] font-semibold text-xs uppercase tracking-widest font-serif">Falta de Reciprocidade</span>
            <p className="text-xs md:text-[13.5px] text-neutral-300 leading-relaxed font-sans">
              Até quando vai carregar o peso de sentir que investe o triplo do esforço que ele demonstra em troca por você?
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-black/45 border border-white/[0.03] space-y-2">
            <span className="text-[#9E1B32] font-semibold text-xs uppercase tracking-widest font-serif">Insegurança</span>
            <p className="text-xs md:text-[13.5px] text-neutral-300 leading-relaxed font-sans">
              Até quando vai se culpar injustamente, achando que o problema é a sua aparência, a sua idade ou o seu jeito de ser?
            </p>
          </div>
        </div>

        {/* TRANSITIONAL CALL */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 border border-[#9E1B32]/20 bg-gradient-to-b from-[#120508] to-[#040102] text-center space-y-6 mb-20 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9E1B32]/10 to-transparent" />
          
          <div className="relative z-10 space-y-4">
            <h3 className="font-serif text-lg md:text-2xl font-black text-white uppercase leading-normal">
              CHEGOU O MOMENTO DE COMPREENDER OS RELACIONAMENTOS SOB UMA PERSPECTIVA TOTALMENTE REVELADORA.
            </h3>
            <p className="text-xs md:text-sm text-[#CD9B4A] tracking-wider uppercase font-extrabold max-w-2xl mx-auto font-sans">
              Porque a triste realidade é que a maioria das mulheres passa anos valiosos tateando no escuro...
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-neutral-400 font-serif max-w-xl mx-auto pt-2">
              <span>Tentando agradar sem limites</span>
              <span>•</span>
              <span>Sofrendo ciclos de ansiedade</span>
              <span>•</span>
              <span>Inibindo seu verdadeiro magnetismo</span>
            </div>
            <p className="text-xs text-red-400 font-semibold italic max-w-md mx-auto pt-2">
              ... E mesmo com tanto desgaste, infelizmente continuam colhendo as mesmas frustrações afetivas.
            </p>
          </div>
        </div>

        {/* METICULOUS SIDE-BY-SIDE POLARIZATION COMPARISON */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20 font-sans">
          
          {/* COLUMN A: O CÓDIGO DA MULHER INESQUECÍVEL (YES!) */}
          <motion.div 
            id="polarization-positive-column"
            className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#0A100C] to-[#010302] border border-teal-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.6)] space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-b border-teal-500/10 pb-4">
              <span className="text-[10px] font-sans font-extrabold text-teal-400 tracking-widest block uppercase mb-1">
                O Caminho Inteligente e Biológico
              </span>
              <h4 className="font-serif text-lg md:text-xl font-black text-white uppercase tracking-tight flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-400" />
                O CÓDIGO DA MULHER INESQUECÍVEL
              </h4>
            </div>

            <div className="space-y-4 font-sans text-left">
              {methodValues.map((val, vIdx) => (
                <div key={vIdx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-teal-950/50 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0 mt-0.5 font-bold text-[10px]">
                    ✓
                  </div>
                  <p className="text-xs md:text-[13.5px] text-neutral-200 leading-relaxed">
                    {val}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* COLUMN B: WHAT MOST WOMEN KEEP DOING (NO!) */}
          <motion.div 
            id="polarization-negative-column"
            className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#120709] to-[#040102] border border-red-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.6)] space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-b border-red-500/10 pb-4">
              <span className="text-[10px] font-sans font-extrabold text-red-400 tracking-widest block uppercase mb-1">
                Tentativa e Erro Exaustivos
              </span>
              <h4 className="font-serif text-lg md:text-xl font-black text-white uppercase tracking-tight flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" />
                O QUE FAZ A MAIORIA DAS MULHERES
              </h4>
            </div>

            <div className="space-y-4 font-sans text-left">
              {negativeHabits.map((val, nIdx) => (
                <div key={nIdx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-red-950/50 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 mt-0.5 font-bold text-[10px]">
                    ✕
                  </div>
                  <p className="text-xs md:text-[13.5px] text-neutral-350 leading-relaxed">
                    {val}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* DECISION SUMMARY BANNER: "A DIFERENÇA É SIMPLES" */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 border border-white/[0.04] bg-black/60 shadow-2xl relative overflow-hidden mb-20 text-center space-y-6">
          <span className="px-3 py-1 bg-white/5 border border-white/10 text-white/50 text-[10px] font-black uppercase tracking-widest rounded-lg inline-block font-serif">
            A Escolha é Simples
          </span>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center max-w-3xl mx-auto pt-2">
            
            <div className="md:col-span-5 p-4 rounded-xl bg-red-950/10 border border-red-900/10 text-center">
              <h5 className="font-serif text-xs md:text-sm font-bold text-red-400 uppercase tracking-wide block mb-1">Caminho 1</h5>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                Seguir tentando adivinhar as atitudes masculinas por conta própria, alimentando ciclos de insegurança e desgaste...
              </p>
            </div>

            <div className="md:col-span-2 text-center text-xs font-serif text-[#D4AF37] font-black uppercase tracking-widest py-1 select-none">
              — OU —
            </div>

            <div className="md:col-span-5 p-4 rounded-xl bg-teal-950/15 border border-teal-900/15 text-center">
              <h5 className="font-serif text-xs md:text-sm font-bold text-teal-400 uppercase tracking-wide block mb-1">Caminho 2</h5>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                Aprender um método estruturado que desvenda as bases reais da mente masculina e consolida o seu verdadeiro magnetismo...
              </p>
            </div>

          </div>
        </div>

        {/* THE RESULT SECTION */}
        <div className="max-w-3xl mx-auto text-center space-y-8 mb-20 font-sans">
          <span className="text-[#D4AF37] text-[10px] md:text-xs font-serif font-extrabold uppercase tracking-[0.25em] block">
            O Retorno na sua Autoestima e Poder de Escolha
          </span>
          <h3 className="font-serif text-2xl md:text-3.5xl font-black text-white uppercase tracking-tight">
            O RESULTADO NO SEU BEM-ESTAR AMOROSO?
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Mais Clareza", "Reciprocidade", "Paz Emocional", "Magnetismo", "Poder de Escolha"].map((resItem, resIdx) => (
              <div key={resIdx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <p className="font-sans text-xs md:text-[13px] text-white font-extrabold text-center uppercase tracking-normal">
                  {resItem}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto border-t border-white/[0.06] pt-6 space-y-4">
            <h4 className="font-serif text-sm md:text-base font-bold text-white uppercase">
              E O MELHOR DE TUDO:
            </h4>
            <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed max-w-xl mx-auto">
              Você não precisa esperar semanas nem sofrer com joguinhos desnecessários. O acesso ao método é imediato, permitindo que você aprenda no seu próprio ritmo e comece a sentir e agir de forma mais atraente e segura hoje mesmo.
            </p>
          </div>
        </div>

        {/* BIG FINALE CALL TO ACTION REDIRECTION */}
        <div className="text-center space-y-6 pt-4 max-w-md mx-auto relative z-10">
          <motion.button
            onClick={onCtaClick}
            className="relative w-full h-16 rounded-xl bg-gradient-to-b from-[#008000] via-[#006400] to-[#014101] text-white font-sans font-black text-[12px] md:text-[14px] uppercase tracking-wider shadow-[0_12px_30px_rgba(0,100,0,0.4)] border border-[#008000]/30 cursor-pointer overflow-hidden group flex items-center justify-center gap-3.5 hover:shadow-[0_15px_30px_rgba(212,175,55,0.25)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-6 h-6 rounded bg-black/30 flex items-center justify-center">
              <Bookmark className="w-3.5 h-3.5 text-[#D4AF37]" />
            </div>

            <span>DESBLOQUEAR MEU ACESSO TOTAL AGORA</span>

            <ChevronRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform ml-1" />
            
            {/* Reflection sheen highlight */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[wiggle_1s_infinite] pointer-events-none" />
          </motion.button>

          {/* Core bottom seals */}
          <div className="flex items-center justify-center gap-x-5 gap-y-1.5 flex-wrap text-[10px] md:text-xs text-neutral-400 font-sans font-medium">
            <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-[#D4AF37]" /> Leitura Instantânea</span>
            <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-[#D4AF37]" /> Pagamento Seguro Único</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Satisfação Garantida</span>
          </div>
        </div>

      </section>

    </div>
  );
}
