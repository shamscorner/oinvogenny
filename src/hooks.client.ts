import { baseLocale } from '$lib/i18n/i18n-util';

export {};

(function handle() {
	document.documentElement.setAttribute(
		'lang',
		localStorage.getItem('lang') || baseLocale
	);
})();
