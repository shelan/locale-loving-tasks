
import React, { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageCode } from '@/utils/translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const { i18n, t } = useTranslation();
  
  const language = i18n.language as LanguageCode;
  
  const setLanguage = (newLanguage: LanguageCode) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('todoLanguage', newLanguage);
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
