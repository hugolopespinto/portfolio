import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { translations } from '@/lib/translations';

type LanguageContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  changeLanguage: () => {},
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (saved) {
      setLanguage(saved);
      return;
    }

    const browserLang = navigator.language.slice(0, 2);
    const defaultLang = ['en', 'fr'].includes(browserLang) ? browserLang : 'en';

    setLanguage(defaultLang);
    localStorage.setItem('lang', defaultLang);
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  const t = (key: string) => translations[language]?.[key] || key;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
