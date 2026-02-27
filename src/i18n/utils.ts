import { translations, defaultLang, type Lang } from './translations';

export function t(lang: Lang, key: string): string {
  return translations[lang][key] ?? translations[defaultLang][key] ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export function getLocalePath(lang: Lang, path: string = ''): string {
  if (lang === 'es') return `/${path}`;
  return `/en/${path}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

export function getAlternateUrl(lang: Lang): string {
  return lang === 'es' ? '/en/' : '/';
}
