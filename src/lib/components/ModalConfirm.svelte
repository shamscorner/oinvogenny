<script lang="ts">
	import ButtonPrimary from './buttons/ButtonPrimary.svelte';
	import { teleport } from '$lib/helpers';
	import LL from '$lib/i18n/i18n-svelte';
	import { createEventDispatcher } from 'svelte';
	import ButtonSecondary from './buttons/ButtonSecondary.svelte';

	const dispatch = createEventDispatcher();

	let isOpen = false;

	export function toggle() {
		isOpen = !isOpen;
		dispatch('toggle');
	}

	function handlePerformOk() {
		dispatch('confirm-clear');
		toggle();
	}
</script>

{#if isOpen}
	<div
		class="relative z-10"
		aria-labelledby="modal-title"
		role="dialog"
		aria-modal="true"
		use:teleport={'teleport'}
	>
		<!--
			Background backdrop, show/hide based on modal state.

			Entering: "ease-out duration-300"
			From: "opacity-0"
			To: "opacity-100"
			Leaving: "ease-in duration-200"
			From: "opacity-100"
			To: "opacity-0"
		-->
		<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

		<div class="fixed inset-0 z-10 overflow-y-auto">
			<div
				class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
			>
				<!--
					Modal panel, show/hide based on modal state.

					Entering: "ease-out duration-300"
					From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					To: "opacity-100 translate-y-0 sm:scale-100"
					Leaving: "ease-in duration-200"
					From: "opacity-100 translate-y-0 sm:scale-100"
					To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				-->
				<div
					class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all dark:bg-gray-800 dark:text-gray-200 sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
				>
					<div class="sm:flex sm:items-start">
						<div
							class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-gray-900 sm:mx-0 sm:h-10 sm:w-10"
						>
							<svg
								class="h-6 w-6 text-red-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
								/>
							</svg>
						</div>
						<div class="mt-3 text-center sm:mt-1.5 sm:ml-4 sm:text-left">
							<h1 class="text-lg font-medium leading-6" id="modal-title">
								{$LL.common.areYouSure()}
							</h1>
						</div>
					</div>
					<div class="mt-5 gap-4 sm:mt-4 sm:flex sm:flex-row-reverse">
						<ButtonPrimary on:click={handlePerformOk}>
							<slot name="button-confirm">{$LL.common.ok()}</slot>
						</ButtonPrimary>
						<ButtonSecondary on:click={toggle}>
							<slot name="button-close">{$LL.common.close()}</slot>
						</ButtonSecondary>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
