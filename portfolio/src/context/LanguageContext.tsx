
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations } from '@/lib/translations';

type LanguageContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const defaultLanguageContext: LanguageContextType = {
  language: 'en',
  changeLanguage: () => {},
  t: () => '',
};

const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>('en');

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
