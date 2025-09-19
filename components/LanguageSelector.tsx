import React from 'react';

import { locales } from '../locales';
import { Link } from './Link';

export const LanguageSelector = () => {
  return (
    <ul>
      {locales.map(locale => (
        <li key={locale}>
          <Link locale={locale} href="/" key={locale}>
            {locale}
          </Link>
        </li>
      ))}
    </ul>
  )
}
