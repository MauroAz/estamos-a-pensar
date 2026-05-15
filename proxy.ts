import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt', 'en', 'es', 'gl'],
  defaultLocale: 'pt'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
