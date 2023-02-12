<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<button
	type="button"
	class="inline-flex items-center rounded-md min-w-[100px] justify-center border border-transparent bg-pink-100 px-4 py-2 text-base font-medium text-pink-700 hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 dark:bg-pink-900/60 dark:text-pink-200"
	on:click={() => dispatch('click')}
>
	<slot />
</button>
