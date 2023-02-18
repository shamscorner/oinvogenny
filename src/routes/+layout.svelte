<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import PageLoader from '$lib/components/PageLoader.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import DropDown from '$lib/components/DropDown.svelte';
	import { locale, locales, saveLang } from '$lib/i18n';
	import type { LocaleType } from '$lib/i18n/translations';
	import { t } from '$lib/i18n';
	import { page } from '$app/stores';
	import { invoiceData, companyAvatar } from '$lib/store';
	import { InvoiceDataIdxDBKey, CompanyAvatarIdxDBKey } from '$lib/constants';
	import { initIndexDB, type IndexedDBSchemaType } from '$lib/indexDB';
	import { arrayBufferToFile } from '$lib/helpers';
	import type { IDBPDatabase } from 'idb';
	import AppBackground from '$lib/components/AppBackground.svelte';

	let idxDB: IDBPDatabase<IndexedDBSchemaType> | undefined;
	let isPageLoader = true;

	onMount(async () => {
		setTimeout(() => {
			isPageLoader = false;
		}, 2000);

		idxDB = await initIndexDB();

		loadExistingInvoiceData();
		loadExistingCompanyAvatar();
	});

	function setLocaleLang(l: LocaleType) {
		$locale = l;
		saveLang(l);
	}

	async function loadExistingInvoiceData() {
		if (!idxDB) return;

		const existingData = await idxDB
			.transaction('invoiceData', 'readonly')
			.store.get(InvoiceDataIdxDBKey);
		if (!existingData) return;

		$invoiceData = existingData;
	}

	async function loadExistingCompanyAvatar() {
		if (!idxDB) return;

		const existingData = await idxDB
			.transaction('companyAvatar', 'readonly')
			.store.get(CompanyAvatarIdxDBKey);
		if (!existingData) return;
		if (!existingData.avatar) return;

		$companyAvatar = {
			avatar: arrayBufferToFile(existingData.avatar, existingData.type),
			type: existingData.type
		};
	}
</script>

<div
	id="overflowed-container"
	class="relative h-screen overflow-x-hidden pb-36 print:pb-0"
>
	<AppBackground />

	<header
		class="mx-auto mt-4 flex max-w-3xl items-center justify-between gap-5 px-4 print:hidden md:px-0"
	>
		<a href="/">
			<Icon
				icon="mdi:home"
				width="28"
				height="28"
				aria-hidden="true"
				class="ml-1 text-gray-400"
			/>
		</a>

		<nav>
			<a
				href="/generate"
				class="px-2 py-1 {$page.route.id === '/generate'
					? 'text-pink-500'
					: 'text-gray-500 dark:text-gray-400'}"
			>
				{$t('generate')}
			</a>
			<a
				href="/preview"
				class="px-2 py-1 {$page.route.id === '/preview'
					? 'text-pink-500'
					: 'text-gray-500 dark:text-gray-400'}"
			>
				{$t('preview')}
			</a>
		</nav>

		<div class="flex items-center gap-4">
			<ThemeSwitch />
			<DropDown value={$locale}>
				{#each locales as l}
					<button
						id="menu-item-{l}"
						class="block w-full px-4 py-2 text-left text-sm uppercase text-gray-700 transition-colors hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-500"
						role="menuitem"
						tabindex="-1"
						on:click={() => setLocaleLang(l)}
					>
						{l}
					</button>
				{/each}
			</DropDown>
		</div>
	</header>
	<slot />

	<footer class="mx-auto mt-8 max-w-3xl py-12  px-4 print:hidden md:px-0">
		<div class="md:flex md:items-center md:justify-between">
			<div class="flex justify-center space-x-6 md:order-2">
				<a
					href="https://twitter.com/shamscorner"
					target="_blank"
					rel="noreferrer"
					class="text-gray-400 hover:text-gray-500"
				>
					<span class="sr-only">Twitter</span>
					<Icon
						icon="mdi:twitter"
						width="24"
						height="24"
						aria-hidden="true"
						class="ml-1 text-gray-400"
					/>
				</a>

				<a
					href="https://github.com/shamscorner/oinvogenny"
					target="_blank"
					rel="noreferrer"
					class="text-gray-400 hover:text-gray-500"
				>
					<span class="sr-only">GitHub</span>
					<Icon
						icon="mdi:github"
						width="24"
						height="24"
						aria-hidden="true"
						class="ml-1 text-gray-400"
					/>
				</a>
			</div>
			<div class="mt-8 md:order-1 md:mt-0">
				<p class="text-center text-xs leading-5 text-gray-500">
					&copy; 2023 shamscorner, All rights reserved.
				</p>
			</div>
		</div>
		<p class="text-xs leading-5 text-gray-500">
			This site is built with
			<a
				href="https://kit.svelte.dev/"
				target="_blank"
				rel="noreferrer"
				class="underline"
			>
				SvelteKit
			</a>
			and
			<a
				href="https://tailwindcss.com/"
				target="_blank"
				rel="noreferrer"
				class="underline"
			>
				Tailwind CSS.
			</a>
			Deployed at
			<a
				href="https://www.netlify.com/"
				target="_blank"
				rel="noreferrer"
				class="underline"
			>
				Netlify.
			</a>
		</p>
	</footer>
</div>

<div>
	<div id="teleport" />
	<slot name="teleport" />
</div>

{#if isPageLoader}
	<PageLoader />
{/if}
