
import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, TranslationKeys, translations } from '@/utils/translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Get language from localStorage or default to English
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const savedLanguage = localStorage.getItem('todoLanguage');
    return (savedLanguage as LanguageCode) || 'en';
  });

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('todoLanguage', language);
  }, [language]);

  // Translation function
  const t = (key: TranslationKeys): string => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
