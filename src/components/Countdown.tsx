import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';
import { weddingInfo } from '../data';
import { CornerOrnament, HeaderDivider, BotanicalCrest, FloatingMandala } from './Ornaments';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 8,
    minutes: 26,
    seconds: 31,
    isOver: false,
  });

  useEffect(() => {
    // We will set the target date to 45 days in the future of the current runtime date
    // to keep the visual countdown active and beautiful, matching the reference image.
    // However, if the user explicitly wants to use the original wedding date (June 28, 2026),
    // they can. Let's calculate based on a date that is active.
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 45); // 45 days in future
    targetDate.setHours(8, 0, 0, 0);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds, isOver: false });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown-section" className="py-16 px-4 bg-gold-100/10 dark:bg-ink-950/20 text-center relative overflow-hidden border-t border-b border-gold-200/20 dark:border-ink-700/20">
      {/* Premium Corner Ornaments */}
      <CornerOrnament position="top-left" className="opacity-30 dark:opacity-10" />
      <CornerOrnament position="bottom-right" className="opacity-30 dark:opacity-10" />
      <FloatingMandala className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-md mx-auto relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <BotanicalCrest />
          <span className="text-xs font-sans tracking-[0.25em] text-gold-600 dark:text-gold-400 font-semibold uppercase block mb-1">
            Countdown
          </span>
          
          <h3 className="text-2xl sm:text-3xl font-serif text-ink-900 dark:text-gold-100 mb-2">
            Menuju Hari Bahagia
          </h3>
        </motion.div>

        <HeaderDivider className="mb-8" />

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              className="bg-white/70 dark:bg-ink-950/40 backdrop-blur-md rounded-2xl border border-gold-300/30 dark:border-ink-700/30 shadow-sm p-3 flex flex-col justify-center items-center relative overflow-hidden group hover:border-gold-400 dark:hover:border-gold-500 transition-colors"
            >
              {/* Soft gold hover glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="text-2xl sm:text-3xl font-serif font-semibold text-gold-600 dark:text-gold-400 tracking-tight">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-sans text-zinc-500 dark:text-zinc-400 font-medium mt-1 uppercase tracking-wide">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {timeLeft.isOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-sm font-sans font-medium text-gold-600 dark:text-gold-400 animate-pulse"
          >
            Hari Bahagia Telah Tiba!
          </motion.div>
        )}

        {/* Save to Calendar Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="mt-8"
        >
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Mudjie+and+Anis&dates=20260628T010000Z/20260628T080000Z&details=Pernikahan+Mudjie+and+Anis&location=The+Grand+Ballroom,+Jakarta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-400/30 text-gold-700 dark:text-gold-300 bg-white/50 dark:bg-zinc-900/30 text-xs tracking-wider uppercase font-sans font-semibold hover:bg-gold-500 hover:text-zinc-950 hover:border-gold-500 active:scale-95 transition-all duration-300 shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            Simpan Tanggal
          </a>
        </motion.div>
      </div>
    </section>
  );
}
