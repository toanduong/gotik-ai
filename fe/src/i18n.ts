import {getRequestConfig} from 'next-intl/server';
import {defineRouting} from 'next-intl/routing';
import {notFound} from 'next/navigation';

// Supported locales
export const locales = ['en', 'vi'] as const;
export type Locale = (typeof locales)[number];

// Default locale (no prefix)
export const defaultLocale: Locale = 'en';

export const routing = defineRouting({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: 'as-needed'
});

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming locale parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
