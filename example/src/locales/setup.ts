import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import Common_en from './en/Common.json';
import Common_ja from './ja/Common.json';

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
    lng: localStorage.getItem('language') || navigator.language,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    defaultNS: 'Common',
    ns: ['Common']
  });

export default i18n;