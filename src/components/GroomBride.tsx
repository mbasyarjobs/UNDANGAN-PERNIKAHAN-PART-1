import { motion } from 'motion/react';
import { Instagram, Send } from 'lucide-react';
import { weddingInfo } from '../data';
import { CornerOrnament, HeaderDivider, BotanicalCrest, FloatingMandala } from './Ornaments';

export default function GroomBride() {
  const groom = weddingInfo.groom;
  const bride = weddingInfo.bride;

  return (
    <section id="mempelai-section" className="py-20 px-4 bg-transparent relative overflow-hidden">
      {/* Background Ornaments */}
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />
      <FloatingMandala className="top-1/4 left-1/4" />
      <FloatingMandala className="bottom-1/4 right-1/4" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Header section with Surah Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 px-4 flex flex-col items-center"
        >
          <BotanicalCrest />
          <span className="text-xs font-sans tracking-[0.25em] text-gold-600 dark:text-gold-400 font-semibold uppercase block mb-2">
            Mempelai
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-zinc-900 dark:text-zinc-100 mb-4 font-medium">
            Maha Suci Allah
          </h2>
          <HeaderDivider className="mb-6" />
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
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center group"
          >
            {/* Elegant Portrait Frame */}
            <motion.div 
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-52 h-52 sm:w-60 sm:h-60 mb-6"
            >
              {/* Outer Golden Arch Ring (slow spinning rotation) */}
              <div 
                className="absolute inset-0 rounded-[40px] border-2 border-dashed border-gold-400/30 scale-[1.04] group-hover:scale-[1.06] group-hover:border-gold-400/60 transition-all duration-[1000ms] ease-out animate-[spin_120s_linear_infinite]" 
              />
              <div className="absolute inset-0 rounded-[40px] border border-gold-400/15 scale-[1.08] group-hover:scale-[1.12] transition-all duration-[1000ms] ease-out" />
              
              {/* Image Canvas with Curved Corners */}
              <div className="w-full h-full rounded-[40px] overflow-hidden border-2 border-white dark:border-zinc-900 shadow-xl relative z-10">
                <motion.img
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3.0, ease: [0.16, 1, 0.3, 1] }}
                  src={groom.photo}
                  alt={groom.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-[1200ms] ease-out"
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
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col items-center group"
          >
            {/* Elegant Portrait Frame */}
            <motion.div 
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-52 h-52 sm:w-60 sm:h-60 mb-6"
            >
              {/* Outer Golden Arch Ring (slow spinning rotation) */}
              <div 
                className="absolute inset-0 rounded-[40px] border-2 border-dashed border-gold-400/30 scale-[1.04] group-hover:scale-[1.06] group-hover:border-gold-400/60 transition-all duration-[1000ms] ease-out animate-[spin_120s_linear_infinite_reverse]" 
              />
              <div className="absolute inset-0 rounded-[40px] border border-gold-400/15 scale-[1.08] group-hover:scale-[1.12] transition-all duration-[1000ms] ease-out" />
              
              {/* Image Canvas with Curved Corners */}
              <div className="w-full h-full rounded-[40px] overflow-hidden border-2 border-white dark:border-zinc-900 shadow-xl relative z-10">
                <motion.img
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3.0, ease: [0.16, 1, 0.3, 1] }}
                  src={bride.photo}
                  alt={bride.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-[1200ms] ease-out"
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
