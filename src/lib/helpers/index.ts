export function scrollToTop() {
	const container = document.querySelector(
		'#overflowed-container'
	);
	if (!container) return;
	container.scrollTo({ top: 0, behavior: 'smooth' });
}
