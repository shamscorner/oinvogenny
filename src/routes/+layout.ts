import type { LayoutLoad } from './$types';
import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { setLocale } from '$lib/i18n/i18n-svelte';
import { detectLocale, baseLocale } from '$lib/i18n/i18n-util';
import type { Locales } from '$lib/i18n/i18n-types';

export const ssr = false;

export const load = (async () => {
	const local = localStorage.getItem('lang') || baseLocale;

	const detectedLocale = detectLocale(() => [local]);
	await loadLocaleAsync(detectedLocale);
	setLocale(detectedLocale);

	return {
		locale: detectedLocale
	};
}) satisfies LayoutLoad<{ locale: Locales }>;
