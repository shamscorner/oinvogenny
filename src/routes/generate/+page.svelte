<script lang="ts">
	import InvoiceSkeleton from '$lib/components/InvoiceSkeleton.svelte';
	import LinkPrimary from '$lib/components/links/LinkPrimary.svelte';
	import Icon from '@iconify/svelte';
	import { scrollToTop } from '$lib/helpers';
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';

	onMount(() => {
		scrollToTop();
	});
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
		<fieldset>
			<legend class="sr-only">
				{$t('form.your-company-name')}
			</legend>
			<div
				class="mt-1 -space-y-px rounded-md bg-white dark:bg-gray-800 shadow-sm"
			>
				<div>
					<label for="company-name" class="sr-only">
						{$t('form.your-company-name')}
					</label>
					<input
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
							type="text"
							name="company-city"
							placeholder={$t('form.your-company-city')}
							autocomplete="street-address"
						/>
					</div>
					<div class="min-w-0 flex-1">
						<label
							for="company-postal-code"
							class="sr-only"
						>
							{$t('form.your-company-postal-code.sr-only')}
						</label>
						<input
							type="text"
							name="company-postal-code"
							id="company-postal-code"
							placeholder={$t(
								'form.your-company-postal-code'
							)}
							autocomplete="postal-code"
						/>
					</div>
				</div>
				<div>
					<label for="card-number" class="sr-only">
						{$t('form.your-company-country.sr-only')}
					</label>
					<input
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
				class="mt-1 -space-y-px rounded-md bg-white dark:bg-gray-800 shadow-sm"
			>
				<div>
					<label for="invoice-for-name" class="sr-only">
						{$t('form.invoice-for.name')}
					</label>
					<input
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
						type="text"
						name="invoice-for-address"
						id="invoice-for-address"
						placeholder={$t('form.invoice-for.address')}
						autocomplete="street-address"
					/>
				</div>
				<div>
					<label
						for="invoice-for-postal-code"
						class="sr-only"
					>
						{$t('form.invoice-for.postal-code')}
					</label>
					<input
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
				class="mt-1 -space-y-px rounded-md bg-white dark:bg-gray-800 shadow-sm"
			>
				<div>
					<label for="invoice-from-name" class="sr-only">
						{$t('form.invoice-from.name')}
					</label>
					<input
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
						type="text"
						name="invoice-from-address"
						id="invoice-from-address"
						placeholder={$t('form.invoice-from.address')}
						autocomplete="street-address"
					/>
				</div>
				<div>
					<label
						for="invoice-from-postal-code"
						class="sr-only"
					>
						{$t('form.invoice-from.postal-code')}
					</label>
					<input
						type="text"
						name="invoice-from-postal-code"
						id="invoice-from-postal-code"
						placeholder={$t(
							'form.invoice-from.postal-code'
						)}
						autocomplete="postal-code"
					/>
				</div>
				<div>
					<label for="invoice-from-country" class="sr-only">
						{$t('form.invoice-from.country')}
					</label>
					<input
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
				type="text"
				name="invoice-number"
				id="invoice-number"
				class="rounded-md mt-2"
				placeholder={$t('form.invoice-number')}
				autocomplete="country-name"
			/>
		</div>
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
				<div>
					<label for="item-description" class="sr-only">
						{$t('form.service-item.description')}
					</label>
					<input
						type="text"
						name="item-description"
						id="item-description"
						class="rounded-md"
						placeholder={$t(
							'form.service-item.description'
						)}
					/>
				</div>
				<!-- TODO: work on it -->
				<div class="mt-0.5 sm:hidden">
					12.0 hours at $75.00
				</div>
			</td>
			<td
				class="hidden py-4 px-3 text-right text-xs sm:table-cell"
			>
				<div class="flex flex-col items-end">
					<label for="item-quantity" class="sr-only">
						{$t('form.service-item.quantity')}
					</label>
					<input
						type="number"
						name="item-quantity"
						id="item-quantity"
						class="rounded-md max-w-[100px] text-right"
						placeholder={$t('form.service-item.quantity')}
						min="0"
					/>
				</div>
			</td>
			<td
				class="hidden py-4 px-3 text-right text-xs sm:table-cell"
			>
				<div class="flex flex-col items-end">
					<label for="item-unit-price" class="sr-only">
						{$t('form.service-item.unit-price')}
					</label>
					<div class="relative rounded-md shadow-sm">
						<div
							class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
						>
							<span class="text-gray-500 sm:text-sm">$</span
							>
						</div>
						<input
							type="number"
							name="item-unit-price"
							id="item-unit-price"
							class="rounded-md max-w-[100px] text-right pl-7"
							placeholder={$t(
								'form.service-item.unit-price'
							)}
							min="0"
							aria-describedby="price-currency"
						/>
					</div>
				</div>
			</td>
			<!-- TODO: auto calculate -->
			<td
				class="py-4 pl-3 pr-4 text-right text-xs sm:pr-6 md:pr-0"
			>
				$900.00
			</td>
		</tr>
	</svelte:fragment>

	<svelte:fragment slot="subtotal">
		<!-- TODO: auto calculate -->
		$3,900.00
	</svelte:fragment>

	<svelte:fragment slot="adjustments">
		<div class="flex flex-col items-end">
			<label for="item-adjustments" class="sr-only">
				{$t('form.service-item.adjustments')}
			</label>
			<div class="relative mt-1 rounded-md shadow-sm">
				<div
					class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
				>
					<span class="text-gray-500 sm:text-sm">$</span>
				</div>
				<input
					type="number"
					name="item-adjustments"
					id="item-adjustments"
					class="rounded-md max-w-[100px] text-right pl-7"
					placeholder={$t('form.service-item.adjustments')}
					min="0"
					aria-describedby="price-currency"
				/>
			</div>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="total">
		<!-- TODO: auto calculate	 -->
		$4,485.00
	</svelte:fragment>

	<svelte:fragment slot="note">
		<div>
			<label for="item-note" class="sr-only">
				{$t('form.service-item.note')}
			</label>
			<div class="mt-2">
				<textarea
					rows="2"
					name="item-note"
					id="item-note"
					class="rounded-md"
					placeholder={$t('form.service-item.note')}
				/>
			</div>
		</div>
	</svelte:fragment>

	<section class="text-center mt-8">
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
