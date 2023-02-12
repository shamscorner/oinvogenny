<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="inline-flex items-center rounded-md min-w-[100px] justify-center border border-transparent bg-pink-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
>
	<slot />
</a>
