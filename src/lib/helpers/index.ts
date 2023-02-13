export function scrollToTop() {
	const container = document.querySelector('#overflowed-container');
	if (!container) return;
	container.scrollTo({ top: 0, behavior: 'smooth' });
}

export function formatDate(date?: string) {
	if (!date) return '';

	return new Date(date).toLocaleDateString('en-us', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}
