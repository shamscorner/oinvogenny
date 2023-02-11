<script lang="ts">
	import Icon from '@iconify/svelte';

	export let value: string;
</script>

<div class="relative inline-block text-left group">
	<button
		type="button"
		class="inline-flex w-full justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-2.5 py-1 text-sm font-medium text-gray-700 dark:text-gray-400 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 dark:focus-visible:ring-offset-gray-900 uppercase"
		id="menu-button"
		aria-expanded="true"
		aria-haspopup="true"
	>
		{value}
		<Icon
			icon="mdi-light:chevron-down"
			width="20"
			height="20"
			aria-hidden="true"
			class="ml-1"
		/>
	</button>

	<!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
	<div
		class="absolute right-0 z-10 min-w-[80px] origin-top-right rounded-md bg-white dark:bg-gray-800 dark:border dark:border-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block"
		role="menu"
		aria-orientation="vertical"
		aria-labelledby="menu-button"
		tabindex="-1"
	>
		<div class="py-1" role="none">
			<slot />
		</div>
	</div>
</div>
