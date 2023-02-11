<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<div class="h-96 flex flex-col justify-center items-center">
	<h1 class="text-3xl">
		{$t('welcome')}
	</h1>
	<a
		href="/generate"
		class="mt-8 text-lg text-pink-500 border border-pink-400 px-3 py-1 block rounded-md"
	>
		{$t('generate')}
	</a>
</div>
