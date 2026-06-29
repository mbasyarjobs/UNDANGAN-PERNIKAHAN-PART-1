import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { weddingImages } from '../data';

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // List of images for the gallery grid
  const galleryImages = [
    { src: weddingImages.hero, alt: 'Ajis & Amel Romantic Sunset' },
    { src: weddingImages.rings, alt: 'Gold Wedding Bands' },
    { src: weddingImages.decor, alt: 'Wedding Reception Decor' },
    { src: weddingImages.groom, alt: 'Groom Portrait' },
    { src: weddingImages.bride, alt: 'Bride Portrait' },
    // A beautiful 6th wedding detail image from Unsplash to make a perfect 3x2 grid
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop', alt: 'Wedding flower details' }
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === 0 ? galleryImages.length - 1 : selectedIdx - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === galleryImages.length - 1 ? 0 : selectedIdx + 1);
    }
  };

  // Beautiful staggered variants for a premium feel
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 14,
      }
    }
  };

  return (
    <section id="gallery-section" className="py-20 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-sans tracking-[0.25em] text-gold-600 dark:text-gold-400 font-semibold uppercase block mb-2">
            Momen Bahagia
          </span>
          <h2 className="text-3xl font-serif text-ink-900 dark:text-gold-100 font-medium">
            Galeri Foto
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-sans mt-3 max-w-sm mx-auto">
            Goresan kebahagiaan dan kehangatan kebersamaan kami yang terekam dalam lensa.
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto px-2"
        >
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.04,
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              onClick={() => setSelectedIdx(idx)}
              className="relative aspect-[3/4] sm:aspect-square overflow-hidden rounded-2xl border border-gold-200/30 dark:border-ink-700/30 shadow-md cursor-pointer group bg-cream-dark dark:bg-ink-950"
            >
              <img
                src={img.src}
                alt={img.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1000ms] ease-out"
                loading="lazy"
              />
              
              {/* Premium Inner Gold Border on Hover */}
              <div className="absolute inset-3 border border-gold-400/0 group-hover:border-gold-400/40 rounded-xl pointer-events-none transition-all duration-500 z-10" />

              {/* Dark overlay & Zoom icon on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/20 to-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center">
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/25 scale-90 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn className="w-5 h-5 text-gold-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More Info Text */}
        <div className="text-center mt-8">
          <p className="text-xs text-zinc-400 dark:text-zinc-500 font-sans italic">
            *Klik gambar untuk memperbesar & melihat tayangan slide
          </p>
        </div>

        {/* Lightbox / Slideshow Modal */}
        <AnimatePresence>
          {selectedIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIdx(null)}
              className="fixed inset-0 z-50 bg-zinc-950/95 flex flex-col justify-between p-4"
            >
              {/* Header inside lightbox */}
              <div className="flex justify-between items-center w-full max-w-4xl mx-auto py-2">
                <span className="text-xs font-mono text-zinc-400 font-semibold tracking-wider">
                  {selectedIdx + 1} / {galleryImages.length}
                </span>
                <button
                  onClick={() => setSelectedIdx(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Central image with navigation */}
              <div className="flex items-center justify-between w-full max-w-4xl mx-auto flex-1 relative px-2">
                
                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:-left-12 z-10 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white transition-all active:scale-95 cursor-pointer"
                  aria-label="Sebelumnya"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main Lightbox Image */}
                <div className="w-full h-[70vh] flex items-center justify-center select-none p-2 relative">
                  <motion.img
                    key={selectedIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    src={galleryImages[selectedIdx].src}
                    alt={galleryImages[selectedIdx].alt}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain rounded-xl border border-white/10 shadow-2xl"
                  />
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:-right-12 z-10 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white transition-all active:scale-95 cursor-pointer"
                  aria-label="Selanjutnya"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

              </div>

              {/* Caption inside lightbox */}
              <div className="text-center w-full max-w-4xl mx-auto py-4">
                <p className="text-sm font-sans text-zinc-300 font-medium">
                  {galleryImages[selectedIdx].alt}
                </p>
                <p className="text-xs font-serif text-gold-400 italic mt-1">
                  Ajis & Amel Wedding
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
