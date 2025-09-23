export enum Locale {
  FI = 'fi',
  EN = 'en',
}
export const defaultLocale: Locale = Locale.EN;

export const locales = Object.values(Locale);

export const languages = {
  [Locale.FI]: 'Suomi',
  [Locale.EN]: 'English',
};
