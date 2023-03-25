import { writable } from 'svelte/store';

export type SeoType = {
	title: string;
	description: string;
};

export const seo = writable<SeoType>({
	title: '',
	description: ''
});

export function setSeo({ title, description }: SeoType) {
	seo.set({
		title: `${title} | oinvogenny`,
		description
	});
}
