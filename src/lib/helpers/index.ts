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

export function arrayBufferToBlob(buffer: ArrayBuffer | string, type: string) {
	return new Blob([buffer], { type: type });
}

export function arrayBufferToFile(buffer: ArrayBuffer | string, type: string) {
	const blob = arrayBufferToBlob(buffer, type);
	return URL.createObjectURL(blob);
}

export function uploadFile(
	event: Event,
	callback: (e: ProgressEvent<FileReader>, fileType: string) => void
) {
	const files = (event.target as HTMLInputElement).files;
	if (!files || !files.length) return;

	const reader = new FileReader();
	reader.readAsArrayBuffer(files[0]);

	reader.onloadend = (e) => {
		if (!e.target) return;
		if (!e.target.result) return;
		callback(e, files[0].type);
	};
}

export function teleport(node: HTMLElement, name: string) {
	const teleportContainer = document.getElementById(name) as HTMLElement;
	teleportContainer.appendChild(node);

	return {
		destroy() {
			node.remove();
		}
	};
}
