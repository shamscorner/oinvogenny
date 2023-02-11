<script lang="ts">
	import { t, locale, locales } from '$lib/i18n';
</script>

<select bind:value={$locale}>
	{#each locales as l}
		<option value={l}>{l}</option>
	{/each}
</select>

<h1 class="mt-4 h-5 pt-4 pb-6 text-3xl font-bold underline">
	{$t('homepage.title')}
</h1>
