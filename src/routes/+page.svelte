<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<div class="flex h-96 flex-col items-center justify-center">
	<h1 class="text-3xl">
		{$t('welcome')}
	</h1>
	<a
		href="/generate"
		class="mt-8 block rounded-md border border-pink-400 px-3 py-1 text-lg text-pink-500"
	>
		{$t('generate')}
	</a>
</div>
