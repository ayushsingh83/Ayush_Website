import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunMedium, MoonStar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={clsx(
        'relative inline-flex h-10 w-18 items-center justify-between rounded-3xl px-2',
        'glass-card border-white/30 bg-slate-900/40 dark:bg-slate-900/30',
        'transition-colors duration-500'
      )}
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 350, damping: 24, duration: 0.5 }}
        className={clsx(
          'absolute h-8 w-8 rounded-full bg-gradient-to-tr from-neonCyan to-neonPurple shadow-glow',
          isDark ? 'right-1' : 'left-1'
        )}
      />
      <AnimatePresence initial={false} mode="wait">
        {!isDark && (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, y: 8 }}
            animate={{ opacity: 1, rotate: 0, y: 0 }}
            exit={{ opacity: 0, rotate: 90, y: -8 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative z-10 text-yellow-300"
          >
            <SunMedium className="h-5 w-5" />
          </motion.span>
        )}
        {isDark && (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90, y: -8 }}
            animate={{ opacity: 1, rotate: 0, y: 0 }}
            exit={{ opacity: 0, rotate: -90, y: 8 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative z-10 text-sky-300"
          >
            <MoonStar className="h-5 w-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

