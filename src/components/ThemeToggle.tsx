import { Sun, Moon } from 'lucide-react';
import { Theme } from '../types';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-[100] p-3 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-lg border border-gold-200 dark:border-zinc-800 text-gold-600 dark:text-gold-400 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 animate-pulse" />
      ) : (
        <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
      )}
    </button>
  );
}
