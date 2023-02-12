<script lang="ts">
	import InvoiceSkeleton from '$lib/components/InvoiceSkeleton.svelte';
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$t('page-title.generate')}</title>
	<meta
		name="description"
		content={$t('page-meta.description.generate')}
	/>
</svelte:head>

<InvoiceSkeleton>
	<svelte:fragment slot="company-info">
		<p class="mb-1 text-xl font-semibold">
			shamscorner.com
		</p>
		<p>Shamim Hossain</p>
		<p>Rajshahi, 6560</p>
		<p>Bangladesh</p>
	</svelte:fragment>

	<svelte:fragment slot="submitted-on">
		<h2 class="text-lg font-semibold text-pink-500">
			{$t('submitted-on', { date: '1/30/2023' })}
		</h2>
	</svelte:fragment>

	<svelte:fragment slot="invoice-for">
		<p>Apple Inc.</p>
		<p>Cupertino, CA</p>
		<p>94024</p>
		<p>United States</p>
	</svelte:fragment>

	<svelte:fragment slot="invoice-from">
		<p>Shamim Hossain</p>
		<p>Sapahar, Naogaon</p>
		<p>Rajshahi, 6560</p>
		<p>Bangladesh</p>
	</svelte:fragment>

	<svelte:fragment slot="invoice-number">
		<p>SK-2023014</p>
	</svelte:fragment>

	<svelte:fragment slot="due-date">
		<p>2/3/2023</p>
	</svelte:fragment>

	<svelte:fragment slot="work-date-for">
		<p
			class="mt-2 text-sm text-gray-500 dark:text-gray-300"
		>
			{$t('work-for-date')}
			<time datetime="2022-08-01" class="text-pink-500">
				August 1, 2022
			</time>
			-
			<time datetime="2022-08-31" class="text-pink-500">
				August 31, 2022
			</time>
		</p>
	</svelte:fragment>

	<svelte:fragment slot="table-row">
		<tr
			class="border-b border-gray-200 dark:border-gray-600"
		>
			<td class="py-4 pl-4 pr-3 text-xs sm:pl-6 md:pl-0">
				<div class="font-medium">
					New Advertising Campaign
				</div>
				<div class="mt-0.5 sm:hidden">
					12.0 hours at $75.00
				</div>
			</td>
			<td
				class="hidden py-4 px-3 text-right text-xs sm:table-cell"
			>
				12.0
			</td>
			<td
				class="hidden py-4 px-3 text-right text-xs sm:table-cell"
			>
				$75.00
			</td>
			<td
				class="py-4 pl-3 pr-4 text-right text-xs sm:pr-6 md:pr-0"
			>
				$900.00
			</td>
		</tr>
	</svelte:fragment>

	<svelte:fragment slot="subtotal">
		$3,900.00
	</svelte:fragment>

	<svelte:fragment slot="adjustments">
		$585.00
	</svelte:fragment>

	<svelte:fragment slot="total">$4,485.00</svelte:fragment>

	<svelte:fragment slot="note">
		<p class="mt-1 text-xs text-gray-400">
			The Toggl Track software is used to record the work
			hours & can be sent if necessary. With this, I confirm
			that all the information mentioned above is correct &
			validated.
		</p>
	</svelte:fragment>
</InvoiceSkeleton>
