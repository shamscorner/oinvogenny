<script>
	import '../app.css';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
</script>

<div class="h-screen overflow-y-auto pb-16">
	<ThemeSwitch />
	<slot />
</div>
