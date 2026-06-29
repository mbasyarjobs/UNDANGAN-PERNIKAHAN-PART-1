import { useState, useEffect } from 'react';
import { Theme } from './types';

// Importing modular components
import ThemeToggle from './components/ThemeToggle';
import AudioPlayer from './components/AudioPlayer';
import Cover from './components/Cover';
import Opening from './components/Opening';
import Countdown from './components/Countdown';
import GroomBride from './components/GroomBride';
import Timeline from './components/Timeline';
import Events from './components/Events';
import Gallery from './components/Gallery';
import RSVPForm from './components/RSVPForm';
import Wishes from './components/Wishes';
import Gift from './components/Gift';
import Footer from './components/Footer';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');

  // Theme Management
  useEffect(() => {
    const savedTheme = localStorage.getItem('wedding_theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Default light mode
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('wedding_theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Lock scrolling when Cover is active
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setIsPlaying(true); // Autoplay background music after interaction

    // Smooth scroll to main opening section
    setTimeout(() => {
      const openingElement = document.getElementById('opening-welcome');
      if (openingElement) {
        openingElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-cream-dark dark:bg-ink-950 text-ink-900 dark:text-gold-50 selection:bg-gold-200 dark:selection:bg-gold-800/50 transition-colors duration-500 relative">
      {/* Decorative full-bleed ambient dot background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-[0.04] pointer-events-none select-none z-0" />

      {/* 1. Interactive Theme Toggle floating in upper right */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {/* 2. Floating Audio Player in bottom-left */}
      <AudioPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} shouldPlay={isOpen} />

      {/* 3. Cover Unlock Screen Overlay */}
      <Cover isOpen={isOpen} onOpen={handleOpenInvitation} />

      {/* 4. Full Wedding Invitation Main Sections Wrapper */}
      {/* Underlaid container is revealed after unlocking */}
      <div 
        id="main-invitation-container"
        className={`transition-all duration-1000 relative z-10 ${
          isOpen ? 'opacity-100 scale-100 filter blur-none' : 'opacity-0 scale-95 filter blur-md pointer-events-none'
        }`}
      >
        <div className="max-w-md md:max-w-3xl mx-auto shadow-2xl bg-cream dark:bg-ink-900 border-x border-gold-200/50 dark:border-ink-700/30 relative overflow-hidden">
          
          {/* Welcome Intro Section */}
          <Opening />

          {/* Countdown Clock */}
          <Countdown />

          {/* Mempelai (Groom and Bride Profiles) */}
          <GroomBride />

          {/* Kisah Cinta Milestones */}
          <Timeline />

          {/* Event Schedules & Location Maps */}
          <Events />

          {/* Photo Gallery & Lightbox */}
          <Gallery />

          {/* RSVP Attendance Confirmation */}
          <RSVPForm />

          {/* Guest Greetings & Wishes Board */}
          <Wishes />

          {/* Digital Cash Envelope and Mailing Gifts */}
          <Gift />

          {/* Closing & Footer script */}
          <Footer />

        </div>
      </div>
    </div>
  );
}
