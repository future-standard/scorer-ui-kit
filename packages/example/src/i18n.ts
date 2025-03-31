import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Common_en from './locales/en/Common.json';
import Common_ja from './locales/ja/Common.json';
import GlobalUI_en from './locales/en/GlobalUI.json';
import GlobalUI_ja from './locales/ja/GlobalUI.json';

import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    Common: Common_en,
    GlobalUI: GlobalUI_en  // Changed from GlobalUI_en
  },
  ja: {
    Common: Common_ja,
    GlobalUI: GlobalUI_ja  // Changed from GlobalUI_ja
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'ja',
    lng: localStorage.getItem('language') || navigator.language,
    keySeparator: '.', // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    defaultNS: 'GlobalUI',
    ns: ['Common', 'GlobalUI'],
  });

export default i18n;
