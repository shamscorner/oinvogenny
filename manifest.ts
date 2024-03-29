import type { ManifestOptions } from 'vite-plugin-pwa';

const options: Partial<ManifestOptions> = {
	short_name: 'oinvogenny',
	name: 'oinvogenny: One click invoice generator',
	icons: [
		{
			src: '/android-icon-36x36.png',
			sizes: '36x36',
			type: 'image/png',
			density: '0.75'
		},
		{
			src: '/android-icon-36x36.png',
			sizes: '36x36',
			type: 'image/png',
			purpose: 'maskable'
		},
		{
			src: '/android-icon-48x48.png',
			sizes: '48x48',
			type: 'image/png',
			density: '1.0'
		},
		{
			src: '/android-icon-48x48.png',
			sizes: '48x48',
			type: 'image/png',
			purpose: 'maskable'
		},
		{
			src: '/android-icon-72x72.png',
			sizes: '72x72',
			type: 'image/png',
			density: '1.5'
		},
		{
			src: '/android-icon-72x72.png',
			sizes: '72x72',
			type: 'image/png',
			purpose: 'maskable'
		},
		{
			src: '/android-icon-96x96.png',
			sizes: '96x96',
			type: 'image/png',
			density: '2.0'
		},
		{
			src: '/android-icon-96x96.png',
			sizes: '96x96',
			type: 'image/png',
			purpose: 'maskable'
		},
		{
			src: '/android-icon-144x144.png',
			sizes: '144x144',
			type: 'image/png',
			density: '3.0'
		},
		{
			src: '/android-icon-144x144.png',
			sizes: '144x144',
			type: 'image/png',
			purpose: 'maskable'
		},
		{
			src: '/android-icon-192x192.png',
			sizes: '192x192',
			type: 'image/png',
			density: '4.0'
		},
		{
			src: '/android-icon-192x192.png',
			sizes: '192x192',
			type: 'image/png',
			purpose: 'maskable'
		},
		{
			src: '/icon-512x512.png',
			sizes: '512x512',
			type: 'image/png'
		},
		{
			src: '/icon-512x512.png',
			sizes: '512x512',
			type: 'image/png',
			purpose: 'maskable'
		}
	],
	id: '/generate/?source=pwa',
	start_url: '/generate/?source=pwa',
	background_color: '#1f2937',
	display: 'standalone',
	scope: '/',
	theme_color: '#ec4899',
	shortcuts: [
		{
			name: 'Generate Invoice',
			short_name: 'oinvogenny',
			description:
				'Generate & print invoices according to the specified work log & unit.',
			url: '/generate?source=pwa',
			icons: [{ src: '/android-icon-192x192.png', sizes: '192x192' }]
		},
		{
			name: 'Preview Invoice',
			short_name: 'oinvogenny',
			description:
				"Preview your customized invoice with ease and ensure it's perfect before sending to clients.",
			url: '/preview?source=pwa',
			icons: [{ src: '/android-icon-192x192.png', sizes: '192x192' }]
		}
	],
	description:
		"This is a very simple, clean, awesome-looking, open-source, one-click invoice generator application for freelancers & remote job holders to manage payments. All the data are saved on the client's browser. Nothing is saved anywhere so it is secure & safe.",
	screenshots: [
		{
			src: '/screenshots/preview-light.png',
			type: 'image/png',
			sizes: '1534x1504'
		},
		{
			src: '/screenshots/generate-light.png',
			type: 'image/png',
			sizes: '1534x1504'
		},
		{
			src: '/screenshots/preview-dark.png',
			type: 'image/png',
			sizes: '1534x1504'
		},
		{
			src: '/screenshots/generate-dark.png',
			type: 'image/jpg',
			sizes: '1534x1504'
		}
	],
	protocol_handlers: [
		{
			protocol: 'web+invoice',
			url: '/generate?url=%s'
		},
		{
			protocol: 'web+generate',
			url: '/generate?url=%s'
		},
		{
			protocol: 'web+preview',
			url: '/preview?url=%s'
		}
	]
};

export default options;
