<script lang="ts">
	import '../app.css';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import DropDown from '$lib/components/DropDown.svelte';
	import { locale, locales, saveLang } from '$lib/i18n';
	import type { LocaleType } from '$lib/i18n/translations';

	function setLocaleLang(l: LocaleType) {
		$locale = l;
		saveLang(l);
	}
</script>

<div class="h-screen overflow-y-auto pb-16">
	<header
		class="flex items-center gap-5 justify-end max-w-2xl mx-auto mt-4"
	>
		<ThemeSwitch />
		<DropDown value={$locale}>
			{#each locales as l}
				<button
					id="menu-item-{l}"
					class="text-gray-700 dark:text-gray-400 block px-4 py-2 text-sm hover:text-pink-500 transition-colors dark:hover:text-pink-500 uppercase w-full text-left"
					role="menuitem"
					tabindex="-1"
					on:click={() => setLocaleLang(l)}
				>
					{l}
				</button>
			{/each}
		</DropDown>
	</header>
	<slot />
</div>
