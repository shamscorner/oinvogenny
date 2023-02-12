<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="inline-flex min-w-[100px] items-center justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
>
	<slot />
</a>
