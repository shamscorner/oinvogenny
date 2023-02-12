<script lang="ts">
	import { browser } from '$app/environment';
	import { t } from '$lib/i18n';

	let darkMode = true;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem(
			'theme',
			darkMode ? 'dark' : 'light'
		);

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)')
					.matches)
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
	class="bg-gray-400/50 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
	role="switch"
	aria-checked="false"
	on:click={handleSwitchDarkMode}
>
	<span class="sr-only">{$t('change-theme')}</span>
	<span
		class="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-gray-700 shadow ring-0 transition duration-200 ease-in-out {darkMode
			? 'translate-x-5'
			: 'translate-x-0'}"
	>
		<span
			class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity {darkMode
				? 'opacity-0 ease-out duration-100'
				: 'opacity-100 ease-in duration-200'}"
			aria-hidden="true"
		>
			☀️
		</span>
		<span
			class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity {darkMode
				? 'opacity-100 ease-in duration-200'
				: 'opacity-0 ease-out duration-100'}"
			aria-hidden="true"
		>
			🌙
		</span>
	</span>
</button>
