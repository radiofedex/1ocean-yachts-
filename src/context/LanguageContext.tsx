'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { Language } from '@/types';
import { en } from '@/locales/en';
import { es } from '@/locales/es';
import { it } from '@/locales/it';
import { fr } from '@/locales/fr';
import type { Translations } from '@/locales/en';

const translations: Record<Language, Translations> = { en, es, it, fr };

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('1ocean-lang') as Language | null;
      if (stored && ['en', 'es', 'it', 'fr'].includes(stored)) {
        setLanguageState(stored);
      }
    } catch {
      // localStorage not available
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('1ocean-lang', lang);
    } catch {
      // localStorage not available
    }
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
