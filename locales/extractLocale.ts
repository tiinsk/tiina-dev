export { extractLocale };

import { locales, defaultLocale } from './index';

const extractLocale = (urlPathname: string) => {
  const path = urlPathname.split('/');

  let locale;
  let urlPathnameWithoutLocale;
  // We remove the URL locale, for example `/en/about` => `/about`
  const first = path[1];
  if (
    (locales as string[])
      .filter(locale => locale !== defaultLocale)
      .includes(first)
  ) {
    locale = first;
    urlPathnameWithoutLocale = '/' + path.slice(2).join('/');
  } else {
    locale = defaultLocale;
    urlPathnameWithoutLocale = urlPathname;
  }

  return { locale, urlPathnameWithoutLocale };
};
