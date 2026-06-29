import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Users, Check } from 'lucide-react';
import { RSVP } from '../types';

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'hadir',
    guests: '1',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsSubmitting(true);

    // Simulate saving and real delay
    setTimeout(() => {
      const rsvpData: RSVP = {
        name: formData.name,
        attendance: formData.attendance as 'hadir' | 'tidak' | 'ragu',
        guests: parseInt(formData.guests),
        timestamp: new Date().toISOString(),
      };

      // Retrieve existing RSVPs and append
      const existing = localStorage.getItem('wedding_rsvps');
      const rsvps = existing ? JSON.parse(existing) : [];
      rsvps.push(rsvpData);
      localStorage.setItem('wedding_rsvps', JSON.stringify(rsvps));

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ name: '', attendance: 'hadir', guests: '1' });
    setIsSubmitted(false);
  };

  return (
    <section id="rsvp-section" className="py-20 px-4 bg-transparent relative overflow-hidden">
      {/* Decorative Gold Leaf Borders */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.04] pointer-events-none select-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-gold-500">
          <path d="M100,0 C80,30 50,40 0,50 C30,60 40,80 50,100 C60,80 70,60 100,50 C70,40 80,30 100,0 Z" />
        </svg>
      </div>

      <div className="max-w-md mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-sans tracking-[0.25em] text-gold-600 dark:text-gold-400 font-semibold uppercase block mb-2">
            R S V P
          </span>
          <h2 className="text-3xl font-serif text-ink-900 dark:text-gold-100 font-medium">
            Konfirmasi Kehadiran
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans mt-3 px-4 leading-relaxed">
            Mohon konfirmasi kehadiran Anda sebelum <strong className="text-gold-600 dark:text-gold-400">15 Juni 2026</strong> untuk kenyamanan penyelenggaraan acara.
          </p>
        </div>

        {/* RSVP Card Frame */}
        <div className="bg-white/70 dark:bg-ink-950/40 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-gold-300/30 dark:border-ink-700/30 shadow-md relative">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="rsvp-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Full Name Input */}
                <div className="flex flex-col text-left">
                  <label htmlFor="fullname" className="text-xs font-sans font-semibold tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 uppercase">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Masukkan nama Anda..."
                    className="px-4 py-3 bg-white/50 dark:bg-ink-900/80 border border-gold-300/30 dark:border-ink-700/30 rounded-xl font-sans text-sm text-ink-900 dark:text-gold-50 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all shadow-sm"
                  />
                </div>

                {/* Attendance Selection */}
                <div className="flex flex-col text-left">
                  <label htmlFor="attendance" className="text-xs font-sans font-semibold tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 uppercase">
                    Konfirmasi Kehadiran
                  </label>
                  <div className="relative">
                    <select
                      id="attendance"
                      value={formData.attendance}
                      onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-ink-900/80 border border-gold-300/30 dark:border-ink-700/30 rounded-xl font-sans text-sm text-ink-900 dark:text-gold-50 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all shadow-sm appearance-none cursor-pointer"
                    >
                      <option value="hadir" className="bg-cream dark:bg-ink-950 text-ink-900 dark:text-gold-50">✓ Hadir dengan senang hati</option>
                      <option value="tidak" className="bg-cream dark:bg-ink-950 text-ink-900 dark:text-gold-50">✗ Maaf, Berhalangan hadir</option>
                      <option value="ragu" className="bg-cream dark:bg-ink-950 text-ink-900 dark:text-gold-50">? Masih Ragu-ragu / Tentatif</option>
                    </select>
                    {/* Select Dropdown custom indicator */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold-600 dark:text-gold-400 text-[10px]">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Number of Guests (conditionally visible if attendance is 'hadir' or 'ragu') */}
                {formData.attendance !== 'tidak' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-col text-left overflow-hidden"
                  >
                    <label htmlFor="guests" className="text-xs font-sans font-semibold tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 uppercase flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-gold-500" />
                      Jumlah Tamu
                    </label>
                    <div className="relative">
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-3 bg-white/50 dark:bg-ink-900/80 border border-gold-300/30 dark:border-ink-700/30 rounded-xl font-sans text-sm text-ink-900 dark:text-gold-50 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all shadow-sm appearance-none cursor-pointer"
                      >
                        <option value="1" className="bg-cream dark:bg-ink-950 text-ink-900 dark:text-gold-50">1 Orang (Hanya Saya)</option>
                        <option value="2" className="bg-cream dark:bg-ink-950 text-ink-900 dark:text-gold-50">2 Orang (Dengan Pasangan)</option>
                        <option value="3" className="bg-cream dark:bg-ink-950 text-ink-900 dark:text-gold-50">3 Orang (Dengan Keluarga)</option>
                        <option value="4" className="bg-cream dark:bg-ink-950 text-ink-900 dark:text-gold-50">4 Orang (Rombongan)</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gold-600 dark:text-gold-400 text-[10px]">
                        ▼
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Heart Gold Accent */}
                <div className="flex items-center justify-center py-2 text-gold-400 text-xs">
                  ♥
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-sans text-sm font-semibold tracking-widest uppercase transition-all shadow-md active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Mengirim...
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Kirim Konfirmasi
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="rsvp-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-ink-900 dark:text-gold-100">
                  Konfirmasi Terkirim!
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xs mx-auto leading-relaxed">
                  Terima kasih, data kehadiran Anda telah berhasil direkam dalam sistem. Doa restu Anda sangat berarti bagi kami.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-6 inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-gold-400 text-gold-600 dark:text-gold-400 hover:bg-gold-500 hover:text-white transition-colors text-xs font-sans font-semibold tracking-wider uppercase"
                >
                  Ubah Konfirmasi
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
