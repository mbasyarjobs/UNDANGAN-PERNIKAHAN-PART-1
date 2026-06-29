import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift as GiftIcon, Copy, Check, MapPin, CreditCard } from 'lucide-react';
import { giftAccounts } from '../data';

export default function Gift() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="gift-section" className="py-20 px-4 bg-transparent relative overflow-hidden">
      {/* Gentle Gold Glow Spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gold-400/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10 text-center">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-sans tracking-[0.25em] text-gold-600 dark:text-gold-400 font-semibold uppercase block mb-2">
            Wedding Gift
          </span>
          <h2 className="text-3xl font-serif text-ink-900 dark:text-gold-100 font-medium">
            Kado Digital
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans mt-3 px-4 max-w-sm mx-auto leading-relaxed">
            Doa restu Anda adalah karunia terindah bagi kami. Namun, jika Anda ingin memberikan tanda kasih, dapat mengirimkannya melalui sarana berikut.
          </p>
        </div>

        {/* Gift Options Cards Grid */}
        <div className="space-y-6 max-w-md mx-auto px-2">
          {giftAccounts.map((acc) => (
            <motion.div
              key={acc.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 dark:bg-ink-950/40 backdrop-blur-md rounded-3xl p-6 border border-gold-300/30 dark:border-ink-700/30 shadow-sm relative overflow-hidden group hover:border-gold-400 dark:hover:border-gold-500 transition-colors"
            >
              {/* Premium Card Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-gold-500/5 to-transparent rounded-tl-3xl" />
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
                <div className="flex items-center gap-4">
                  {/* Custom Bank Icon Frame */}
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-ink-900 border border-gold-200/30 dark:border-zinc-800 flex items-center justify-center shadow-inner text-gold-600 dark:text-gold-400">
                    <CreditCard className="w-6 h-6" />
                  </div>

                  <div>
                    {/* Bank Name & Holder */}
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-700 dark:text-gold-400">
                      {acc.bankName}
                    </span>
                    <h4 className="text-base font-serif font-bold text-ink-900 dark:text-gold-100 mt-0.5">
                      No. Rek: {acc.accountNumber}
                    </h4>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 block mt-1">
                      a/n {acc.accountHolder}
                    </span>
                  </div>
                </div>

                {/* Copy to Clipboard Button */}
                <button
                  onClick={() => handleCopy(acc.id, acc.accountNumber)}
                  className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border transition-all text-xs font-sans font-semibold uppercase tracking-wider cursor-pointer ${
                    copiedId === acc.id
                      ? 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/40'
                      : 'bg-white/50 text-zinc-700 border-gold-300/40 hover:bg-gold-500 hover:text-white hover:border-gold-500 dark:bg-ink-900 dark:text-gold-200 dark:border-ink-700/40 dark:hover:bg-gold-500 dark:hover:text-white'
                  }`}
                >
                  {copiedId === acc.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Tersalin!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Salin No. Rek
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}

          {/* Shipping Address Card for gifts */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/70 dark:bg-ink-950/40 backdrop-blur-md rounded-3xl p-6 border border-gold-300/30 dark:border-ink-700/30 shadow-sm relative overflow-hidden group hover:border-gold-400 dark:hover:border-gold-500 transition-colors"
          >
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-gold-500/5 to-transparent rounded-tl-3xl" />
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
              <div className="flex items-center gap-4 flex-1">
                {/* Custom Map Pin Icon Frame */}
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-ink-900 border border-gold-200/30 dark:border-zinc-800 flex items-center justify-center shadow-inner text-gold-600 dark:text-gold-400">
                  <MapPin className="w-6 h-6" />
                </div>

                <div className="text-left flex-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-700 dark:text-gold-400">
                    Alamat Pengiriman Kado
                  </span>
                  <h4 className="text-sm font-sans font-bold text-ink-900 dark:text-gold-100 mt-1">
                    Jl. Merdeka No. 10, Jakarta Selatan
                  </h4>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 block mt-0.5">
                    Penerima: Ajis & Amel
                  </span>
                </div>
              </div>

              {/* Copy Address button */}
              <button
                onClick={() => handleCopy('address', 'Jl. Merdeka No. 10, Jakarta Selatan (Penerima: Ajis & Amel)')}
                className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border transition-all text-xs font-sans font-semibold uppercase tracking-wider cursor-pointer ${
                  copiedId === 'address'
                    ? 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/40'
                    : 'bg-white/50 text-zinc-700 border-gold-300/40 hover:bg-gold-500 hover:text-white hover:border-gold-500 dark:bg-ink-900 dark:text-gold-200 dark:border-ink-700/40 dark:hover:bg-gold-500 dark:hover:text-white'
                }`}
              >
                {copiedId === 'address' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Tersalin!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Salin Alamat
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
