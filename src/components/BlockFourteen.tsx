import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  Lock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle,
  FileText,
  Scale,
  Mail,
  ChevronDown
} from "lucide-react";

interface BlockFourteenProps {
  onCtaClick: () => void;
}

export default function BlockFourteen({ onCtaClick }: BlockFourteenProps) {
  // Animated FAQ active index state
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Modals for privacy & terms so the links are fully interactive and don't lead to dead pages!
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | "contact" | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      q: "O QUE É O MÉTODO «O CÓDIGO DA MULHER INESQUECÍVEL»?",
      a: "O método «O Código da Mulher Inesquecível» é um guia digital estrategicamente desenvolvido para ajudar as mulheres a compreender os gatilhos emocionais da atração e do comportamento masculino, estimulando o interesse genuíno, reciprocidade e respeito nos relacionamentos.\n\nO método reúne fundamentos da psicologia comportamental, dinâmica de relacionamentos de alto valor e segredos da comunicação magnética aplicados passo a passo de forma direta."
    },
    {
      q: "COMO VOU RECEBER O ACESSO?",
      a: "De maneira imediata após a confirmação do pagamento. Você receberá automaticamente um e-mail oficial com seus dados de acesso exclusivos ao portal de alunas. O formato é 100% digital, para que possa ler e ouvir no celular, tablet ou computador de qualquer lugar no seu tempo livre."
    },
    {
      q: "POR QUANTO TEMPO TEREI ACESSO?",
      a: "Seu acesso é vitalício e permanente. Isso significa que o e-book, o audiolivro e todos os bônus exclusivos serão seus para sempre. Você poderá consultar ou revisar as lições quantas vezes quiser, no seu próprio ritmo e sem limite de tempo."
    },
    {
      q: "O MÉTODO É PARA MULHERES SOLTEIRAS OU CASADAS?",
      a: "Para ambas. Os princípios da psicologia de atração são válidos para qualquer fase da vida amorosa. Se você está solteira, aprenderá a elevar seu valor percebido, gerar atração genuína e comunicar-se com elegância magnética para selecionar de forma inteligente. Se já está em um relacionamento, namoro ou casamento, entenderá como reacender o interesse, eliminar a frieza do cotidiano e restabelecer o respeito e a admiração mútua no casal."
    },
    {
      q: "RECOMENDA TER LEITURAS OU CONHECIMENTOS PRÉVIOS?",
      a: "Não é necessário. O método foi escrito com uma abordagem extremamente prática, acessível, sem jargões complexos e com insights diretos que você pode começar a aplicar imediatamente no seu cotidiano."
    },
    {
      q: "COM QUE RAPIDEZ CONSIGO LER O MATERIAL?",
      a: "Você tem o controle do tempo. Algumas alunas preferem ouvir a versão completa em audiolivro em poucos dias durante suas atividades ou trajetos diários, enquanto outras leem cada capítulo aos poucos e praticam as diretrizes semana a semana. Seu acesso de vitalício garante total liberdade."
    },
    {
      q: "O PROCESSO DE PAGAMENTO É TOTALMENTE SEGURO?",
      a: "Totalmente encriptado e protegido. Todas as transações são realizadas por meio de plataformas líderes de mercado em processamento de pagamentos digitais. O sistema opera sob criptografia SSL de 256 bits — o mesmo padrão de segurança dos maiores bancos internacionais — protegendo suas informações financeiras de ponta a ponta."
    },
    {
      q: "EXISTE JÁ UMA GARANTIA REAL DE REEMBOLSO?",
      a: "Sim, com certeza. Você conta com uma garantia incondicional de reembolso de 7 dias. Teste o método com total confiança; se por qualquer motivo achar que as práticas e insights não servem para você ou não superaram suas expectativas, basta solicitar o reembolso e devolvemos 100% de forma rápida, íntegra e amigável."
    },
    {
      q: "CONTAM COM SUPORTE PARA DÚVIDAS?",
      a: "Sim. Dispomos de um suporte humanizado dedicado a responder suas dúvidas de acesso. Se precisar de assistência com seu cadastro ou envio de e-mail, basta entrar em contato direto através do nosso e-mail oficial de suporte."
    },
    {
      q: "É UM CURSO COMPLEXO OU UM PORTAL PRÁTICO?",
      a: "Você receberá o e-book digital completo e integrado, junto com a versão em audiolivro de alta qualidade e todas as bonificações exclusivas explicadas passo a passo de forma simples de acompanhar."
    }
  ];

  return (
    <div id="faq-footer-block-fourteen" className="w-full bg-[#030102] relative overflow-hidden text-white font-sans border-t border-[#D4AF37]/20">
      
      {/* Absolute Ambient Highlights */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#9E1B32]/4 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-[30%] right-[-10%] w-[400px] h-[400px] bg-[#D4AF37]/3 rounded-full blur-[140px] pointer-events-none z-0" />

      <section className="relative z-10 py-24 px-4 md:px-8 max-w-4xl mx-auto">
        


        {/* CROWNING FAQ HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-5.5xl font-black text-white uppercase tracking-tight leading-tight">
            PERGUNTAS FREQUENTES
          </h2>
          <div className="w-20 h-0.5 bg-[#D4AF37] mx-auto" />
          <p className="text-xs md:text-sm text-neutral-400 font-medium">
            Esclareça suas dúvidas finais e faça sua escolha hoje com total segurança.
          </p>
        </div>

        {/* DYNAMIC COLLAPSIBLE ACCORDION CONTAINER */}
        <div className="space-y-3 max-w-3xl mx-auto mb-24 font-sans">
          {faqItems.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                id={`faq-item-${idx}`}
                className="rounded-2xl border border-white/[0.03] bg-gradient-to-r from-black/60 to-neutral-950/40 overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                {/* Accordion Trigger header button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-serif text-xs md:text-[13px] lg:text-[14px] font-black uppercase tracking-tight text-white pr-4">
                    {item.q}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${isOpen ? "border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10" : "border-white/20 text-white/60"} transition-all duration-300`}>
                    {isOpen ? (
                      <Minus className="w-3 h-3" />
                    ) : (
                      <Plus className="w-3 h-3" />
                    )}
                  </div>
                </button>

                {/* Smooth unfold body panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 pt-1 md:px-6 md:pb-7 border-t border-white/[0.02]">
                        <p className="text-xs md:text-[13px] text-neutral-300 font-sans leading-relaxed whitespace-pre-line pl-0">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* THE FINAL TRANSFORMATION DECISION PANEL */}
        <div className="max-w-3xl mx-auto rounded-3xl p-8 md:p-14 border border-[#D4AF37]/25 bg-gradient-to-b from-[#12080a] to-[#040102] text-center space-y-8 mb-24 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          
          <div className="space-y-4">
            <span className="text-[#D4AF37] font-serif text-[11px] font-bold tracking-[0.25em] uppercase block">
              Sua Mudança Estratégica
            </span>
            <h3 className="font-serif text-2xl md:text-3.5xl font-black text-white uppercase tracking-tight leading-snug">
              CHEGOU A HORA DE DAR O PRÓXIMO PASSO
            </h3>
            <div className="w-16 h-px bg-white/15 mx-auto" />
            <p className="font-sans text-xs md:text-sm text-[#CD9B4A] uppercase font-bold tracking-wider max-w-xl mx-auto">
              A decisão de tomar as rédeas da sua vida amorosa é exclusivamente sua.
            </p>
          </div>

          {/* Side by side Paths summary descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left py-2 font-sans">
            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.04] space-y-1">
              <span className="text-xs text-red-400 font-extrabold uppercase font-serif tracking-widest block">❌ Caminho Inseguro:</span>
              <p className="text-[11px] md:text-xs text-neutral-400 leading-relaxed">
                Você pode optar por ignorar este convite, continuar tentando resolver tudo no escuro por tentativa e erro, e lidando com a frustração afetiva constante e falta de reciprocidade.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/15 space-y-1">
              <span className="text-xs text-[#D4AF37] font-extrabold uppercase font-serif tracking-widest block">💎 Caminho da Mulher Inesquecível:</span>
              <p className="text-[11px] md:text-xs text-neutral-300 leading-relaxed">
                Ou tomar uma atitude hoje, garantir o seu acesso completo ao método e dominar com elegância magnética as dinâmicas do interesse genuíno masculino.
              </p>
            </div>
          </div>

          {/* THE ABSOLUTE FINAL CTA BUTTON */}
          <div className="pt-2 max-w-md mx-auto space-y-4 font-sans">
            <motion.button
              onClick={onCtaClick}
              className="relative w-full h-16 rounded-xl bg-gradient-to-b from-[#008000] via-[#006400] to-[#014101] text-white font-sans font-black text-[12px] md:text-[14px] uppercase tracking-wider shadow-[0_12px_35px_rgba(0,100,0,0.5)] border border-[#008000]/30 cursor-pointer overflow-hidden group flex items-center justify-center gap-3.5 hover:shadow-[0_15px_30px_rgba(212,175,55,0.25)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-6 h-6 rounded bg-black/30 flex items-center justify-center font-sans">
                <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>

              <span>SIM, QUERO ASSUMIR O CONTROLE AGORA</span>

              <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform ml-1" />
              
              {/* Gloss highlight animation */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[wiggle_1s_infinite] pointer-events-none" />
            </motion.button>

            {/* Bottom mini badges with bullet anchors */}
            <div className="flex items-center justify-center gap-4 text-[10px] md:text-xs text-neutral-400 font-sans font-semibold">
              <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-[#D4AF37]" /> Compra 100% Segura</span>
              <span>•</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> Garantia de Reembolso</span>
            </div>
          </div>

        </div>

        {/* LEGAL DISCLAIMER FOOTER SECTION */}
        <div className="border-t border-white/[0.06] pt-12 space-y-6 text-center text-[11px] md:text-xs text-neutral-400 font-sans leading-relaxed max-w-3xl mx-auto">
          
          <p className="font-bold text-neutral-400">
            © Copyright 2026 — Todos os Direitos Reservados
          </p>

          <div className="space-y-3.5 text-neutral-400">
            <p>
              Este produto destina-se exclusivamente a fins educacionais, de desenvolvimento pessoal e de informação prática em comportamento e psicologia do relacionamento.
            </p>
            <p>
              Os resultados das lições podem variar de pessoa para pessoa, pois dependem estritamente de fatores como a aplicação contínua e as circunstâncias individuais de cada relacionamento.
            </p>
            <p>
              Esta página oficial não promete ou garante mudanças mágicas, comportamentos automáticos ou fórmulas infalíveis de atração.
            </p>
            <p>
              Ao registrar-se ou adquirir o e-book, você concorda em receber atualizações gratuitas do método, suporte pós-venda operacional técnico e notificações da criadora diretamente no e-mail cadastrado, podendo descadastrar-se com um clique a qualquer momento.
            </p>
          </div>

          {/* Policy Links with interactive click handlers opening dialog models */}
          <div className="flex justify-center gap-6 pt-2 font-bold text-neutral-400 font-sans text-xs">
            <button 
              onClick={() => setActiveModal("privacy")}
              className="hover:text-[#D4AF37] cursor-pointer transition-colors hover:underline focus:outline-none"
            >
              Política de Privacidade
            </button>
            <span>|</span>
            <button 
              onClick={() => setActiveModal("terms")}
              className="hover:text-[#D4AF37] cursor-pointer transition-colors hover:underline focus:outline-none"
            >
              Termos de Uso
            </button>
            <span>|</span>
            <button 
              onClick={() => setActiveModal("contact")}
              className="hover:text-[#D4AF37] cursor-pointer transition-colors hover:underline focus:outline-none"
            >
              Contato
            </button>
          </div>

        </div>

      </section>

      {/* RENDER DYNAMIC LINK MODALS IN-PLACE PREVENTING EXTERNAL TAB LEAKS */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 font-sans">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0A0708] border border-[#D4AF37]/35 rounded-3xl p-6 md:p-8 max-w-lg w-full relative space-y-4 text-left shadow-[0_20px_50px_rgba(0,0,0,0.9)] max-h-[85vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  {activeModal === "privacy" && <FileText className="w-5 h-5" />}
                  {activeModal === "terms" && <Scale className="w-5 h-5" />}
                  {activeModal === "contact" && <Mail className="w-5 h-5" />}
                  <h4 className="font-serif text-sm md:text-base font-black uppercase tracking-wider text-white">
                    {activeModal === "privacy" && "Política de Privacidade"}
                    {activeModal === "terms" && "Termos de Uso"}
                    {activeModal === "contact" && "Canais de Suporte"}
                  </h4>
                </div>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500/15 hover:text-red-400 cursor-pointer text-white/50 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* MODAL INTERNAL BODY CONTENT */}
              <div className="space-y-4 text-xs md:text-sm text-neutral-300 leading-relaxed font-sans">
                {activeModal === "privacy" && (
                  <>
                    <p className="font-semibold text-[#D4AF37] text-xs uppercase tracking-wider">Como protegemos os seus dados pessoais</p>
                    <p>
                      A privacidade das nossas alunas e membros é um compromisso inestimável. Toda a informação recolhida no processo de compra é tratada sob sigilo absoluto e elevados padrões de resguardo cibernético.
                    </p>
                    <p>
                      Utilizamos sistemas de encriptação segura e gateways líderes para garantir que seu e-mail e dados de registro permaneçam totalmente seguros e blindados de quaisquer terceiros não autorizados.
                    </p>
                  </>
                )}

                {activeModal === "terms" && (
                  <>
                    <p className="font-semibold text-[#D4AF37] text-xs uppercase tracking-wider">Termos normativos do material educacional</p>
                    <p>
                      Ao registar-se e adquirir o método de Mariana Vabo, você concorda expressamente com os termos de licença pessoal e intransmissível deste material intelectual.
                    </p>
                    <p>
                      Todos os recursos textuais, livros digitais, áudios e bônus disponibilizados são marcas registradas e de direito intelectual da marca. É estritamente proibida qualquer duplicação, revenda ou distribuição não autorizada deste material.
                    </p>
                  </>
                )}

                {activeModal === "contact" && (
                  <>
                    <p className="font-semibold text-[#D4AF37] text-xs uppercase tracking-wider">Entre em contato com o nosso suporte humanizado</p>
                    <p>
                      Precisa de assistência do e-mail com as senhas ou links de acesso, alteração de dados cadastrais ou dúvidas operacionais? Nossa equipe está pronta para atendê-la da melhor maneira.
                    </p>
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-[#D4AF37]">
                      <p className="text-white text-xs font-semibold">📧 E-mail de Suporte Oficial:</p>
                      <p className="text-sm font-bold select-all text-[#F5E298]">suporte.cursoswf@gmail.com</p>
                    </div>
                  </>
                )}
              </div>

              <div className="pt-3 border-t border-white/5 text-right font-sans">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2 rounded-xl bg-white/5 text-xs text-white hover:bg-white/10 font-bold transition-all cursor-pointer"
                >
                  Entendido e Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
