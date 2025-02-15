// src/components/LanguageSwitcher/LanguageSwitcher.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
  
    const handleLanguageChange = (lang: string) => {
      i18n.changeLanguage(lang).then(() => {
        localStorage.setItem('i18nextLng', lang); // Сохраняем выбранный язык в локальное хранилище
        console.log("Текущий язык:", lang);
      });
    };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('ru')}>Русский</button>
    </div>
  );
};

export default LanguageSwitcher;
