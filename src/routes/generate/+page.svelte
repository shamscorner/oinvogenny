<script lang="ts">
	import InvoiceSkeleton from '$lib/components/InvoiceSkeleton.svelte';
	import LinkPrimary from '$lib/components/links/LinkPrimary.svelte';
	import CurrencyValueInput from '$lib/components/inputs/CurrencyValueInput.svelte';
	import Icon from '@iconify/svelte';
	import { arrayBufferToFile, scrollToTop, uploadFile } from '$lib/helpers';
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';
	import { initIndexDB, type IndexedDBSchemaType } from '$lib/indexDB';
	import type { IDBPDatabase } from 'idb';
	import { InvoiceDataIdxDBKey, CompanyAvatarIdxDBKey } from '$lib/constants';
	import {
		invoiceData,
		invoiceItemsTotal,
		invoiceItemsSubTotal,
		companyAvatar,
		resetInvoiceData
	} from '$lib/store';
	import UploadIcon from '$lib/assets/upload-icon.svg';
	import ModalConfirm from '$lib/components/ModalConfirm.svelte';
	import ButtonSecondary from '$lib/components/buttons/ButtonSecondary.svelte';

	let idxDB: IDBPDatabase<IndexedDBSchemaType> | undefined;
	let companyLogoInput: HTMLInputElement;
	let confirmModal: ModalConfirm;

	onMount(async () => {
		scrollToTop();
		idxDB = await initIndexDB();
	});

	$: {
		let timer;
		(() => {
			clearTimeout(timer);
			timer = setTimeout(async () => {
				if (!idxDB) return;

				const idxDBTransaction = idxDB.transaction('invoiceData', 'readwrite');
				idxDBTransaction.store.put($invoiceData, InvoiceDataIdxDBKey);
			}, 3000);
		})();
	}

	async function addNewItem() {
		if ($invoiceData.items.length > 4) return;

		$invoiceData.items = [
			...$invoiceData.items,
			{
				description: '',
				quantity: '',
				unitPrice: ''
			}
		];
	}

	function removeItem(idx: number) {
		$invoiceData.items = $invoiceData.items.filter(
			(_, itemIdx) => itemIdx !== idx
		);

		if (!$invoiceData.items.length) {
			addNewItem();
		}
	}

	function saveCompanyAvatar({
		avatar,
		type
	}: {
		avatar: ArrayBuffer | string;
		type: string;
	}) {
		if (!idxDB) return;
		const idxDBTransaction = idxDB.transaction('companyAvatar', 'readwrite');
		idxDBTransaction.store.put(
			{
				avatar,
				type
			},
			CompanyAvatarIdxDBKey
		);
	}

	function uploadCompanyLogo(event: Event) {
		uploadFile(event, (e, fileType) => {
			if (!e.target) return;
			if (!e.target.result) return;
			if (!idxDB) return;

			const logoResult = e.target.result;

			$companyAvatar = {
				avatar: arrayBufferToFile(logoResult, fileType),
				type: fileType
			};

			saveCompanyAvatar({
				avatar: logoResult,
				type: fileType
			});
		});
	}

	function clearFormData() {
		scrollToTop();
		resetInvoiceData();
		saveCompanyAvatar({ avatar: '', type: '' });
	}
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
						bind:value={$invoiceData.yourCompanyInfo.companyName}
						type="text"
						name="company-name"
						id="company-name"
						class="rounded-none rounded-t-md font-semibold"
						placeholder={$t('form.your-company-name')}
						autocomplete="organization"
					/>
				</div>
				<div>
					<label for="your-name" class="sr-only">
						{$t('form.your-name')}
					</label>
					<input
						bind:value={$invoiceData.yourCompanyInfo.name}
						type="text"
						name="your-name"
						id="your-name"
						placeholder={$t('form.your-name')}
						autocomplete="name"
					/>
				</div>
				<div class="flex -space-x-px">
					<div class="w-1/2 min-w-0 flex-1">
						<label for="company-city" class="sr-only">
							{$t('form.your-company-city.sr-only')}
						</label>
						<input
							bind:value={$invoiceData.yourCompanyInfo.city}
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
							bind:value={$invoiceData.yourCompanyInfo.postalCode}
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
						bind:value={$invoiceData.yourCompanyInfo.country}
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

	<svelte:fragment slot="company-logo">
		<div class="flex-shrink-0">
			<label for="company-logo" class="sr-only">
				{$t('upload-logo')}
			</label>
			<button
				type="button"
				class="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-gray-800"
				on:click={() => {
					companyLogoInput.click();
				}}
			>
				{#if $companyAvatar.avatar}
					<img
						src={$companyAvatar.avatar}
						alt={$t('company-logo')}
						width="96"
						height="96"
						class="h-24 w-24 rounded-full object-cover"
					/>
				{:else}
					<img
						src={UploadIcon}
						alt={$t('upload-logo')}
						width="96"
						height="96"
					/>
				{/if}
			</button>
			<input
				bind:this={companyLogoInput}
				type="file"
				name="company-logo"
				id="company-logo"
				accept="image/*"
				style="display:none"
				on:change={(e) => uploadCompanyLogo(e)}
			/>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="submitted-on">
		<div class="flex items-center gap-4">
			<label
				for="submitted-on"
				class="flex-shrink-0 text-lg font-semibold text-pink-500"
			>
				{$t('submitted-on', { date: '' })}
			</label>
			<input
				bind:value={$invoiceData.submittedOn}
				type="date"
				name="submitted-on"
				id="submitted-on"
				class="max-w-[180px] rounded-md"
			/>
		</div>
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
						bind:value={$invoiceData.invoiceFor.name}
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
						bind:value={$invoiceData.invoiceFor.address}
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
						bind:value={$invoiceData.invoiceFor.postalCode}
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
						bind:value={$invoiceData.invoiceFor.country}
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
						bind:value={$invoiceData.invoiceFrom.name}
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
						bind:value={$invoiceData.invoiceFrom.address}
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
						bind:value={$invoiceData.invoiceFrom.postalCode}
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
						bind:value={$invoiceData.invoiceFrom.country}
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
				bind:value={$invoiceData.invoiceNumber}
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
		<div>
			<label for="due-date" class="sr-only">
				{$t('due-date')}
			</label>
			<input
				bind:value={$invoiceData.dueDate}
				type="date"
				name="due-date"
				id="due-date"
				class="rounded-md"
			/>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="work-date-for">
		<div class="flex flex-col items-center gap-4 sm:flex-row">
			<p class="text-sm text-gray-500 dark:text-gray-300">
				{$t('work-for-date')}
			</p>

			<div>
				<label for="work-from-date" class="sr-only">
					{$t('date-from')}
				</label>
				<input
					bind:value={$invoiceData.workDateInterval.fromDate}
					type="date"
					name="work-from-date"
					id="work-from-date"
					class="max-w-[180px] rounded-md"
				/>
			</div>

			<div>-</div>

			<div>
				<label for="work-to-date" class="sr-only">
					{$t('date-to')}
				</label>
				<input
					bind:value={$invoiceData.workDateInterval.toDate}
					type="date"
					name="work-to-date"
					id="work-to-date"
					class="max-w-[180px] rounded-md"
				/>
			</div>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="table-row">
		{#each $invoiceData.items as item, itemIdx (itemIdx)}
			<tr class="border-b border-gray-200 dark:border-gray-600">
				<td class="relative py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
					<div>
						<label for="item-description" class="sr-only">
							{$t('form.service-item.description')}
						</label>
						<input
							bind:value={item.description}
							type="text"
							name="item-description"
							id="item-description"
							class="min-w-[200px] rounded-md text-sm sm:min-w-[220px] md:min-w-[280px]"
							placeholder={$t('form.service-item.description')}
						/>
						<button
							class="absolute right-0 top-6 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 font-semibold text-white transition-colors hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:bg-amber-700 dark:focus-visible:ring-amber-700 dark:focus-visible:ring-offset-gray-800"
							on:click={() => removeItem(itemIdx)}
						>
							-
						</button>
					</div>
					<!-- small screen only -->
					<div class="mt-4 flex gap-4 sm:hidden">
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
					</div>

					{#if itemIdx === $invoiceData.items.length - 1}
						<button
							class="absolute -bottom-10 flex h-7 w-7 items-center justify-center rounded-full bg-pink-500 font-semibold text-white transition-colors hover:bg-pink-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 "
							on:click={() => addNewItem()}
						>
							+
						</button>
					{/if}
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
				<td
					class="py-4 pl-3 pr-4 text-right align-bottom text-sm sm:pr-6 sm:align-middle md:pr-0"
				>
					${(+item.quantity * +item.unitPrice).toFixed(2)}
				</td>
			</tr>
		{/each}
	</svelte:fragment>

	<svelte:fragment slot="subtotal">
		${$invoiceItemsSubTotal.toFixed(2)}
	</svelte:fragment>

	<svelte:fragment slot="adjustments">
		<div class="flex items-center justify-end">
			<span class="mr-4 font-bold">-</span>
			<CurrencyValueInput
				bind:value={$invoiceData.adjustments}
				name="item-adjustments"
				id="item-adjustments"
				placeholder={$t('form.service-item.adjustments')}
				classes="flex flex-col items-end"
			>
				<svelte:fragment slot="label">
					{$t('form.service-item.adjustments')}
				</svelte:fragment>
			</CurrencyValueInput>
		</div>
	</svelte:fragment>

	<svelte:fragment slot="total">
		${$invoiceItemsTotal.toFixed(2)}
	</svelte:fragment>

	<svelte:fragment slot="note">
		<div>
			<label for="item-note" class="sr-only">
				{$t('form.service-item.note')}
			</label>
			<div class="mt-2">
				<textarea
					bind:value={$invoiceData.note}
					rows="4"
					name="item-note"
					id="item-note"
					class="rounded-md text-sm"
					placeholder={$t('form.service-item.note')}
				/>
			</div>
		</div>
	</svelte:fragment>

	<section class="mt-8 flex flex-row-reverse justify-center gap-4 text-center">
		<LinkPrimary href="/preview">
			{$t('preview')}
			<Icon
				icon="mdi:chevron-double-right"
				width="20"
				height="20"
				aria-hidden="true"
				class="ml-1"
			/>
		</LinkPrimary>
		<ButtonSecondary on:click={confirmModal.toggle}>
			<Icon
				icon="mdi:delete-forever-outline"
				width="20"
				height="20"
				aria-hidden="true"
				class="mr-1"
			/>
			{$t('clear')}
		</ButtonSecondary>
	</section>
</InvoiceSkeleton>

<ModalConfirm bind:this={confirmModal} on:confirm-clear={clearFormData} />
