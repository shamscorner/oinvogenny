<script lang="ts">
	import InvoiceSkeleton from '$lib/components/InvoiceSkeleton.svelte';
	import LinkPrimary from '$lib/components/links/LinkPrimary.svelte';
	import CurrencyValueInput from '$lib/components/inputs/CurrencyValueInput.svelte';
	import Icon from '@iconify/svelte';
	import { scrollToTop } from '$lib/helpers';
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';

	onMount(() => {
		scrollToTop();
	});

	const formData = {
		yourCompanyInfo: {
			companyName: '',
			city: '',
			postalCode: '',
			country: ''
		},
		submittedOn: '',
		invoiceFor: {
			name: '',
			address: '',
			postalCode: '',
			country: ''
		},
		invoiceFrom: {
			name: '',
			address: '',
			postalCode: '',
			country: ''
		},
		invoiceNumber: '',
		dueDate: '',
		workDateInterval: {
			fromDate: '',
			toDate: ''
		},
		items: [
			{
				description: 'item 1',
				quantity: '12',
				unitPrice: '74'
			},
			{
				description: 'item 2',
				quantity: '2',
				unitPrice: '200'
			},
			{
				description: 'item 3',
				quantity: '70',
				unitPrice: '40'
			}
		],
		adjustments: '34',
		note: ''
	};

	$: subTotal = formData.items.reduce(
		(acc, item) => acc + +item.quantity * +item.unitPrice,
		0
	);

	$: total = subTotal + +formData.adjustments;
</script>

<svelte:head>
	<title>{$t('page-title.generate')}</title>
	<meta name="description" content={$t('page-meta.description.generate')} />
</svelte:head>

<InvoiceSkeleton>
	<svelte:fragment slot="company-info">
		<fieldset>
			<legend class="sr-only">
				{$t('form.your-company-name')}
			</legend>
			<div
				class="mt-1 -space-y-px rounded-md bg-white shadow-sm dark:bg-gray-800"
			>
				<div>
					<label for="company-name" class="sr-only">
						{$t('form.your-company-name')}
					</label>
					<input
						bind:value={formData.yourCompanyInfo.companyName}
						type="text"
						name="company-name"
						id="company-name"
						class="rounded-none rounded-t-md font-semibold"
						placeholder={$t('form.your-company-name')}
						autocomplete="organization"
					/>
				</div>
				<div class="flex -space-x-px">
					<div class="w-1/2 min-w-0 flex-1">
						<label for="company-city" class="sr-only">
							{$t('form.your-company-city.sr-only')}
						</label>
						<input
							bind:value={formData.yourCompanyInfo.city}
							type="text"
							name="company-city"
							placeholder={$t('form.your-company-city')}
							autocomplete="street-address"
						/>
					</div>
					<div class="min-w-0 flex-1">
						<label for="company-postal-code" class="sr-only">
							{$t('form.your-company-postal-code.sr-only')}
						</label>
						<input
							bind:value={formData.yourCompanyInfo.postalCode}
							type="text"
							name="company-postal-code"
							id="company-postal-code"
							placeholder={$t('form.your-company-postal-code')}
							autocomplete="postal-code"
						/>
					</div>
				</div>
				<div>
					<label for="card-number" class="sr-only">
						{$t('form.your-company-country.sr-only')}
					</label>
					<input
						bind:value={formData.yourCompanyInfo.country}
						type="text"
						name="card-number"
						id="card-number"
						class="rounded-none rounded-b-md"
						placeholder={$t('form.your-company-country')}
						autocomplete="country-name"
					/>
				</div>
			</div>
		</fieldset>
	</svelte:fragment>

	<svelte:fragment slot="submitted-on">
		<h2 class="text-lg font-semibold text-pink-500">
			{$t('submitted-on', { date: '1/30/2023' })}
		</h2>
	</svelte:fragment>

	<svelte:fragment slot="invoice-for">
		<fieldset>
			<legend class="sr-only">
				{$t('form.invoice-for')}
			</legend>
			<div
				class="mt-1 -space-y-px rounded-md bg-white shadow-sm dark:bg-gray-800"
			>
				<div>
					<label for="invoice-for-name" class="sr-only">
						{$t('form.invoice-for.name')}
					</label>
					<input
						bind:value={formData.invoiceFor.name}
						type="text"
						name="invoice-for-name"
						id="invoice-for-name"
						class="rounded-none rounded-t-md"
						placeholder={$t('form.invoice-for.name')}
						autocomplete="organization"
					/>
				</div>
				<div>
					<label for="invoice-for-address" class="sr-only">
						{$t('form.invoice-for.address')}
					</label>
					<input
						bind:value={formData.invoiceFor.address}
						type="text"
						name="invoice-for-address"
						id="invoice-for-address"
						placeholder={$t('form.invoice-for.address')}
						autocomplete="street-address"
					/>
				</div>
				<div>
					<label for="invoice-for-postal-code" class="sr-only">
						{$t('form.invoice-for.postal-code')}
					</label>
					<input
						bind:value={formData.invoiceFor.postalCode}
						type="text"
						name="invoice-for-postal-code"
						id="invoice-for-postal-code"
						placeholder={$t('form.invoice-for.postal-code')}
						autocomplete="postal-code"
					/>
				</div>
				<div>
					<label for="invoice-for-country" class="sr-only">
						{$t('form.invoice-for.country')}
					</label>
					<input
						bind:value={formData.invoiceFor.country}
						type="text"
						name="invoice-for-country"
						id="invoice-for-country"
						class="rounded-none rounded-b-md"
						placeholder={$t('form.invoice-for.country')}
						autocomplete="country-name"
					/>
				</div>
			</div>
		</fieldset>
	</svelte:fragment>

	<svelte:fragment slot="invoice-from">
		<fieldset>
			<legend class="sr-only">
				{$t('form.invoice-from')}
			</legend>
			<div
				class="mt-1 -space-y-px rounded-md bg-white shadow-sm dark:bg-gray-800"
			>
				<div>
					<label for="invoice-from-name" class="sr-only">
						{$t('form.invoice-from.name')}
					</label>
					<input
						bind:value={formData.invoiceFrom.name}
						type="text"
						name="invoice-from-name"
						id="invoice-from-name"
						class="rounded-none rounded-t-md"
						placeholder={$t('form.invoice-from.name')}
						autocomplete="organization"
					/>
				</div>
				<div>
					<label for="invoice-from-address" class="sr-only">
						{$t('form.invoice-from.address')}
					</label>
					<input
						bind:value={formData.invoiceFrom.address}
						type="text"
						name="invoice-from-address"
						id="invoice-from-address"
						placeholder={$t('form.invoice-from.address')}
						autocomplete="street-address"
					/>
				</div>
				<div>
					<label for="invoice-from-postal-code" class="sr-only">
						{$t('form.invoice-from.postal-code')}
					</label>
					<input
						bind:value={formData.invoiceFrom.postalCode}
						type="text"
						name="invoice-from-postal-code"
						id="invoice-from-postal-code"
						placeholder={$t('form.invoice-from.postal-code')}
						autocomplete="postal-code"
					/>
				</div>
				<div>
					<label for="invoice-from-country" class="sr-only">
						{$t('form.invoice-from.country')}
					</label>
					<input
						bind:value={formData.invoiceFrom.country}
						type="text"
						name="invoice-from-country"
						id="invoice-from-country"
						class="rounded-none rounded-b-md"
						placeholder={$t('form.invoice-from.country')}
						autocomplete="country-name"
					/>
				</div>
			</div>
		</fieldset>
	</svelte:fragment>

	<svelte:fragment slot="invoice-number">
		<div>
			<label for="invoice-number" class="sr-only">
				{$t('form.invoice-number.sr-only')}
			</label>
			<input
				bind:value={formData.invoiceNumber}
				type="text"
				name="invoice-number"
				id="invoice-number"
				class="mt-2 rounded-md"
				placeholder={$t('form.invoice-number')}
				autocomplete="country-name"
			/>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="due-date">
		<p>2/3/2023</p>
	</svelte:fragment>

	<svelte:fragment slot="work-date-for">
		<p class="mt-2 text-sm text-gray-500 dark:text-gray-300">
			{$t('work-for-date')}
			<time datetime="2022-08-01" class="text-pink-500"> August 1, 2022 </time>
			-
			<time datetime="2022-08-31" class="text-pink-500"> August 31, 2022 </time>
		</p>
	</svelte:fragment>

	<svelte:fragment slot="table-row">
		{#each formData.items as item, itemIdx (itemIdx)}
			<tr class="border-b border-gray-200 dark:border-gray-600">
				<td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
					<div>
						<label for="item-description" class="sr-only">
							{$t('form.service-item.description')}
						</label>
						<input
							bind:value={item.description}
							type="text"
							name="item-description"
							id="item-description"
							class="rounded-md"
							placeholder={$t('form.service-item.description')}
						/>
					</div>
					<!-- TODO: work on it -->
					<div class="mt-0.5 sm:hidden">12.0 hours at $75.00</div>
				</td>
				<td class="hidden py-4 px-3 text-right text-sm sm:table-cell">
					<div class="flex flex-col items-end">
						<label for="item-quantity" class="sr-only">
							{$t('form.service-item.quantity')}
						</label>
						<input
							bind:value={item.quantity}
							type="number"
							name="item-quantity"
							id="item-quantity"
							class="max-w-[100px] rounded-md text-right"
							placeholder={$t('form.service-item.quantity')}
							min="0"
						/>
					</div>
				</td>
				<td class="hidden py-4 px-3 text-right text-sm sm:table-cell">
					<CurrencyValueInput
						bind:value={item.unitPrice}
						name="item-unit-price"
						id="item-unit-price"
						placeholder={$t('form.service-item.unit-price')}
						classes="flex flex-col items-end"
					>
						<svelte:fragment slot="label">
							{$t('form.service-item.unit-price')}
						</svelte:fragment>
					</CurrencyValueInput>
				</td>
				<td class="py-4 pl-3 pr-4 text-right text-sm sm:pr-6 md:pr-0">
					${(+item.quantity * +item.unitPrice).toFixed(2)}
				</td>
			</tr>
		{/each}
	</svelte:fragment>

	<svelte:fragment slot="subtotal">
		${subTotal.toFixed(2)}
	</svelte:fragment>

	<svelte:fragment slot="adjustments">
		<CurrencyValueInput
			bind:value={formData.adjustments}
			name="item-adjustments"
			id="item-adjustments"
			placeholder={$t('form.service-item.adjustments')}
			classes="flex flex-col items-end"
		>
			<svelte:fragment slot="label">
				{$t('form.service-item.adjustments')}
			</svelte:fragment>
		</CurrencyValueInput>
	</svelte:fragment>

	<svelte:fragment slot="total">
		${total.toFixed(2)}
	</svelte:fragment>

	<svelte:fragment slot="note">
		<div>
			<label for="item-note" class="sr-only">
				{$t('form.service-item.note')}
			</label>
			<div class="mt-2">
				<textarea
					bind:value={formData.note}
					rows="2"
					name="item-note"
					id="item-note"
					class="rounded-md"
					placeholder={$t('form.service-item.note')}
				/>
			</div>
		</div>
	</svelte:fragment>

	<section class="mt-8 text-center">
		<LinkPrimary href="/preview">
			{$t('preview')}
			<Icon
				icon="mdi-light:chevron-double-right"
				width="20"
				height="20"
				aria-hidden="true"
				class="ml-1"
			/>
		</LinkPrimary>
	</section>
</InvoiceSkeleton>
