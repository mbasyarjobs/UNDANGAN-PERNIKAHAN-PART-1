import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { weddingImages } from '../data';

interface CoverProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function Cover({ onOpen, isOpen }: CoverProps) {
  const [guestName, setGuestName] = useState('Bapak Andi & Keluarga');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const to = params.get('to');
      if (to) {
        setGuestName(decodeURIComponent(to));
      }
    }
  }, []);

  return (
    <motion.div
      id="wedding-cover"
      initial={{ opacity: 1, y: 0 }}
      animate={isOpen ? { opacity: 0, y: '-100%', pointerEvents: 'none' } : { opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 flex flex-col justify-between items-center text-center overflow-hidden bg-[#faf4e9]"
    >
      {/* Background Image with Dark/Cream Gradient Overlays */}
      <div className="absolute inset-0 select-none bg-[#faf4e9]">
        <img
          src={weddingImages.hero}
          alt="Bride and Groom under Sunset"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover brightness-[0.8] scale-105 object-center"
        />
        {/* Top Warm Sky/Cream Overlay */}
        <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-[#faf4e9] via-[#faf4e9]/95 to-transparent" />
        
        {/* Bottom Elegant Dark Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent" />
      </div>

      {/* Floating golden particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-gold-400/40 rounded-full blur-sm top-[20%] left-[15%] animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute w-3 h-3 bg-gold-500/30 rounded-full blur-md top-[60%] right-[10%] animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute w-2.5 h-2.5 bg-gold-300/40 rounded-full blur-sm top-[80%] left-[25%] animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Top Header Section (Pushed down beautifully into the sweet spot of the sunset sky) */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="pt-[11vh] min-[375px]:pt-[13vh] sm:pt-[15vh] md:pt-[17vh] px-4 z-10 w-full flex flex-col items-center"
      >
        <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] sm:tracking-[0.3em] font-semibold text-[#8c7355] uppercase block mb-3 sm:mb-4 select-none">
          THE WEDDING OF
        </span>
        
        <div className="relative inline-block my-1 sm:my-2 px-10 sm:px-16">
          {/* Left Delicate Botanical Branch */}
          <svg className="absolute -left-2 sm:-left-6 -top-4 w-12 sm:w-16 h-20 sm:h-24 text-gold-600/30 transform -rotate-12 pointer-events-none" viewBox="0 0 100 150" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M70,140 C60,110 50,70 65,10" />
            <path d="M57,110 C45,105 35,110 40,118 C45,126 55,120 57,110" />
            <path d="M61,90 C42,82 38,92 44,98 C50,104 59,96 61,90" />
            <path d="M63,65 C48,55 42,65 50,72 C58,79 62,71 63,65" />
            <path d="M64,40 C52,28 48,38 54,44 C60,50 63,45 64,40" />
            <path d="M65,10 C58,-2 52,4 58,12 C64,20 65,14 65,10" />
            <path d="M66,120 C78,115 88,120 83,128 C78,136 68,130 66,120" />
            <path d="M62,98 C74,93 84,98 79,106 C74,114 64,108 62,98" />
            <path d="M63,75 C75,70 82,75 78,83 C74,91 65,85 63,75" />
          </svg>

          {/* Right Delicate Botanical Branch */}
          <svg className="absolute -right-2 sm:-right-6 -bottom-4 w-12 sm:w-16 h-20 sm:h-24 text-gold-600/30 transform rotate-12 pointer-events-none" viewBox="0 0 100 150" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M30,140 C40,110 50,70 35,10" />
            <path d="M43,110 C55,105 65,110 60,118 C55,126 45,120 43,110" />
            <path d="M39,90 C58,82 62,92 56,98 C50,104 41,96 39,90" />
            <path d="M37,65 C52,55 58,65 50,72 C42,79 38,71 37,65" />
            <path d="M36,40 C48,28 52,38 46,44 C40,50 37,45 36,40" />
            <path d="M35,10 C42,-2 48,4 42,12 C36,20 35,14 35,10" />
            <path d="M34,120 C22,115 12,120 17,128 C22,136 32,130 34,120" />
            <path d="M38,98 C26,93 16,98 21,106 C26,114 36,108 38,98" />
            <path d="M37,75 C25,70 18,75 22,83 C26,91 35,85 37,75" />
          </svg>

          {/* Expanded & perfectly balanced responsive typography with a premium, warm charcoal tone */}
          <h1 className="text-[2.25rem] min-[375px]:text-[2.6rem] min-[410px]:text-[2.9rem] sm:text-[3.75rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem] font-serif text-[#2d2214] font-medium tracking-wide leading-[1.1] select-none flex flex-col items-center drop-shadow-[0_1px_1px_rgba(255,255,255,0.45)]">
            <span>Ajis</span>
            <div className="flex items-center justify-center gap-3 sm:gap-4 w-full my-1 sm:my-2">
              <div className="h-[1px] w-8 sm:w-12 bg-[#2d2214]/15" />
              <span className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#a88340] select-none">&</span>
              <div className="h-[1px] w-8 sm:w-12 bg-[#2d2214]/15" />
            </div>
            <span>Amel</span>
          </h1>
        </div>
      </motion.div>

      {/* Date, Recipient & Button Container */}
      <div className="w-full flex flex-col items-center pb-[8vh] px-4 z-10 gap-5 sm:gap-6">
        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-sm sm:text-base md:text-lg font-serif tracking-[0.25em] sm:tracking-[0.3em] text-[#efe3ce] select-none drop-shadow-sm"
        >
          28 . 06 . 2026
        </motion.p>

        {/* Recipient Info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-[11px] sm:text-xs font-sans tracking-[0.2em] text-[#dfcfb0]/70 block mb-2 font-medium select-none">
            Kepada Yth.
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-white px-4 max-w-sm leading-snug drop-shadow-lg tracking-wide">
            {guestName}
          </h2>
          
          {/* Heart Divider */}
          <div className="flex flex-col items-center justify-center mt-3 select-none">
            <div className="w-12 sm:w-16 h-[1px] bg-gold-500/25 mb-2" />
            <span className="text-xs text-gold-400">♥</span>
          </div>
        </motion.div>

        {/* Buka Undangan Button & Chevron */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col items-center gap-4 w-full"
        >
          <button
            id="open-invitation-btn"
            onClick={onOpen}
            className="flex items-center justify-center px-16 py-4 rounded-full bg-[#c5a059] hover:bg-[#b89553] text-zinc-900 font-serif text-base font-semibold tracking-wider transition-all duration-300 shadow-xl hover:scale-[1.03] active:scale-95 cursor-pointer border border-[#d4b373]/30"
          >
            Buka Undangan
          </button>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="text-gold-400/70 mt-1"
          >
            <ChevronDown className="w-6 h-6 stroke-[1.5]" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
