<script lang="ts">
	import { browser } from '$app/environment';
	import LL from '$lib/i18n/i18n-svelte';

	let darkMode = true;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<button
	type="button"
	class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-400/50 transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
	role="switch"
	aria-checked="false"
	on:click={handleSwitchDarkMode}
>
	<span class="sr-only">{$LL.common.changeTheme()}</span>
	<span
		class="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-gray-50 shadow ring-0 transition duration-200 ease-in-out dark:bg-gray-700 {darkMode
			? 'translate-x-5'
			: 'translate-x-0'}"
	>
		<span
			class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity {darkMode
				? 'opacity-0 duration-100 ease-out'
				: 'opacity-100 duration-200 ease-in'}"
			aria-hidden="true"
		>
			☀️
		</span>
		<span
			class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity {darkMode
				? 'opacity-100 duration-200 ease-in'
				: 'opacity-0 duration-100 ease-out'}"
			aria-hidden="true"
		>
			🌙
		</span>
	</span>
</button>
