<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<button
	type="button"
	class="inline-flex min-w-[6.25em] items-center justify-center rounded-md border border-transparent bg-pink-100 px-4 py-2 text-base font-medium text-pink-700 hover:bg-pink-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 dark:bg-pink-900/60 dark:text-pink-200 dark:focus-visible:ring-offset-gray-800"
	on:click={() => dispatch('click')}
>
	<slot />
</button>
