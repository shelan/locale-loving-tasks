
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import TodoContainer from '@/components/TodoContainer';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const TodoApp = () => {
  const { t } = useLanguage();
  
  return (
    <div className="max-w-3xl w-full mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-todo-primary">{t('appTitle')}</h1>
        <LanguageSelector />
      </div>
      <TodoContainer />
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-12">
      <LanguageProvider>
        <TodoApp />
      </LanguageProvider>
    </div>
  );
};

export default Index;
