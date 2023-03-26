<script lang="ts">
	import { useRegisterSW } from 'virtual:pwa-register/svelte';
	import LL from '$lib/i18n/i18n-svelte';
	import ButtonSecondary from './components/buttons/ButtonSecondary.svelte';

	let buildDate = __DATE__;
	let reloadSW = __RELOAD_SW__;

	const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
		onRegistered(r) {
			if (reloadSW) {
				r &&
					setInterval(() => {
						console.log('Checking for sw update');
						r.update();
					}, 60000);
			} else {
				console.log(`SW Registered: ${r}`);
			}
		},
		onRegisterError(error) {
			console.error('SW registration error', error);
		}
	});

	const close = () => {
		offlineReady.set(false);
		needRefresh.set(false);
	};

	$: toast = $offlineReady || $needRefresh;
</script>

{#if toast}
	<div
		class="fixed right-2 bottom-2 z-20 mr-4 rounded border bg-white p-4 text-left shadow-lg dark:border-gray-600 dark:bg-gray-700"
		role="alert"
	>
		<div class="mb-4">
			{#if !$offlineReady}
				<span>{$LL.pageSpecifics.pwa.newContentAvailable()}</span>
			{/if}
		</div>

		{#if $needRefresh}
			<ButtonSecondary on:click={() => updateServiceWorker(true)}>
				{$LL.common.reload()}
			</ButtonSecondary>
		{/if}

		<ButtonSecondary on:click={close}>{$LL.common.close()}</ButtonSecondary>
	</div>
{/if}

<div class="hidden">
	{buildDate}
</div>
