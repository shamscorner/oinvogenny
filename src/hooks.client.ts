export {};

(function handle() {
	document.documentElement.setAttribute(
		'lang',
		localStorage.getItem('lang') || 'en'
	);
})();
