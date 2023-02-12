<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="inline-flex items-center rounded-md min-w-[100px] justify-center border border-transparent bg-pink-100 px-4 py-2 text-base font-medium text-pink-700 hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 dark:bg-pink-900/60 dark:text-pink-200"
>
	<slot />
</a>
