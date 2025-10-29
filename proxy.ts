import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from '@/locales';

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const locale = acceptLanguage.split(',')[0];
    return locale.split('-')[0];
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  if (pathname !== '/') {
    return;
  }
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
};
