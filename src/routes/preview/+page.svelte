<script lang="ts">
	import UploadIcon from '$lib/assets/upload-icon.svg';
	import { t } from '$lib/i18n';
</script>

<svelte:head>
	<title>{$t('page-title.preview')}</title>
	<meta
		name="description"
		content={$t('page-meta.description.preview')}
	/>
</svelte:head>

<div class="px-4 sm:px-6">
	<div
		class="mx-auto mt-6 max-w-2xl rounded-lg bg-white dark:bg-gray-800 p-4 text-gray-500 dark:text-gray-400 shadow-lg sm:p-6"
	>
		<header class="flex justify-between">
			<section class="text-xs">
				<p class="mb-1 text-xl font-semibold">
					shamscorner.com
				</p>
				<p>Shamim Hossain</p>
				<p>Rajshahi, 6560</p>
				<p>Bangladesh</p>
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
				<h2 class="text-lg font-semibold text-pink-500">
					{$t('submitted-on', { date: '1/30/2023' })}
				</h2>

				<div
					class="mt-3 grid grid-cols-1 xs:grid-cols-3 gap-4 text-xs"
				>
					<div class="space-y-1">
						<h3
							class="mb-1 text-base font-semibold text-gray-600 dark:text-gray-300"
						>
							{$t('invoice-for')}
						</h3>
						<p>Apple Inc.</p>
						<p>Cupertino, CA</p>
						<p>94024</p>
						<p>United States</p>
					</div>

					<div class="space-y-1">
						<h3
							class="mb-1 text-base font-semibold text-gray-600 dark:text-gray-300"
						>
							{$t('invoice-from')}
						</h3>
						<p>Shamim Hossain</p>
						<p>Sapahar, Naogaon</p>
						<p>Rajshahi, 6560</p>
						<p>Bangladesh</p>
					</div>

					<div>
						<div>
							<h3
								class="mb-1 text-base font-semibold text-gray-600 dark:text-gray-300"
							>
								{$t('invoice')} #
							</h3>
							<p>SK-2023014</p>
						</div>
						<div class="mt-4">
							<h3
								class="mb-1 text-base font-semibold text-gray-600 dark:text-gray-300"
							>
								{$t('due-date')}
							</h3>
							<p>2/3/2023</p>
						</div>
					</div>
				</div>
			</section>

			<hr class="my-5 dark:border-gray-600" />

			<section>
				<p
					class="mt-2 text-sm text-gray-700 dark:text-gray-300"
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
							<tr
								class="border-b border-gray-200 dark:border-gray-600"
							>
								<td
									class="py-4 pl-4 pr-3 text-xs sm:pl-6 md:pl-0"
								>
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

							<!-- More descriptions... -->
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
									$3,900.00
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
									$585.00
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
									$4,485.00
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
			<p class="mt-1 text-xs text-gray-400">
				The Toggl Track software is used to record the work
				hours & can be sent if necessary. With this, I
				confirm that all the information mentioned above is
				correct & validated.
			</p>
		</footer>
	</div>
</div>
