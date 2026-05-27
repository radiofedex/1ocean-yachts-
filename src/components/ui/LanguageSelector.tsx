'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import type { Language } from '@/types';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' },
  { code: 'fr', label: 'FR' },
];

interface LanguageSelectorProps {
  theme?: 'light' | 'dark';
}

export function LanguageSelector({ theme = 'dark' }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const current = languages.find((l) => l.code === language) ?? languages[0];

  const isDark = theme === 'dark';

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 font-inter text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
          isDark
            ? 'text-silver-400 hover:text-gold-400'
            : 'text-navy-600 hover:text-gold-600'
        }`}
        aria-label="Select language"
      >
        <span>{current.label}</span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-3 h-3 opacity-60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`absolute right-0 top-full mt-2 py-1.5 min-w-[70px] z-50 ${
              isDark
                ? 'bg-navy-900 border border-navy-700'
                : 'bg-white border border-navy-100 shadow-lg'
            }`}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 font-inter text-xs tracking-[0.15em] uppercase transition-colors duration-150 ${
                  lang.code === language
                    ? isDark
                      ? 'text-gold-400 bg-navy-800/50'
                      : 'text-gold-600 bg-gold-50'
                    : isDark
                    ? 'text-silver-400 hover:text-gold-400 hover:bg-navy-800/30'
                    : 'text-navy-600 hover:text-gold-600 hover:bg-gray-50'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
