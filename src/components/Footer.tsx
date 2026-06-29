import { motion } from 'motion/react';
import { Heart, Share2, Instagram, MessageCircle } from 'lucide-react';
import { weddingInfo } from '../data';

export default function Footer() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Undangan Pernikahan Ajis & Amel',
        text: 'Undangan Pernikahan Digital Premium Ajis & Amel - Sabtu, 28 Juni 2026',
        url: window.location.href,
      }).catch((err) => console.log('Error sharing:', err));
    } else {
      // Fallback
      navigator.clipboard.writeText(window.location.href);
      alert('Tautan undangan berhasil disalin!');
    }
  };

  return (
    <footer id="wedding-footer" className="relative py-20 px-6 bg-transparent overflow-hidden text-center border-t border-gold-200/30 dark:border-zinc-900/50">
      
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gold-400/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10 space-y-8">
        
        {/* Heart icon */}
        <div className="flex justify-center">
          <div className="w-10 h-10 rounded-full bg-gold-100/50 dark:bg-gold-950/20 flex items-center justify-center text-gold-500 border border-gold-200 dark:border-zinc-800 animate-float">
            <Heart className="w-4 h-4 fill-gold-500/20" />
          </div>
        </div>

        {/* Thank You Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 px-2"
        >
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans max-w-sm mx-auto">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami sekeluarga.
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 font-sans italic">
            Kami yang berbahagia,
          </p>
        </motion.div>

        {/* Closing Signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-2"
        >
          <h3 className="text-4xl sm:text-5xl font-script text-gold-600 dark:text-gold-400 tracking-wide select-none">
            Terima Kasih
          </h3>
          <h4 className="text-xl font-serif font-semibold text-ink-900 dark:text-gold-100 mt-2">
            {weddingInfo.groom.nickname} & {weddingInfo.bride.nickname}
          </h4>
          <p className="text-xs font-sans tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mt-1 uppercase font-medium">
            {weddingInfo.date.day} . {weddingInfo.date.month.toUpperCase()} . {weddingInfo.date.year}
          </p>
          <span className="inline-block mt-3 px-4 py-1 rounded-full bg-gold-100 dark:bg-gold-900/10 border border-gold-200/20 text-gold-600 dark:text-gold-400 font-mono text-xs font-semibold tracking-wider">
            {weddingInfo.hashtag}
          </span>
        </motion.div>

        {/* Share Invitation Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-4 flex flex-col items-center gap-3"
        >
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-gold-400 text-gold-600 dark:text-gold-400 bg-white/50 dark:bg-ink-950/30 text-xs tracking-wider uppercase font-sans font-semibold hover:bg-gold-500 hover:text-white hover:border-gold-500 active:scale-95 transition-all duration-300 shadow-sm cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            Bagikan Undangan
          </button>
        </motion.div>

        {/* Decorative footer bottom note */}
        <div className="pt-12 text-[10px] font-mono tracking-wider text-zinc-400 dark:text-zinc-600 select-none">
          © {new Date().getFullYear()} AJIS & AMEL WEDDING. ALL RIGHTS RESERVED.
        </div>

      </div>
    </footer>
  );
}
