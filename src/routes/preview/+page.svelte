<script lang="ts">
	import { onMount } from 'svelte';
	import InvoiceSkeleton from '$lib/components/InvoiceSkeleton.svelte';
	import ButtonPrimary from '$lib/components/buttons/ButtonPrimary.svelte';
	import LinkSecondary from '$lib/components/links/LinkSecondary.svelte';
	import { formatDate, scrollToTop } from '$lib/helpers';
	import Icon from '@iconify/svelte';
	import { t } from '$lib/i18n';
	import {
		invoiceData,
		invoiceItemsSubTotal,
		invoiceItemsTotal,
		companyAvatar
	} from '$lib/store';

	function printInvoice() {
		window.print();
	}

	onMount(() => {
		scrollToTop();
	});
</script>

<svelte:head>
	<title>{$t('page-title.preview')}</title>
	<meta name="description" content={$t('page-meta.description.preview')} />
</svelte:head>

<InvoiceSkeleton isNoteAvailable={$invoiceData.note !== ''}>
	<svelte:fragment slot="company-info">
		<p class="mb-1 text-xl font-semibold">
			{$invoiceData.yourCompanyInfo.companyName}
		</p>
		<p>{$invoiceData.yourCompanyInfo.name}</p>
		<p>
			{$invoiceData.yourCompanyInfo.city}, {$invoiceData.yourCompanyInfo
				.postalCode}
		</p>
		<p>{$invoiceData.yourCompanyInfo.country}</p>
	</svelte:fragment>

	<svelte:fragment slot="company-logo">
		<img
			src={$companyAvatar.avatar}
			alt={$t('company-logo')}
			width="128"
			height="128"
			class="h-32 w-32 rounded-full object-cover"
		/>
	</svelte:fragment>

	<svelte:fragment slot="submitted-on">
		<h2 class="text-lg font-semibold text-pink-400">
			{$t('submitted-on', { date: formatDate($invoiceData.submittedOn) })}
		</h2>
	</svelte:fragment>

	<svelte:fragment slot="invoice-for">
		{#each Object.values($invoiceData.invoiceFor) as item, idx (idx)}
			<p>{item}</p>
		{/each}
	</svelte:fragment>

	<svelte:fragment slot="invoice-from">
		{#each Object.values($invoiceData.invoiceFrom) as item, idx (idx)}
			<p>{item}</p>
		{/each}
	</svelte:fragment>

	<svelte:fragment slot="invoice-number">
		<p>{$invoiceData.invoiceNumber}</p>
	</svelte:fragment>

	<svelte:fragment slot="due-date">
		<p>{$invoiceData.dueDate}</p>
	</svelte:fragment>

	<svelte:fragment slot="work-date-for">
		<p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
			{$t('work-for-date')}
			<time datetime="2022-08-01" class="text-pink-400">
				{formatDate($invoiceData.workDateInterval.fromDate)}
			</time>
			-
			<time datetime="2022-08-31" class="text-pink-400">
				{formatDate($invoiceData.workDateInterval.toDate)}
			</time>
		</p>
	</svelte:fragment>

	<svelte:fragment slot="table-row">
		{#each $invoiceData.items as item, idx (idx)}
			<tr class="border-b border-gray-200 dark:border-gray-600">
				<td class="py-4 pl-4 pr-3 text-xs sm:pl-6 md:pl-0">
					<div class="font-medium">{item.description}</div>
					<div class="mt-0.5 sm:hidden">
						{$t('table.body.quantity-at-price', {
							quantity: (+item.quantity).toFixed(2),
							unitPrice: (+item.unitPrice).toFixed(2)
						})}
					</div>
				</td>
				<td class="hidden py-4 px-3 text-right text-xs sm:table-cell">
					{(+item.quantity).toFixed(2)}
				</td>
				<td class="hidden py-4 px-3 text-right text-xs sm:table-cell">
					${(+item.unitPrice).toFixed(2)}
				</td>
				<td class="py-4 pl-3 pr-4 text-right text-xs sm:pr-6 md:pr-0">
					${(+item.quantity * +item.unitPrice).toFixed(2)}
				</td>
			</tr>
		{/each}
	</svelte:fragment>

	<svelte:fragment slot="subtotal">
		${$invoiceItemsSubTotal.toFixed(2)}
	</svelte:fragment>

	<svelte:fragment slot="adjustments">
		- ${(+$invoiceData.adjustments).toFixed(2)}
	</svelte:fragment>

	<svelte:fragment slot="total">
		${$invoiceItemsTotal.toFixed(2)}
	</svelte:fragment>

	<svelte:fragment slot="note">
		{#if $invoiceData.note}
			<p class="mt-1 text-xs text-gray-400">
				{$invoiceData.note}
			</p>
		{/if}
	</svelte:fragment>

	<section class="mt-8 flex items-center justify-center gap-5 print:hidden">
		<LinkSecondary href="/generate">
			<Icon
				icon="mdi-light:chevron-double-left"
				width="20"
				height="20"
				aria-hidden="true"
				class="mr-2"
			/>
			{$t('edit')}
		</LinkSecondary>
		<ButtonPrimary on:click={printInvoice}>
			{$t('print')}
		</ButtonPrimary>
	</section>
</InvoiceSkeleton>
