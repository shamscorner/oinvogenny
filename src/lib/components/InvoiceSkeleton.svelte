<script lang="ts">
	import UploadIcon from '$lib/assets/upload-icon.svg';
	import { t } from '$lib/i18n';
</script>

<div class="px-4 sm:px-6 print:px-0">
	<div
		class="mx-auto mt-6 max-w-2xl rounded-lg bg-white p-4 text-gray-500 shadow-lg dark:bg-gray-800 dark:text-gray-400 sm:p-6 print:shadow-none print:bg-white print:text-gray-500"
	>
		<header class="flex justify-between">
			<section class="text-xs">
				<slot name="company-info" />
			</section>

			<section
				class="grid h-24 w-24 place-items-center rounded-full bg-gray-100 dark:bg-gray-700"
			>
				<img
					src={UploadIcon}
					alt={$t('upload-logo')}
					width="96"
					height="96"
				/>
			</section>
		</header>

		<main class="mt-3">
			<section>
				<h1 class="text-3xl font-bold text-blue-500">
					{$t('invoice')}
				</h1>
				<slot name="submitted-on" />

				<div
					class="mt-3 grid grid-cols-1 gap-4 text-xs xs:grid-cols-3"
				>
					<div class="space-y-1">
						<h3
							class="mb-1 text-base font-semibold text-gray-600 dark:text-gray-300"
						>
							{$t('invoice-for')}
						</h3>
						<slot name="invoice-for" />
					</div>

					<div class="space-y-1">
						<h3
							class="mb-1 text-base font-semibold text-gray-600 dark:text-gray-300"
						>
							{$t('invoice-from')}
						</h3>
						<slot name="invoice-from" />
					</div>

					<div>
						<div>
							<h3
								class="mb-1 text-base font-semibold text-gray-600 dark:text-gray-300"
							>
								{$t('invoice')} #
							</h3>
							<slot name="invoice-number" />
						</div>
						<div class="mt-4">
							<h3
								class="mb-1 text-base font-semibold text-gray-600 dark:text-gray-300"
							>
								{$t('due-date')}
							</h3>
							<slot name="due-date" />
						</div>
					</div>
				</div>
			</section>

			<hr class="my-5 dark:border-gray-600" />

			<section>
				<slot name="work-date-for" />

				<div
					class="-mx-4 mt-4 flex flex-col sm:-mx-6 md:mx-0"
				>
					<table
						class="min-w-full divide-y divide-gray-300 dark:divide-gray-600"
					>
						<thead>
							<tr>
								<th
									scope="col"
									class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-blue-500 sm:pl-6 md:pl-0"
								>
									{$t('table.head.description')}
								</th>
								<th
									scope="col"
									class="hidden py-3.5 px-3 text-right text-sm font-semibold text-blue-500 sm:table-cell"
								>
									{$t('table.head.qty', {
										quantity: 'hours'
									})}
								</th>
								<th
									scope="col"
									class="hidden py-3.5 px-3 text-right text-sm font-semibold text-blue-500 sm:table-cell"
								>
									{$t('table.head.unit-price', {
										unit: 'hr'
									})}
								</th>
								<th
									scope="col"
									class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-blue-500 sm:pr-6 md:pr-0"
								>
									{$t('table.head.total-price')}
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
									class="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal sm:table-cell md:pl-0"
								>
									{$t('table.body.subtotal')}
								</th>
								<th
									scope="row"
									class="pl-4 pr-3 pt-4 text-left text-sm font-normal sm:hidden"
								>
									{$t('table.body.subtotal')}
								</th>
								<td
									class="pl-3 pr-4 pt-4 text-right text-sm sm:pr-6 md:pr-0"
								>
									<slot name="subtotal" />
								</td>
							</tr>
							<tr>
								<th
									scope="row"
									colspan="3"
									class="hidden pl-6 pr-3 pt-2 text-right text-sm font-normal sm:table-cell md:pl-0"
								>
									{$t('table.body.adjustments')}
								</th>
								<th
									scope="row"
									class="pl-4 pr-3 pt-2 text-left text-sm font-normal sm:hidden"
								>
									{$t('table.body.adjustments')}
								</th>
								<td
									class="pl-3 pr-4 pt-2 text-right text-sm sm:pr-6 md:pr-0"
								>
									<slot name="adjustments" />
								</td>
							</tr>
							<tr>
								<th
									scope="row"
									colspan="3"
									class="hidden pl-6 pr-3 pt-2 text-right text-sm font-semibold text-gray-900 dark:text-gray-300 sm:table-cell md:pl-0"
								>
									{$t('table.body.total')}
								</th>
								<th
									scope="row"
									class="pl-4 pr-3 pt-2 text-left text-sm font-semibold text-gray-900 dark:text-gray-300 sm:hidden"
								>
									{$t('table.body.total')}
								</th>
								<td
									class="pl-3 pr-4 pt-2 text-right text-base font-semibold text-pink-500 sm:pr-6 md:pr-0"
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
			<h3 class="text-sm text-gray-500 dark:text-gray-300">
				{$t('note')}:
			</h3>
			<slot name="note" />
		</footer>
	</div>

	<slot />
</div>
