import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, MailOpen } from 'lucide-react';
import { weddingInfo, weddingImages } from '../data';

interface CoverProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function Cover({ onOpen, isOpen }: CoverProps) {
  const [guestName, setGuestName] = useState('Bapak/Ibu/Saudara/i');

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
      className="fixed inset-0 z-50 flex flex-col justify-between items-center text-center overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 select-none">
        <img
          src={weddingImages.hero}
          alt="Bride and Groom under Sunset"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover brightness-[0.4] scale-105"
        />
        {/* Soft Golden Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.15),transparent_70%)]" />
      </div>

      {/* Floating particles or warm light spots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-gold-400/40 rounded-full blur-sm top-[20%] left-[15%] animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute w-3 h-3 bg-gold-500/30 rounded-full blur-md top-[60%] right-[10%] animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute w-2.5 h-2.5 bg-gold-300/40 rounded-full blur-sm top-[80%] left-[25%] animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="pt-16 px-4 z-10"
      >
        <span className="text-xs font-sans tracking-[0.3em] font-semibold text-gold-300 uppercase block mb-3">
          The Wedding Of
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-script text-gold-200 drop-shadow-lg tracking-wide my-4 select-none">
          {weddingInfo.groom.nickname} & {weddingInfo.bride.nickname}
        </h1>
        <p className="text-sm sm:text-base font-serif tracking-[0.2em] text-zinc-300 mt-2 select-none">
          {weddingInfo.date.day} . {weddingInfo.date.month.toUpperCase()} . {weddingInfo.date.year}
        </p>
      </motion.div>

      {/* Recipient Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="px-6 py-8 rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-gold-400/20 max-w-[280px] sm:max-w-xs w-full shadow-2xl shadow-black/50 z-10 mx-4"
      >
        <span className="text-[10px] font-sans tracking-[0.2em] font-semibold text-zinc-400 uppercase block mb-1">
          Kepada Yth.
        </span>
        <span className="text-xs font-sans tracking-[0.1em] text-zinc-400 block mb-3">
          Bapak/Ibu/Saudara/i
        </span>
        <h2 className="text-xl sm:text-2xl font-serif font-semibold text-gold-300 px-2 line-clamp-2 leading-snug drop-shadow">
          {guestName}
        </h2>
        <span className="text-[10px] font-mono tracking-wider text-zinc-500 block mt-2 italic">
          di tempat
        </span>

        {/* Divider Gold Ornament */}
        <div className="flex items-center justify-center gap-2 mt-4 mb-2">
          <div className="h-[1px] w-8 bg-gold-400/30" />
          <span className="text-[10px] text-gold-400">♥</span>
          <div className="h-[1px] w-8 bg-gold-400/30" />
        </div>
      </motion.div>

      {/* Buka Undangan Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="pb-16 px-4 z-10 flex flex-col items-center gap-4"
      >
        <button
          id="open-invitation-btn"
          onClick={onOpen}
          className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-gold-500/30 active:scale-95 cursor-pointer border border-gold-400 group"
        >
          <MailOpen className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
          Buka Undangan
        </button>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-gold-400/60 flex flex-col items-center gap-1"
        >
          <span className="text-[9px] font-sans tracking-widest uppercase">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
