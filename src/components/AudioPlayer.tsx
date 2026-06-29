import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { weddingInfo } from '../data';

interface AudioPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  shouldPlay: boolean;
}

export default function AudioPlayer({ isPlaying, setIsPlaying, shouldPlay }: AudioPlayerProps) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (shouldPlay && isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log('Autoplay blocked or audio error:', err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, shouldPlay, setIsPlaying]);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div id="audio-player-container" className="fixed bottom-4 left-4 z-40 flex items-center gap-2">
      <audio
        ref={audioRef}
        src={weddingInfo.pianoMusicUrl}
        loop
        preload="auto"
      />
      
      {/* Floating pill for audio controls */}
      <div className="flex items-center gap-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 py-2 rounded-full shadow-lg border border-gold-200 dark:border-zinc-800 transition-all duration-500 hover:shadow-xl">
        {/* Rotating Music Disc Icon */}
        <button
          onClick={handleTogglePlay}
          className={`flex items-center justify-center w-8 h-8 rounded-full bg-gold-500 text-white shadow hover:bg-gold-600 transition-all focus:outline-none ${
            isPlaying ? 'animate-spin' : ''
          }`}
          style={{ animationDuration: '6s' }}
          title={isPlaying ? 'Pause Musik' : 'Play Musik'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 pl-0.5" />}
        </button>

        {/* Music Title and Status */}
        <div className="hidden sm:flex flex-col pr-2 text-left">
          <span className="text-[10px] font-mono tracking-wider text-gold-600 dark:text-gold-400 font-semibold uppercase">
            Backsound
          </span>
          <span className="text-xs font-serif font-medium text-zinc-800 dark:text-zinc-200 max-w-[120px] truncate">
            A Thousand Years
          </span>
        </div>

        {/* Sound Wave Animation */}
        {isPlaying && (
          <div className="flex items-end gap-[2px] h-4 px-2">
            <span className="w-[3px] bg-gold-500 rounded-full animate-pulse h-3"></span>
            <span className="w-[3px] bg-gold-500 rounded-full animate-pulse h-4" style={{ animationDelay: '0.15s' }}></span>
            <span className="w-[3px] bg-gold-500 rounded-full animate-pulse h-2" style={{ animationDelay: '0.3s' }}></span>
            <span className="w-[3px] bg-gold-500 rounded-full animate-pulse h-5" style={{ animationDelay: '0.45s' }}></span>
          </div>
        )}

        {/* Mute Button */}
        <button
          onClick={handleToggleMute}
          className="p-1.5 rounded-full hover:bg-gold-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors focus:outline-none"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
