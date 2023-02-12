<script lang="ts">
	export let value = '';
	export let id = '';
	export let name = '';
	export let placeholder = '';
	export let classes = '';
</script>

<div class={classes}>
	<label for={id} class="sr-only">
		<slot name="label" />
	</label>
	<div class="relative rounded-md shadow-sm">
		<div
			class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
		>
			<span class="text-gray-500 sm:text-sm">$</span>
		</div>
		<input
			bind:value
			type="number"
			{name}
			{id}
			class="rounded-md max-w-[100px] text-right pl-7"
			{placeholder}
			min="0"
			aria-describedby="price-currency"
		/>
	</div>
</div>
