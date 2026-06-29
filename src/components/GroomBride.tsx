import { motion } from 'motion/react';
import { Instagram, Send } from 'lucide-react';
import { weddingInfo } from '../data';

export default function GroomBride() {
  const groom = weddingInfo.groom;
  const bride = weddingInfo.bride;

  return (
    <section id="mempelai-section" className="py-20 px-4 bg-transparent relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-10 right-0 w-48 h-48 opacity-5 pointer-events-none select-none dark:opacity-[0.02]">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-gold-500">
          <path d="M50,0 C65,20 80,40 100,50 C80,60 65,80 50,100 C35,80 20,60 0,50 C20,40 35,20 50,0 Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-0 w-48 h-48 opacity-5 pointer-events-none select-none dark:opacity-[0.02]">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-gold-500">
          <path d="M50,0 C65,20 80,40 100,50 C80,60 65,80 50,100 C35,80 20,60 0,50 C20,40 35,20 50,0 Z" />
        </svg>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Header section with Surah Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="mb-16 px-4"
        >
          <span className="text-xs font-sans tracking-[0.25em] text-gold-600 dark:text-gold-400 font-semibold uppercase block mb-2">
            Mempelai
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-zinc-900 dark:text-zinc-100 mb-6 font-medium">
            Maha Suci Allah
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-sans italic leading-relaxed max-w-lg mx-auto relative px-6 py-4 rounded-2xl bg-gold-50/30 dark:bg-zinc-900/10 border border-gold-200/20">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir."
            <span className="block mt-3 text-[10px] font-sans font-bold tracking-wider text-gold-600 dark:text-gold-400 uppercase not-italic">
              ( QS. Ar-Rum : 21 )
            </span>
          </p>
        </motion.div>

        {/* Groom & Bride Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center px-4">
          
          {/* Groom Profile */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: "spring", stiffness: 45, damping: 14 }}
            className="flex flex-col items-center group"
          >
            {/* Elegant Portrait Frame */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative w-52 h-52 sm:w-60 sm:h-60 mb-6"
            >
              {/* Outer Golden Arch Ring (slow spinning rotation) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-[40px] border-2 border-dashed border-gold-400/30 scale-[1.04] group-hover:scale-[1.06] group-hover:border-gold-400/60 transition-all duration-500" 
              />
              <div className="absolute inset-0 rounded-[40px] border border-gold-400/15 scale-[1.08] group-hover:scale-[1.12] transition-all duration-500" />
              
              {/* Image Canvas with Curved Corners */}
              <div className="w-full h-full rounded-[40px] overflow-hidden border-2 border-white dark:border-zinc-900 shadow-xl relative z-10">
                <img
                  src={groom.photo}
                  alt={groom.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-[1200ms] ease-out"
                />
              </div>
            </motion.div>

            {/* Groom Info */}
            <h3 className="text-2xl font-serif font-semibold text-zinc-900 dark:text-zinc-100">
              {groom.fullName}
            </h3>
            <p className="text-xs text-gold-600 dark:text-gold-400 font-script text-3xl my-1">
              {groom.nickname}
            </p>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-[240px] leading-relaxed mt-2">
              {groom.parents}
            </p>

            {/* Social Link */}
            <a
              href={`https://instagram.com/${groom.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-zinc-100 hover:bg-gold-500 hover:text-zinc-950 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-gold-500 dark:hover:text-zinc-950 transition-all duration-300 text-xs font-sans font-medium"
            >
              <Instagram className="w-3.5 h-3.5" />
              @{groom.instagram}
            </a>
          </motion.div>

          {/* Golden Amperand Divider */}
          <div className="hidden md:flex flex-col items-center justify-center relative -my-8 z-10">
            <motion.span 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="text-5xl font-script text-gold-500 select-none"
            >
              &
            </motion.span>
          </div>

          {/* Bride Profile */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: "spring", stiffness: 45, damping: 14, delay: 0.15 }}
            className="flex flex-col items-center group"
          >
            {/* Elegant Portrait Frame */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative w-52 h-52 sm:w-60 sm:h-60 mb-6"
            >
              {/* Outer Golden Arch Ring (slow spinning rotation) */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-[40px] border-2 border-dashed border-gold-400/30 scale-[1.04] group-hover:scale-[1.06] group-hover:border-gold-400/60 transition-all duration-500" 
              />
              <div className="absolute inset-0 rounded-[40px] border border-gold-400/15 scale-[1.08] group-hover:scale-[1.12] transition-all duration-500" />
              
              {/* Image Canvas with Curved Corners */}
              <div className="w-full h-full rounded-[40px] overflow-hidden border-2 border-white dark:border-zinc-900 shadow-xl relative z-10">
                <img
                  src={bride.photo}
                  alt={bride.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-[1200ms] ease-out"
                />
              </div>
            </motion.div>

            {/* Bride Info */}
            <h3 className="text-2xl font-serif font-semibold text-zinc-900 dark:text-zinc-100">
              {bride.fullName}
            </h3>
            <p className="text-xs text-gold-600 dark:text-gold-400 font-script text-3xl my-1">
              {bride.nickname}
            </p>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-[240px] leading-relaxed mt-2">
              {bride.parents}
            </p>

            {/* Social Link */}
            <a
              href={`https://instagram.com/${bride.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-zinc-100 hover:bg-gold-500 hover:text-zinc-950 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-gold-500 dark:hover:text-zinc-950 transition-all duration-300 text-xs font-sans font-medium"
            >
              <Instagram className="w-3.5 h-3.5" />
              @{bride.instagram}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
