import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locales/en/common.json';
import ruTranslation from '../locales/ru/common.json';

i18n.use(initReactI18next).init({
    resources: {
      en: {
        common: enTranslation, // подключаем переводы для английского
      },
      ru: {
        common: ruTranslation, // подключаем переводы для русского
      },
    },
    lng: localStorage.getItem('i18nextLng') || 'en', // получаем текущий язык из локального хранилища
    fallbackLng: 'en', // язык по умолчанию
    interpolation: {
      escapeValue: false, // Для React
    },
    react: {
      useSuspense: false, // Скрывает ошибку React Suspense
    },
  });
  

export default i18n;
