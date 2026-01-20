"use client";

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';
import {useState, useTransition} from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    startTransition(() => {
      // Remove current locale from pathname if present
      const pathWithoutLocale = pathname.replace(/^\/(en|vi)/, '') || '/';

      // Add new locale prefix (except for default 'en')
      const newPath = newLocale === 'en'
        ? pathWithoutLocale
        : `/${newLocale}${pathWithoutLocale}`;

      router.push(newPath);
      setIsOpen(false);
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-widest hover:text-sky-blue transition-colors disabled:opacity-50"
        aria-label="Select language"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          <path d="M2 12h20"/>
        </svg>
        <span>{locale === 'en' ? 'EN' : 'VI'}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown Menu */}
          <div className="absolute top-full right-0 mt-2 w-32 bg-white backdrop-blur-md rounded-xl shadow-2xl border border-gray overflow-hidden z-50">
            <button
              onClick={() => handleLocaleChange('en')}
              className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                locale === 'en'
                  ? 'bg-sky-blue text-white'
                  : 'text-navy-blue hover:bg-sky-blue/20 hover:text-sky-blue'
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLocaleChange('vi')}
              className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                locale === 'vi'
                  ? 'bg-sky-blue text-white'
                  : 'text-navy-blue hover:bg-sky-blue/20 hover:text-sky-blue'
              }`}
            >
              Tiếng Việt
            </button>
          </div>
        </>
      )}
    </div>
  );
}
