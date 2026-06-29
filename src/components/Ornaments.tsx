import { motion } from 'motion/react';

interface OrnamentProps {
  className?: string;
}

// 1. Intricate Art-Deco & Botanical Corner Bracket
export function CornerOrnament({ position, className = '' }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; className?: string }) {
  const transformClass = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 scale-x-[-1]',
    'bottom-left': 'bottom-0 left-0 scale-y-[-1]',
    'bottom-right': 'bottom-0 right-0 scale-x-[-1] scale-y-[-1]'
  }[position];

  return (
    <div className={`absolute ${transformClass} w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 pointer-events-none select-none z-10 opacity-40 dark:opacity-20 transition-opacity duration-500 ${className}`}>
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-gold-600 dark:text-gold-400"
      >
        {/* Double-line frame border corners */}
        <path d="M 4,4 L 110,4" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
        <path d="M 4,4 L 4,110" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
        
        <path d="M 12,12 L 80,12" stroke="currentColor" strokeWidth="1.25" opacity="0.6" strokeLinecap="round" />
        <path d="M 12,12 L 12,80" stroke="currentColor" strokeWidth="1.25" opacity="0.6" strokeLinecap="round" />

        {/* Delicate vine curves */}
        <path d="M 12,12 C 30,25 45,25 65,15 C 75,10 85,15 95,25" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M 12,12 C 25,30 25,45 15,65 C 10,75 15,85 25,95" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />

        {/* Leaf details */}
        <path d="M 32,17 C 36,13 42,12 40,7 C 34,8 30,12 32,17 Z" fill="currentColor" opacity="0.75" />
        <path d="M 17,32 C 13,36 12,42 7,40 C 8,34 12,30 17,32 Z" fill="currentColor" opacity="0.75" />
        
        <path d="M 52,20 C 56,17 60,18 59,13 C 54,13 51,16 52,20 Z" fill="currentColor" opacity="0.6" />
        <path d="M 20,52 C 17,56 18,60 13,59 C 13,54 16,51 20,52 Z" fill="currentColor" opacity="0.6" />

        <path d="M 75,21 C 80,17 84,21 80,26 C 75,26 73,22 75,21 Z" fill="currentColor" opacity="0.8" />
        <path d="M 21,75 C 17,80 21,84 26,80 C 26,75 22,73 21,75 Z" fill="currentColor" opacity="0.8" />

        {/* Symmetrical art deco style accent beads */}
        <circle cx="12" cy="12" r="3.5" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="var(--color-cream, #fdfaf6)" className="dark:fill-ink-950" />
        <circle cx="102" cy="4" r="2" fill="currentColor" opacity="0.7" />
        <circle cx="4" cy="102" r="2" fill="currentColor" opacity="0.7" />
      </svg>
    </div>
  );
}

// 2. High-End Symmetric Horizontal Divider
export function HeaderDivider({ className = '' }: OrnamentProps) {
  return (
    <div className={`flex items-center justify-center w-full max-w-[280px] sm:max-w-[340px] mx-auto select-none pointer-events-none my-4 ${className}`}>
      <svg
        viewBox="0 0 320 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto text-gold-600/70 dark:text-gold-400/50"
      >
        {/* Left Tapering Line */}
        <path d="M 10,12 H 125" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.3" />
        <path d="M 70,12 H 125" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.7" />
        
        {/* Left Dots */}
        <circle cx="115" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
        <circle cx="125" cy="12" r="2.5" fill="currentColor" />

        {/* Central Mandala Crest */}
        {/* Center Diamond */}
        <path d="M 160,2 L 168,12 L 160,22 L 152,12 Z" fill="currentColor" />
        <circle cx="160" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1" />
        
        {/* Surrounding Petals */}
        <path d="M 148,12 C 151,15 151,9 148,12 Z" fill="currentColor" />
        <path d="M 172,12 C 169,15 169,9 172,12 Z" fill="currentColor" />
        <path d="M 160,0 C 157,3 163,3 160,0 Z" fill="currentColor" />
        <path d="M 160,24 C 157,21 163,21 160,24 Z" fill="currentColor" />

        {/* Right Dots */}
        <circle cx="195" cy="12" r="2.5" fill="currentColor" />
        <circle cx="205" cy="12" r="1.5" fill="currentColor" opacity="0.8" />

        {/* Right Tapering Line */}
        <path d="M 195,12 H 250" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.7" />
        <path d="M 195,12 H 310" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.3" />
      </svg>
    </div>
  );
}

// 3. Delicate Botanical Curved Leaf Arch / Frame
export function BotanicalCrest({ className = '' }: OrnamentProps) {
  return (
    <div className={`w-32 h-10 mx-auto select-none pointer-events-none mb-2 ${className}`}>
      <svg
        viewBox="0 0 120 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-gold-600/50 dark:text-gold-400/35"
      >
        {/* Left leaf branch */}
        <path d="M 60,30 C 45,30 25,25 15,10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M 15,10 C 10,7 6,4 4,2" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.5" />
        {/* Leaves left */}
        <path d="M 45,29 C 43,26 42,22 46,21 C 49,23 48,27 45,29 Z" fill="currentColor" />
        <path d="M 33,26 C 30,24 28,19 32,17 C 35,18 35,23 33,26 Z" fill="currentColor" />
        <path d="M 23,20 C 19,19 18,14 22,12 C 25,13 25,17 23,20 Z" fill="currentColor" />
        <path d="M 15,10 C 11,10 9,6 13,4 C 16,5 16,8 15,10 Z" fill="currentColor" />

        {/* Right leaf branch */}
        <path d="M 60,30 C 75,30 95,25 105,10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M 105,10 C 110,7 114,4 116,2" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" opacity="0.5" />
        {/* Leaves right */}
        <path d="M 75,29 C 77,26 78,22 74,21 C 71,23 72,27 75,29 Z" fill="currentColor" />
        <path d="M 87,26 C 90,24 92,19 88,17 C 85,18 85,23 87,26 Z" fill="currentColor" />
        <path d="M 97,20 C 101,19 102,14 98,12 C 95,13 95,17 97,20 Z" fill="currentColor" />
        <path d="M 105,10 C 109,10 111,6 107,4 C 104,5 104,8 105,10 Z" fill="currentColor" />

        {/* Centerpiece star/heart */}
        <circle cx="60" cy="30" r="3" fill="currentColor" />
        <circle cx="60" cy="30" r="1" fill="var(--color-cream, #fdfaf6)" className="dark:fill-ink-950" />
      </svg>
    </div>
  );
}

// 4. Large Elegant Floating Background Mandala
export function FloatingMandala({ className = '' }: OrnamentProps) {
  return (
    <div
      className={`absolute w-72 h-72 sm:w-96 sm:h-96 pointer-events-none select-none z-0 opacity-[0.025] dark:opacity-[0.012] text-gold-600 dark:text-gold-400 animate-[spin_180s_linear_infinite] [will-change:transform] [transform:translate3d(0,0,0)] ${className}`}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle cx="100" cy="100" r="90" strokeDasharray="2 3" />
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="50" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="30" />
        <circle cx="100" cy="100" r="10" />

        {/* Detailed Geometric Lines */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 100 + 10 * Math.cos(angle);
          const y1 = 100 + 10 * Math.sin(angle);
          const x2 = 100 + 90 * Math.cos(angle);
          const y2 = 100 + 90 * Math.sin(angle);
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} />
              <circle cx={x2} cy={y2} r="1.5" fill="currentColor" />
            </g>
          );
        })}

        {/* Intersecting arches */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const cx = 100 + 40 * Math.cos(angle);
          const cy = 100 + 40 * Math.sin(angle);
          return <circle key={i} cx={cx} cy={cy} r="40" opacity="0.75" />;
        })}
      </svg>
    </div>
  );
}
