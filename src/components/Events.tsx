import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, Map } from 'lucide-react';
import { weddingEvents, weddingImages } from '../data';
import { CornerOrnament, HeaderDivider, BotanicalCrest, FloatingMandala } from './Ornaments';

export default function Events() {
  const { akad, resepsi } = weddingEvents;

  return (
    <section id="events-section" className="py-20 px-4 bg-transparent relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <FloatingMandala className="top-1/3 left-1/2 -translate-x-1/2" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gold-200/5 dark:bg-gold-500/[0.01] blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16 flex flex-col items-center">
          <BotanicalCrest />
          <span className="text-xs font-sans tracking-[0.25em] text-gold-600 dark:text-gold-400 font-semibold uppercase block mb-2">
            Detail Acara
          </span>
          <h2 className="text-3xl font-serif text-ink-900 dark:text-gold-100 font-medium">
            Waktu & Tempat
          </h2>
          <HeaderDivider className="mt-2" />
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans mt-3 max-w-sm mx-auto">
            Dengan segala hormat, kami mengharapkan kehadiran Bapak/Ibu/Saudara/i untuk menyaksikan momen berharga ini.
          </p>
        </div>

        {/* Akad & Resepsi Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-2 max-w-3xl mx-auto">
          
          {/* Akad Nikah Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: "spring", stiffness: 45, damping: 14 }}
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 18 } }}
            className="bg-white/70 dark:bg-ink-950/40 backdrop-blur-md rounded-3xl p-8 border border-gold-300/30 dark:border-ink-700/30 shadow-sm relative overflow-hidden group hover:shadow-md hover:border-gold-400 dark:hover:border-gold-500 transition-all duration-300"
          >
            {/* Soft decorative inner border */}
            <div className="absolute inset-4 border border-gold-300/10 dark:border-zinc-800/20 rounded-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-500/5 to-transparent rounded-bl-3xl" />

            <div className="text-center relative z-10 flex flex-col items-center">
              {/* Event Icon */}
              <div className="w-12 h-12 rounded-full bg-gold-100/50 dark:bg-gold-950/40 flex items-center justify-center text-gold-600 dark:text-gold-400 mb-6 border border-gold-200 dark:border-zinc-800">
                <span className="text-xl">💍</span>
              </div>

              <h3 className="text-2xl font-serif font-semibold text-ink-900 dark:text-gold-100 mb-6">
                {akad.title}
              </h3>

              {/* Event details list */}
              <div className="space-y-4 w-full mb-8">
                <div className="flex flex-col items-center">
                  <Calendar className="w-4 h-4 text-gold-600 dark:text-gold-400 mb-1" />
                  <p className="text-sm font-semibold text-ink-900 dark:text-gold-100">{akad.date}</p>
                </div>

                <div className="flex flex-col items-center">
                  <Clock className="w-4 h-4 text-gold-600 dark:text-gold-400 mb-1" />
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">{akad.time}</p>
                </div>

                <div className="flex flex-col items-center text-center px-4">
                  <MapPin className="w-4 h-4 text-gold-600 dark:text-gold-400 mb-1" />
                  <p className="text-sm font-semibold text-ink-900 dark:text-gold-100">{akad.locationName}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed max-w-[200px]">{akad.address}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a
                  href={akad.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-sans text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm active:scale-95 shadow-gold-500/20"
                >
                  <Map className="w-3.5 h-3.5" />
                  Buka Peta
                </a>
                <a
                  href={akad.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-gold-300/40 dark:border-ink-700/50 text-zinc-700 dark:text-zinc-300 hover:bg-gold-100/50 dark:hover:bg-zinc-800 transition-colors text-xs font-sans font-semibold tracking-wider uppercase"
                >
                  Save Date
                </a>
              </div>
            </div>
          </motion.div>

          {/* Resepsi Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: "spring", stiffness: 45, damping: 14, delay: 0.15 }}
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 18 } }}
            className="bg-white/70 dark:bg-ink-950/40 backdrop-blur-md rounded-3xl p-8 border border-gold-300/30 dark:border-ink-700/30 shadow-sm relative overflow-hidden group hover:shadow-md hover:border-gold-400 dark:hover:border-gold-500 transition-all duration-300"
          >
            {/* Soft decorative inner border */}
            <div className="absolute inset-4 border border-gold-300/10 dark:border-zinc-800/20 rounded-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-500/5 to-transparent rounded-bl-3xl" />

            <div className="text-center relative z-10 flex flex-col items-center">
              {/* Event Icon */}
              <div className="w-12 h-12 rounded-full bg-gold-100/50 dark:bg-gold-950/40 flex items-center justify-center text-gold-600 dark:text-gold-400 mb-6 border border-gold-200 dark:border-zinc-800">
                <span className="text-xl">🥂</span>
              </div>

              <h3 className="text-2xl font-serif font-semibold text-ink-900 dark:text-gold-100 mb-6">
                {resepsi.title}
              </h3>

              {/* Event details list */}
              <div className="space-y-4 w-full mb-8">
                <div className="flex flex-col items-center">
                  <Calendar className="w-4 h-4 text-gold-600 dark:text-gold-400 mb-1" />
                  <p className="text-sm font-semibold text-ink-900 dark:text-gold-100">{resepsi.date}</p>
                </div>

                <div className="flex flex-col items-center">
                  <Clock className="w-4 h-4 text-gold-600 dark:text-gold-400 mb-1" />
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">{resepsi.time}</p>
                </div>

                <div className="flex flex-col items-center text-center px-4">
                  <MapPin className="w-4 h-4 text-gold-600 dark:text-gold-400 mb-1" />
                  <p className="text-sm font-semibold text-ink-900 dark:text-gold-100">{resepsi.locationName}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed max-w-[200px]">{resepsi.address}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a
                  href={resepsi.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-sans text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm active:scale-95 shadow-gold-500/20"
                >
                  <Map className="w-3.5 h-3.5" />
                  Buka Peta
                </a>
                <a
                  href={resepsi.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-gold-300/40 dark:border-ink-700/50 text-zinc-700 dark:text-zinc-300 hover:bg-gold-100/50 dark:hover:bg-zinc-800 transition-colors text-xs font-sans font-semibold tracking-wider uppercase"
                >
                  Save Date
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Elegant Venue Image matching reference image under "LOKASI ACARA" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1 }}
          className="mt-16 rounded-3xl overflow-hidden border border-gold-200 dark:border-zinc-800 max-w-3xl mx-auto shadow-lg relative group"
        >
          {/* Glowing border outline */}
          <div className="absolute inset-0 border border-gold-400/10 pointer-events-none rounded-3xl z-10" />
          
          <img
            src={weddingImages.decor}
            alt="Wedding Reception Hall decoration"
            referrerPolicy="no-referrer"
            className="w-full h-72 sm:h-96 object-cover group-hover:scale-[1.02] transition-transform duration-700 brightness-[0.95]"
          />
          
          {/* Subtle text details overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent flex items-end p-6">
            <div className="text-left">
              <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-bold">
                Venue Utama
              </span>
              <h4 className="text-lg sm:text-xl font-serif text-white font-medium mt-1">
                The Grand Ballroom
              </h4>
              <p className="text-xs text-zinc-300 mt-1 max-w-md">
                Kemegahan dan keindahan ruang resepsi yang didekorasi khusus untuk menyambut kehadiran Anda.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
