// /pages/index/+onBeforePrerenderStart.ts
// Environment: build-time

import { defaultLocale, locales } from '../../locales';

type Return = {
  url: string;
}[];

export const onBeforePrerenderStart = async (): Promise<Return> => {
  const urlsWithPageContext: Return = [];

  locales.forEach(locale => {
    urlsWithPageContext.push({
      url: locale !== defaultLocale ? `/${locale}` : '/',
    });
  });

  return urlsWithPageContext;
};
