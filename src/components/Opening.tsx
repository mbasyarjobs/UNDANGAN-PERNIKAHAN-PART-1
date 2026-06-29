import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { weddingInfo, weddingImages } from '../data';
import { CornerOrnament, HeaderDivider, FloatingMandala } from './Ornaments';

export default function Opening() {
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
    <section id="opening-welcome" className="relative pt-24 pb-20 px-6 bg-transparent overflow-hidden text-center flex flex-col items-center">
      
      {/* Premium Corner Ornaments */}
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      
      {/* Floating Background Mandala */}
      <FloatingMandala className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-xl mx-auto relative z-10 space-y-6">
        
        {/* Wedding Title Logo with Great Vibes script */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] font-sans tracking-[0.3em] font-bold text-gold-600 dark:text-gold-400 uppercase block mb-2">
            The Wedding Invitation
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-script text-gold-600 dark:text-gold-400 font-medium select-none tracking-wide">
            {weddingInfo.groom.nickname} & {weddingInfo.bride.nickname}
          </h2>
          
          <HeaderDivider className="mt-2" />
        </motion.div>

        {/* Invitation Message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 px-2"
        >
          <p className="text-xs sm:text-sm font-sans text-zinc-500 dark:text-zinc-400 tracking-wider">
            Kepada Yth.
          </p>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-800 dark:text-zinc-200">
            {guestName}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 italic">
            di tempat
          </p>

          <div className="py-4">
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans max-w-md mx-auto">
              Tanpa mengurangi rasa hormat, dengan penuh syukur kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri perayaan pernikahan putra-putri kami:
            </p>
          </div>
        </motion.div>

        {/* Elegant Floral Frame Centerpiece Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative w-full max-w-sm mx-auto aspect-[16/10] rounded-2xl overflow-hidden border border-gold-200/50 dark:border-zinc-800 shadow-lg group"
        >
          {/* Subtle gold line border inside */}
          <div className="absolute inset-2.5 border border-gold-300/20 rounded-xl pointer-events-none z-10" />
          
          <img
            src={weddingImages.hero}
            alt="Ajis and Amel Prewedding Sunset"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-[0.85] group-hover:scale-105 transition-transform duration-[6s]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}
