import { NextRequest } from 'next/server';

const defaultLocale = 'en';
let locales = ['en', 'ru', 'he'];

type PathnameLocale = {
  pathname: string;
  locale?: never;
};
type ISOLocale = {
  pathname?: never;
  locale: string;
};

type LocaleSource = PathnameLocale | ISOLocale;

const getLocalePartsFrom = ({ pathname, locale }: LocaleSource) => {
  if (locale) {
    const localeParts = locale.toLowerCase().split('-');
    return {
      lang: localeParts[0],
      country: localeParts[1],
    };
  } else {
    const pathnameParts = pathname!.toLowerCase().split('/');
    return {
      lang: pathnameParts[1],
      country: pathnameParts[2],
    };
  }
};

export function middleware(request: NextRequest) {}

export const config = {
  // do not localize next.js paths
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};
