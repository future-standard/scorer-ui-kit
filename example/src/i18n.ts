import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Common_en from './locales/en/Common.json';
import Common_ja from './locales/ja/Common.json';

import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    Common: Common_en
  },
  ja: {
    Common: Common_ja
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'ja',
    // lng: 'en',
    keySeparator: '.', // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    // caches: ['localStorage', 'cookie'],
  });

export default i18n;
