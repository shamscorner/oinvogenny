import en from '../../locales/en.json';
import es from '../../locales/es.json';

export type LocaleType = 'en' | 'es';

export const translations: Record<
	LocaleType,
	Record<string, string>
> = {
	en,
	es
};
