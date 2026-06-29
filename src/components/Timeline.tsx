import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { loveStories } from '../data';
import { CornerOrnament, HeaderDivider, BotanicalCrest, FloatingMandala } from './Ornaments';

export default function Timeline() {
  return (
    <section id="timeline-section" className="py-20 px-4 bg-transparent relative overflow-hidden">
      {/* Background Ornaments */}
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <FloatingMandala className="top-1/3 left-10" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <BotanicalCrest />
          <span className="text-xs font-sans tracking-[0.25em] text-gold-600 dark:text-gold-400 font-semibold uppercase block mb-2">
            Momen Spesial
          </span>
          <h2 className="text-3xl font-serif text-ink-900 dark:text-gold-100 font-medium">
            Kisah Cinta Kami
          </h2>
          <HeaderDivider className="mt-2" />
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans mt-3 max-w-sm mx-auto">
            Bagaimana petualangan indah ini bermula hingga kami dipersatukan dalam komitmen suci.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-gold-300/40 dark:border-zinc-800 ml-4 sm:ml-6 md:mx-auto md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-[1px] md:before:bg-gold-300/40 md:before:dark:bg-zinc-800">
          
          {loveStories.map((story, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={story.year} className="relative mb-12 last:mb-0 md:flex md:justify-between items-center group">
                
                {/* Timeline Node / Circle Indicator */}
                <div className="absolute left-[-17px] top-1.5 md:left-1/2 md:ml-[-13px] md:top-2.5 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-cream dark:bg-ink-950 border border-gold-300 dark:border-ink-700 shadow-md group-hover:border-gold-500 group-hover:scale-110 transition-all duration-300">
                  <Heart className="w-3 h-3 text-gold-500 fill-gold-500/20 group-hover:fill-gold-500 group-hover:text-gold-600 transition-colors" />
                </div>

                {/* Left/Right Container Grid for alternate layouts */}
                <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isEven ? 'md:text-right md:order-1' : 'md:text-left md:order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -15 : 15, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                    className="bg-white/70 dark:bg-ink-950/40 backdrop-blur-md rounded-2xl p-6 border border-gold-300/30 dark:border-ink-700/30 shadow-sm relative group hover:border-gold-400 dark:hover:border-gold-500 transition-colors"
                  >
                    {/* Decorative Card Light Spot */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                    {/* Timeline Card Content */}
                    <span className="inline-block px-3 py-1 bg-gold-100 dark:bg-gold-900/20 rounded-full text-xs font-semibold text-gold-700 dark:text-gold-400 mb-3 tracking-wider font-mono">
                      {story.year}
                    </span>
                    <h3 className="text-lg font-serif font-semibold text-ink-900 dark:text-gold-100 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                      {story.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty block for layout alignment on desktop */}
                <div className={`hidden md:block w-[45%] ${isEven ? 'order-2' : 'order-1'}`} />

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
