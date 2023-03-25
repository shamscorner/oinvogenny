import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
	plugins: [sveltekit(), SvelteKitPWA()],
	resolve: {
		alias: {
			$: resolve('./src')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
