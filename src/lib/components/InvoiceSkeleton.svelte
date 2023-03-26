<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';

	export let isNoteAvailable = true;
</script>

<div class="px-4 print:overflow-x-hidden print:px-0 sm:px-6">
	<div
		class="mx-auto mt-6 max-w-3xl rounded-lg bg-white p-4 text-gray-500 shadow-lg dark:bg-gray-800 dark:text-gray-400 print:mt-4 print:bg-white print:p-0 print:text-gray-500 print:shadow-none sm:p-6"
	>
		<header
			class="flex flex-col-reverse justify-between gap-4 print:flex-row sm:flex-row"
		>
			<section class="text-xs">
				<slot name="company-info" />
			</section>

			<section
				class="grid h-24 w-24 place-items-center self-center rounded-full bg-gray-100 dark:bg-gray-700"
			>
				<slot name="company-logo" />
			</section>
		</header>

		<main class="mt-3">
			<section>
				<h1 class="text-3xl font-bold text-blue-500">
					{$LL.common.invoice()}
				</h1>
				<slot name="submitted-on" />

				<div
					class="mt-3 grid grid-cols-2 gap-4 text-xs print:grid-cols-3 sm:grid-cols-3"
				>
					<div class="space-y-1">
						<h2
							class="mb-1 text-base font-semibold text-gray-600 dark:text-gray-300"
						>
							{$LL.common.invoiceFor()}
						</h2>
						<slot name="invoice-for" />
					</div>

					<div class="space-y-1">
						<h2
							class="mb-1 text-base font-semibold text-gray-600 dark:text-gray-300"
						>
							{$LL.common.invoiceFrom()}
						</h2>
						<slot name="invoice-from" />
					</div>

					<div>
						<div>
							<h2
								class="mb-1 text-base font-semibold text-gray-600 dark:text-gray-300"
							>
								{$LL.common.invoice()} #
							</h2>
							<slot name="invoice-number" />
						</div>
						<div class="mt-4">
							<h2
								class="mb-1 text-base font-semibold text-gray-600 dark:text-gray-300"
							>
								{$LL.common.dueDate()}
							</h2>
							<slot name="due-date" />
						</div>
					</div>
				</div>
			</section>

			<hr class="my-5 dark:border-gray-600" />

			<section>
				<div class="flex flex-wrap justify-between gap-6">
					<slot name="work-date-for" />

					<slot name="currency-symbol" />
				</div>

				<div class="-mx-4 mt-4 flex flex-col sm:-mx-6 md:mx-0">
					<table
						class="min-w-full divide-y divide-gray-300 dark:divide-gray-600"
					>
						<thead>
							<tr>
								<th
									scope="col"
									class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-blue-500 sm:pl-6 md:pl-0"
								>
									{$LL.invoicesTable.head.description()}
								</th>
								<th
									scope="col"
									class="hidden py-3.5 px-3 text-right text-sm font-semibold text-blue-500 print:table-cell sm:table-cell"
								>
									{$LL.invoicesTable.head.qty({
										quantity: $LL.common.hours()
									})}
								</th>
								<th
									scope="col"
									class="hidden py-3.5 px-3 text-right text-sm font-semibold text-blue-500 print:table-cell sm:table-cell"
								>
									{$LL.invoicesTable.head.unitPrice({
										unit: $LL.common.perHour()
									})}
								</th>
								<th
									scope="col"
									class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-blue-500 sm:pr-6 md:pr-0"
								>
									{$LL.invoicesTable.head.totalPrice()}
								</th>
							</tr>
						</thead>
						<tbody>
							<slot name="table-row" />
						</tbody>
						<tfoot>
							<tr>
								<th
									scope="row"
									colspan="3"
									class="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal print:table-cell sm:table-cell md:pl-0"
								>
									{$LL.invoicesTable.body.subtotal()}
								</th>
								<th
									scope="row"
									class="pl-4 pr-3 pt-14 text-left text-sm font-normal print:hidden sm:hidden"
								>
									{$LL.invoicesTable.body.subtotal()}
								</th>
								<td
									class="pl-3 pr-4 pt-14 text-right text-sm print:pt-4 sm:pt-4 sm:pr-6 md:pr-0"
								>
									<slot name="subtotal" />
								</td>
							</tr>
							<tr>
								<th
									scope="row"
									colspan="3"
									class="hidden pl-6 pr-3 pt-2 text-right text-sm font-normal print:table-cell sm:table-cell md:pl-0"
								>
									{$LL.invoicesTable.body.adjustments()}
								</th>
								<th
									scope="row"
									class="pl-4 pr-3 pt-2 text-left text-sm font-normal print:hidden sm:hidden"
								>
									{$LL.invoicesTable.body.adjustments()}
								</th>
								<td class="pl-3 pr-4 pt-2 text-right text-sm sm:pr-6 md:pr-0">
									<slot name="adjustments" />
								</td>
							</tr>
							<tr>
								<th
									scope="row"
									colspan="3"
									class="hidden pl-6 pr-3 pt-2 text-right text-sm font-semibold text-gray-900 dark:text-gray-300 print:table-cell sm:table-cell md:pl-0"
								>
									{$LL.invoicesTable.body.total()}
								</th>
								<th
									scope="row"
									class="pl-4 pr-3 pt-2 text-left text-sm font-semibold text-gray-900 dark:text-gray-300 print:hidden sm:hidden"
								>
									{$LL.invoicesTable.body.total()}
								</th>
								<td
									class="pl-3 pr-4 pt-2 text-right text-base font-semibold text-pink-400 sm:pr-6 md:pr-0"
								>
									<slot name="total" />
								</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</section>
		</main>

		<footer class="mt-4">
			{#if isNoteAvailable}
				<h2 class="text-sm text-gray-500 dark:text-gray-300">
					{$LL.common.note()}:
				</h2>
				<slot name="note" />
			{/if}
		</footer>
	</div>

	<slot />
</div>
