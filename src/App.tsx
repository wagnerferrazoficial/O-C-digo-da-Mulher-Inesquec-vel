/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Clock, Lock } from "lucide-react";
import MainHeader from "./components/MainHeader";
import Hero from "./components/Hero";
import BlockTwo from "./components/BlockTwo";
import BlockThree from "./components/BlockThree";
import BlockFour from "./components/BlockFour";
import BlockFive from "./components/BlockFive";
import BlockFiveA from "./components/BlockFiveA";
import BlockSix from "./components/BlockSix";
import BlockSeven from "./components/BlockSeven";
import BlockEight from "./components/BlockEight";
import BlockNine from "./components/BlockNine";
import BlockTen from "./components/BlockTen";
import BlockEleven from "./components/BlockEleven";
import BlockTwelve from "./components/BlockTwelve";
import BlockThirteen from "./components/BlockThirteen";
import BlockFourteen from "./components/BlockFourteen";
import CheckoutModal from "./components/CheckoutModal";

// Import newly generated ultra-realistic 8K image
import elegantWomanImg from "./assets/images/unforgettable_woman_portrait_1780455560774.png";

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [timeLeft, setTimeLeft] = useState(13 * 60 + 42); // 13m 42s left on load

  useEffect(() => {
    // Elegant performance-optimized scroll listener
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Live countdown timer for genuine conversion urgency
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 10 ? prev - 1 : 13 * 60 + 42));
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const scrollToOffer = () => {
    const el = document.getElementById("stack-offer-block-ten");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKiwifyClick = () => {
    window.open("https://pay.kiwify.com.br/ojl7ONP", "_blank", "noopener,noreferrer");
  };

  return (
    <div id="app-viewport-root" className="w-full min-h-screen bg-black text-white relative">
      <MainHeader />
      
      <main className="flex-1">
        <Hero 
          onCtaClick={scrollToOffer} 
          womanImageUrl={elegantWomanImg} 
        />
        <BlockTwo 
          onCtaClick={scrollToOffer}
        />
        <BlockThree />
        <BlockFour onCtaClick={scrollToOffer} />
        <BlockFive onCtaClick={scrollToOffer} />
        <BlockFiveA onCtaClick={scrollToOffer} />
        <BlockSix onCtaClick={scrollToOffer} />
        <BlockSeven onCtaClick={scrollToOffer} />
        <BlockEight onCtaClick={scrollToOffer} />
        <BlockNine onCtaClick={scrollToOffer} />
        <BlockTen onCtaClick={handleKiwifyClick} />
        <BlockEleven onCtaClick={handleKiwifyClick} />
        <BlockTwelve onCtaClick={handleKiwifyClick} />
        <BlockThirteen onCtaClick={handleKiwifyClick} />
        <BlockFourteen onCtaClick={handleKiwifyClick} />
      </main>

      {/* Interactive Checkout Dialog */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        bookCoverUrl={elegantWomanImg}
      />

      {/* ULTRA-REFINED BOTTOM STICKY CONVERSION BAR */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            id="sticky-conversion-bar"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-[#050102]/95 backdrop-blur-md border-t border-[#D4AF37]/35 py-4 px-4 shadow-[0_-15px_45px_rgba(0,0,0,0.9)]"
          >
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Left Side: Micro-Copy and Live Notification Ticker */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-md shrink-0 hidden md:block">
                  <img 
                    src={elegantWomanImg} 
                    alt="Capa do Código" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h5 className="font-serif text-[11px] md:text-xs font-black uppercase text-white tracking-widest leading-none flex items-center justify-center sm:justify-start gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
                    O Código da Mulher Inesquecível
                  </h5>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-1 flex-wrap text-[10px] md:text-[11px] text-[#CD9B4A]">
                    <span className="flex items-center gap-1 font-sans font-bold">
                      <Clock className="w-3 h-3 text-[#9E1B32] animate-pulse" />
                      Promoção Encerra em <span className="text-white font-mono bg-[#9E1B32]/35 px-1.5 py-0.5 rounded border border-[#9E1B32]/30">{formatTime(timeLeft)}</span>
                    </span>
                    <span className="hidden md:inline">•</span>
                    <span className="bg-green-950/30 border border-green-500/20 text-green-400 px-2 py-0.5 rounded uppercase font-bold text-[9px] tracking-wide animate-pulse">
                      Vagas promocionais ativas
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Quick Action Floating CTA */}
              <div className="w-full sm:w-auto shrink-0 flex items-center gap-3">
                <div className="text-right hidden lg:block pr-1 font-sans">
                  <p className="text-[10px] text-white/50 uppercase font-black tracking-wider line-through">Por: R$ 1.043</p>
                  <p className="text-xs text-[#D4AF37] font-black uppercase tracking-widest">Apenas: R$ 17</p>
                </div>
                <motion.button
                  onClick={scrollToOffer}
                  className="relative w-full sm:w-auto h-12 px-6 rounded-lg bg-gradient-to-b from-[#008000] via-[#006400] to-[#014101] text-white font-sans font-black text-[11px] md:text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(0,100,0,0.45)] border border-[#008000]/30 cursor-pointer overflow-hidden group flex items-center justify-center gap-2 hover:shadow-[0_8px_25px_rgba(212,175,55,0.25)]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Lock className="w-3 h-3 text-[#D4AF37]" />
                  <span>GARANTIR MINHA VAGA AGORA</span>
                  {/* Gloss Animation overlay */}
                  <div className="absolute inset-0 w-1/3 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[wiggle_1s_infinite] pointer-events-none" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

