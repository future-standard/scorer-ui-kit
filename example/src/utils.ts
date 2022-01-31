import { formatDistance } from 'date-fns';
import { enUS, ja } from 'date-fns/locale';
import i18n from './locales/setup';

export const getTimeSince = (date: Date | string) => {
  if (!date) return '-';

  try {
    const lang = i18n.language === 'ja' ? ja : enUS;

    const result = formatDistance(
      new Date(date), new Date(),
      {
        locale: lang,
        addSuffix: true,
        includeSeconds: true
      }
    );

    return lang === ja ? result : result.charAt(0).toUpperCase() + result.slice(1);
  } catch (err) {
    console.error(err);
  }
  return '-';
};