// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируем JSON файлы с переводами
import enTranslation from '../locales/en/common.json';
import ruTranslation from '../locales/ru/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation, // Перевод для английского языка
      },
      ru: {
        translation: ruTranslation, // Перевод для русского языка
      },
    },
    lng: 'en', // Язык по умолчанию
    fallbackLng: 'en', // Язык по умолчанию, если переводы не найдены
    interpolation: {
      escapeValue: false, // Для React
    },
  });

export default i18n;
