export enum Locale {
  FI = 'fi',
  EN = 'en',
}

export type LocaleStr = 'fi' | 'en';

export const defaultLocale: Locale = Locale.EN;

export const languagesArray = [{ lang: 'en' }, { lang: 'fi' }];

export const locales = Object.values(Locale);

export const languages = {
  [Locale.FI]: 'FI',
  [Locale.EN]: 'EN',
};
