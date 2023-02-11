<script lang="ts">
	import { browser } from '$app/environment';

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

<div>
	<input
		id="theme-toggle"
		type="checkbox"
		class="peer invisible"
		on:click={handleSwitchDarkMode}
	/>
	<label
		for="theme-toggle"
		class="content-['']; absolute top-6 right-24 inline-block h-12 w-12 cursor-pointer rounded-full duration-300 peer-checked:bg-transparent peer-checked:shadow-[inset_-18px_-16px_1px_1px_#ddd] peer-[&:not(:checked)]:bg-amber-400"
	/>
</div>
