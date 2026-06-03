import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Lock, CheckCircle2, ShieldCheck, CreditCard, Landmark, QrCode, Download, Copy, Sparkles } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookCoverUrl: string;
}

type PaymentMethod = "paypal" | "card";

export default function CheckoutModal({ isOpen, onClose, bookCoverUrl }: CheckoutModalProps) {
  const [method, setMethod] = useState<PaymentMethod>("paypal");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    
    // Auto-formatting for credit card fields
    if (name === "cardNumber") {
      value = value.replace(/\s?/g, "").replace(/(\d{4})/g, "$1 ").trim().substring(0, 19);
    } else if (name === "cardExpiry") {
      value = value.replace(/\//g, "");
      if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4);
      }
      value = value.substring(0, 5);
    } else if (name === "cardCvv") {
      value = value.replace(/\D/g, "").substring(0, 4);
    }
    
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Por favor, preencha os dados de contato obrigatórios.");
      return;
    }
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2800);
  };

  const copyPaypalAddress = () => {
    navigator.clipboard.writeText("https://pix.seguro.com/pagamento-simulado-codigo-mulher");
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <AnimatePresence>
      <div 
        id="checkout-modal-root" 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto"
      >
        {/* Semi-transparent overlay to exit */}
        <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

        <motion.div
          id="checkout-modal-container"
          className="relative w-full max-w-4xl bg-gradient-to-b from-[#1C0D11]/95 to-[#0A0304]/98 rounded-2xl border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(212,175,55,0.15)] flex flex-col md:flex-row overflow-hidden max-h-[90vh] md:max-h-none"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.4 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-white hover:bg-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <>
              {/* LEFT SIDE: SUMMARY INFO */}
              <div 
                id="checkout-summary-section" 
                className="w-full md:w-[40%] bg-gradient-to-b from-[#16070a]/90 to-[#1F0E12] p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#D4AF37]/15 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#D4AF37] mb-1">
                    CÓDIGO SECRETO
                  </h3>
                  <div className="w-12 h-[1.5px] bg-[#D4AF37]/40 mb-5" />
                  
                  {/* Miniature Portrait presentation */}
                  <div className="flex gap-4 items-center mb-6">
                    <div className="w-16 h-20 rounded border border-[#D4AF37]/25 overflow-hidden flex-shrink-0 bg-black">
                      <img 
                        src={bookCoverUrl} 
                        alt="Mini Book" 
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-white text-sm leading-tight">
                        O Código da Mulher Inesquecível
                      </h4>
                      <div className="text-xs text-neutral-400 mt-1">
                        Acesso Digital Imediato
                      </div>
                      <span className="inline-block mt-2 text-[10px] font-semibold text-[#D4AF37] px-2 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20 uppercase tracking-widest">
                        VIP OFF
                      </span>
                    </div>
                  </div>

                  <hr className="border-white/5 my-4" />

                  {/* Summary math */}
                  <div className="space-y-3 font-sans text-xs">
                    <div className="flex justify-between text-neutral-400">
                      <span>Valor Original</span>
                      <span className="line-through">R$ 1.043,00</span>
                    </div>
                    <div className="flex justify-between text-[#D4AF37]">
                      <span>Desconto Especial (Lançamento)</span>
                      <span>- R$ 1.026,00</span>
                    </div>
                    <div className="flex justify-between text-neutral-400">
                      <span>Acesso Vitalício e Bônus</span>
                      <span className="text-teal-400 font-bold">GRÁTIS</span>
                    </div>
                    <hr className="border-white/5 my-2" />
                    <div className="flex justify-between items-baseline pt-1">
                      <span className="text-sm font-semibold text-white">Total Hoje</span>
                      <span className="text-2xl font-serif font-extrabold text-[#D4AF37]">
                        R$ 17,00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Trust Footer */}
                <div className="mt-8 pt-4 border-t border-white/5 text-[10px] text-neutral-400 space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span>Servidor criptografado seguro SSL de ponta a ponta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Garantia incondicional de reembolso por 7 dias</span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: PAYMENT ACTIONS */}
              <form 
                onSubmit={handleSubmit} 
                id="checkout-form-section" 
                className="w-full md:w-[60%] p-6 md:p-8 flex flex-col justify-between overflow-y-auto"
              >
                <div>
                  <h3 className="font-sans text-sm font-semibold text-white/90 uppercase tracking-widest mb-4">
                    Completar Inscrição Segura
                  </h3>

                  {/* Identification inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 font-sans">
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-300 mb-1">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ex: Ana Maria Silva"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-black/60 border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-neutral-300 mb-1">
                        E-mail de Envio do Código *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Ex: ana@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-black/60 border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                    <div className="sm:col-span-2 font-sans">
                      <label className="block text-[11px] font-semibold text-neutral-300 mb-1">
                        WhatsApp para Alertas (Opcional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Ex: +55 (11) 98888-8888"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-black/60 border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Payment Method Select tabs */}
                  <div className="flex gap-2 p-1 bg-black/40 border border-white/10 rounded-xl mb-5 font-sans">
                    <button
                      type="button"
                      onClick={() => setMethod("paypal")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                        method === "paypal"
                          ? "bg-gradient-to-r from-[#D4AF37] to-[#B08D21] text-black"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      <QrCode className="w-4 h-4" />
                      Pix Simulado
                    </button>
                    <button
                      type="button"
                      onClick={() => setMethod("card")}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                        method === "card"
                          ? "bg-gradient-to-r from-[#D4AF37] to-[#B08D21] text-black"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      Cartão de Crédito
                    </button>
                  </div>

                  {/* PAYPAL / PIX Form Content */}
                  {method === "paypal" && (
                    <div className="bg-black/30 border border-[#D4AF37]/10 p-5 rounded-xl text-center space-y-4 font-sans">
                      <div className="mx-auto w-32 h-32 bg-white rounded-lg p-2.5 flex items-center justify-center shadow-lg border border-[#D4AF37]/30">
                        <img 
                          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://pix.seguro.com/pagamento-simulado-codigo-mulher&color=0a0304" 
                          alt="Pix QR Code Mockup" 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-semibold text-white/95">
                          Use a simulação de pagamento seguro por Pix
                        </span>
                        <p className="text-[11px] text-neutral-400 max-w-sm mx-auto leading-relaxed">
                          Escaneie o código rápido ou clique no botão abaixo para copiar a chave Pix simulada para testar a liberação em 3 segundos.
                        </p>
                      </div>

                      <div className="relative">
                        <button
                          type="button"
                          onClick={copyPaypalAddress}
                          className="w-full bg-white/5 hover:bg-white/10 text-white/90 text-xs font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 border border-white/10 active:scale-[0.99] transition-transform"
                        >
                          <Copy className="w-4 h-4 text-[#D4AF37]" />
                          {copiedKey ? "¡Chave Pix Copiada!" : "Copiar Chave Pix Simulado"}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* CREDIT CARD Form Content */}
                  {method === "card" && (
                    <motion.div 
                      className="space-y-4 text-left font-sans"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {/* Grid for credit card details */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <label className="block text-[10px] font-semibold text-neutral-300 mb-1 uppercase tracking-wider">
                            Número do Cartão
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="cardNumber"
                              maxLength={19}
                              required={method === "card"}
                              placeholder="0000 0000 0000 0000"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              className="w-full bg-black/60 border border-white/10 rounded-lg py-2 pl-3 pr-10 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                            />
                            <CreditCard className="absolute right-3 top-2.5 w-4 h-4 text-[#D4AF37]/60" />
                          </div>
                        </div>

                        <div className="col-span-2">
                          <label className="block text-[10px] font-semibold text-neutral-300 mb-1 uppercase tracking-wider">
                            Nome impresso no Cartão
                          </label>
                          <input
                            type="text"
                            name="cardName"
                            required={method === "card"}
                            placeholder="ANA MARIA SILVA"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            className="w-full bg-black/60 border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-semibold text-neutral-300 mb-1 uppercase tracking-wider">
                            Validade
                          </label>
                          <input
                            type="text"
                            name="cardExpiry"
                            required={method === "card"}
                            placeholder="MM/AA"
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            className="w-full bg-black/60 border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-semibold text-neutral-300 mb-1 uppercase tracking-wider">
                            CVV / Cód. de Segurança
                          </label>
                          <input
                            type="text"
                            name="cardCvv"
                            required={method === "card"}
                            placeholder="123"
                            value={formData.cardCvv}
                            onChange={handleInputChange}
                            className="w-full bg-black/60 border border-white/10 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                          />
                        </div>
                      </div>

                      <div className="text-[10px] text-neutral-400 flex items-center gap-1">
                        <Lock className="w-3 h-3 text-[#006400]" />
                        Seus dados estão protegidos confidencialmente. Compra 100% Blindada.
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Simulated action trigger */}
                <div className="pt-6 font-sans">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="relative w-full h-[52px] rounded-lg bg-gradient-to-r from-[#006400] to-[#008000] text-white font-semibold text-sm tracking-wide shadow-lg cursor-pointer hover:shadow-black active:scale-[0.99] transition-transform duration-100 flex items-center justify-center gap-2 border border-[#006400]/40 overflow-hidden"
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processando Comprovação Segura...
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-[#D4AF37]" />
                        {method === "paypal" ? "Simular Confirmação de PIX" : "Concluir Inscrição Segura"}
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-neutral-500 mt-2">
                    Ao confirmar a simulação, você concorda com a entrega garantida e termos de uso do material.
                  </p>
                </div>
              </form>
            </>
          ) : (
            /* SUCCESS FEEDBACK LAYOUT */
            <motion.div 
              id="checkout-success" 
              className="w-full p-8 text-center space-y-6 flex flex-col items-center justify-center min-h-[350px] font-sans"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-xl animate-ping" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#FFF]/90 border border-[#D4AF37] flex items-center justify-center shadow-lg shadow-black/80">
                  <CheckCircle2 className="w-9 h-9 text-[#0A0304]" />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="font-serif text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF] to-[#D4AF37] uppercase">
                  PAGAMENTO APROVADO!
                </h2>
                <h4 className="font-serif text-sm text-[#D4AF37] tracking-wide max-w-md mx-auto uppercase">
                   Você acaba de desbloquear o método Código da Mulher Inesquecível.
                </h4>
              </div>

              <div className="bg-black/40 border border-[#D4AF37]/10 p-5 rounded-2xl max-w-lg w-full space-y-4 font-sans text-left">
                <div className="flex gap-4 text-left items-start">
                  <div className="w-8 h-8 rounded-full bg-[#006400]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-white">Seu acesso exclusivo foi enviado</h5>
                    <p className="text-[11px] text-neutral-400 leading-relaxed mt-0.5">
                      Verifique sua caixa de entrada no e-mail <strong className="text-[#D4AF37]">{formData.email}</strong>. Enviamos suas credenciais exclusivas da área de alunas e o link oficial de leitura e download no seu celular.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 text-left items-start border-t border-white/5 pt-4">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Download className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div className="flex-1 font-sans">
                    <h5 className="text-xs font-semibold text-white">Link Emergencial de Download Direto</h5>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Se preferir, você também pode obter o manual interativo completo em formato PDF de forma imediata abaixo.
                    </p>
                    <a
                      href="#download"
                      onClick={() => alert("Simulação de download concluída! Inicie agora a sua jornada para consolidar seu magnetismo inesquecível.")}
                      className="inline-flex items-center gap-2 mt-2 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold text-[10px] py-1.5 px-3 rounded uppercase tracking-wider cursor-pointer"
                    >
                      <Download className="w-3 h-3" />
                      Baixar Guia Completo (PDF)
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="text-neutral-400 hover:text-white text-xs underline underline-offset-4 cursor-pointer"
              >
                Voltar à página inicial
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
