import en from '../../locales/en.json';
import bn from '../../locales/bn.json';

export type LocaleType = 'en' | 'bn';

export const translations: Record<
	LocaleType,
	Record<string, string>
> = {
	en,
	bn
};
