// https://vike.dev/onPrerenderStart
import type { PageContext, PrerenderContext } from 'vike/types';
import assert from 'assert';

import { defaultLocale, locales } from '../locales';

const duplicateWithLocale = (pageContext: PageContext): PageContext[] => {
  // Duplicate pageContext for each locale
  return locales.map(locale => {
    // Localize URL
    let { urlOriginal } = pageContext;
    if (locale !== defaultLocale) {
      urlOriginal = `/${locale}${pageContext.urlOriginal}`;
    }

    return {
      ...pageContext,
      urlOriginal,
      locale,
    };
  });
};

// We only need this for pre-rendered apps https://vike.dev/pre-rendering
export const onPrerenderStart = async (prerenderContext: PrerenderContext) => {
  let pageContexts: PageContext[] = [];
  prerenderContext.pageContexts.forEach(pageContext => {
    if ('locale' in pageContext) {
      // Already localized by one of your onBeforePrerenderStart() hooks
      pageContexts.push(pageContext as unknown as PageContext);
    } else {
      //pagContext types have some issues related to missing data field, because of this "as unknown as PageContext" is here
      //TODO investigate this issue
      pageContexts = [
        ...pageContexts,
        ...duplicateWithLocale(pageContext as unknown as PageContext),
      ];
    }
  });

  return {
    prerenderContext: {
      pageContexts,
    },
  };
};
