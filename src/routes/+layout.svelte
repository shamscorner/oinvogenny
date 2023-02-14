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

<AppBackground />

<div
	id="overflowed-container"
	class="h-screen overflow-y-auto pb-16 print:pb-0"
>
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
</div>

<div>
	<div id="teleport" />
	<slot name="teleport" />
</div>

{#if isPageLoader}
	<PageLoader />
{/if}
