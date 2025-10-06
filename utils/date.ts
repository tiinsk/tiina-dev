import { Locale } from '../locales';

export const getFormattedDateMMMYYYY = (
  dateStr: string | null,
  locale: Locale
) => {
  if (!dateStr) return null;
  const date = new Date(dateStr);
  const month = date.toLocaleString(locale, { month: 'short' });
  const year = date.getFullYear();
  return `${month} ${year}`;
};
