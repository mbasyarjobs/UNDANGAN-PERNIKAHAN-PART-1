import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Heart, Send } from 'lucide-react';
import { Comment } from '../types';
import { initialComments } from '../data';
import { CornerOrnament, HeaderDivider, BotanicalCrest, FloatingMandala } from './Ornaments';

export default function Wishes() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load comments from localStorage combined with initialComments
  useEffect(() => {
    const stored = localStorage.getItem('wedding_comments');
    if (stored) {
      setComments(JSON.parse(stored));
    } else {
      setComments(initialComments);
      localStorage.setItem('wedding_comments', JSON.stringify(initialComments));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newComment: Comment = {
        id: `c_${Date.now()}`,
        name: name.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString(),
        likes: 0,
      };

      const updated = [newComment, ...comments];
      setComments(updated);
      localStorage.setItem('wedding_comments', JSON.stringify(updated));

      setName('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  const handleLike = (id: string) => {
    const updated = comments.map((c) => {
      if (c.id === id) {
        const isLiked = c.isLikedByMe;
        return {
          ...c,
          likes: isLiked ? c.likes - 1 : c.likes + 1,
          isLikedByMe: !isLiked,
        };
      }
      return c;
    });
    setComments(updated);
    localStorage.setItem('wedding_comments', JSON.stringify(updated));
  };

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    // Dynamic Indonesian date formatting
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${dayName}, ${day} ${month} ${year} ${hours}:${minutes}`;
  };

  return (
    <section id="wishes-section" className="py-20 px-4 bg-transparent relative overflow-hidden">
      {/* Premium Corner Ornaments */}
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <FloatingMandala className="bottom-1/4 right-10" />

      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 flex flex-col items-center"
        >
          <BotanicalCrest />
          <span className="text-xs font-sans tracking-[0.25em] text-gold-600 dark:text-gold-400 font-semibold uppercase block mb-2">
            Doa Restu
          </span>
          <h2 className="text-3xl font-serif text-ink-900 dark:text-gold-100 font-medium">
            Ucapan & Doa
          </h2>
          <HeaderDivider className="mt-2" />
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans mt-3 px-4">
            Berikan ucapan selamat, harapan, serta doa terbaik Anda untuk mengiringi langkah baru pernikahan kami.
          </p>
        </motion.div>

        {/* Input Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/70 dark:bg-ink-950/40 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-gold-300/30 dark:border-ink-700/30 shadow-sm max-w-lg mx-auto mb-12"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col text-left">
              <label htmlFor="wishes-name" className="text-xs font-sans font-semibold tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 uppercase">
                Nama Anda
              </label>
              <input
                type="text"
                id="wishes-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Masukkan nama Anda..."
                className="px-4 py-3 bg-white/50 dark:bg-ink-900/80 border border-gold-300/30 dark:border-ink-700/30 rounded-xl font-sans text-sm text-ink-900 dark:text-gold-50 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all shadow-sm"
              />
            </div>

            <div className="flex flex-col text-left">
              <label htmlFor="wishes-msg" className="text-xs font-sans font-semibold tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 uppercase">
                Ucapan & Doa Terbaik
              </label>
              <textarea
                id="wishes-msg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                placeholder="Tulis ucapan dan doa Anda..."
                className="px-4 py-3 bg-white/50 dark:bg-ink-900/80 border border-gold-300/30 dark:border-ink-700/30 rounded-xl font-sans text-sm text-ink-900 dark:text-gold-50 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-all shadow-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-sans text-sm font-semibold tracking-widest uppercase transition-all shadow-sm active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Mengirim Ucapan...
                </div>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Kirim Ucapan
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Live Messages List Card */}
        <div className="max-w-lg mx-auto">
          {/* Header wishes count */}
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-xs font-sans tracking-wide font-bold text-zinc-500 dark:text-zinc-400 uppercase flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-gold-500" />
              Doa Terkumpul ({comments.length})
            </span>
          </div>

          {/* Messages Scroller */}
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gold-300">
            <AnimatePresence initial={false}>
              {comments.map((comment, index) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/70 dark:bg-ink-950/40 backdrop-blur-md rounded-2xl p-5 border border-gold-300/20 dark:border-ink-700/20 shadow-sm relative group hover:border-gold-300 dark:hover:border-zinc-700 transition-colors"
                >
                  {/* Top Header inside wish card */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className="text-sm font-sans font-semibold text-ink-900 dark:text-gold-100">
                        {comment.name}
                      </h4>
                      <span className="text-[10px] font-sans text-zinc-400 dark:text-zinc-500">
                        {formatTime(comment.timestamp)}
                      </span>
                    </div>

                    {/* Like button */}
                    <button
                      onClick={() => handleLike(comment.id)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs transition-all duration-300 ${
                        comment.isLikedByMe
                          ? 'bg-red-50 dark:bg-red-950/20 text-red-500 border-red-200 dark:border-red-900/50'
                          : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:text-red-400 hover:border-red-200'
                      }`}
                      aria-label="Sukai Ucapan"
                    >
                      <Heart className={`w-3.5 h-3.5 ${comment.isLikedByMe ? 'fill-red-500 text-red-500' : ''}`} />
                      <span className="font-sans font-semibold">{comment.likes}</span>
                    </button>
                  </div>

                  {/* Message body */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans text-left break-words">
                    {comment.message}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
