<script lang="ts">
	import { t, locale, locales, saveLang } from '$lib/i18n';
	import Icon from '@iconify/svelte';

	function setAndSaveLocalLang() {
		saveLang($locale);
	}
</script>

<select
	bind:value={$locale}
	on:change={setAndSaveLocalLang}
>
	{#each locales as l}
		<option value={l}>{l}</option>
	{/each}
</select>

<h1 class="mt-4 h-5 pt-4 pb-6 text-3xl font-bold underline">
	{$t('invoice')}
</h1>

<Icon icon="mdi-light:home" width="100" height="100" />
