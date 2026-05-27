import { useLanguage } from '@/context/LanguageContext';
import type { Translations } from '@/locales/en';

export function useTranslation(): { t: Translations } {
  const { t } = useLanguage();
  return { t };
}
