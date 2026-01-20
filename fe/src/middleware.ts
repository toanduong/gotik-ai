import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for:
  // - /api routes
  // - /admin routes (no locale prefix)
  // - /_next (Next.js internals)
  // - Static files
  matcher: [
    '/((?!api|_next|_vercel|admin|.*\\..*).*)'
  ]
};
