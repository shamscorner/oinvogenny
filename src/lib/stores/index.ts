import { writable, derived } from 'svelte/store';
import type { InvoiceDataType } from '$lib/types';

const initialData: InvoiceDataType = {
	yourCompanyInfo: {
		companyName: '',
		name: '',
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
			description: '',
			quantity: '',
			unitPrice: ''
		}
	],
	adjustments: '',
	note: ''
};

export const invoiceData = writable<InvoiceDataType>(initialData);

export const companyAvatar = writable({
	avatar: '',
	type: ''
});

export const invoiceItemsSubTotal = derived(invoiceData, ($invoiceData) =>
	$invoiceData.items.reduce(
		(acc, item) => acc + +item.quantity * +item.unitPrice,
		0
	)
);

export const invoiceItemsTotal = derived(
	[invoiceData, invoiceItemsSubTotal],
	([$invoiceData, $subTotal]) => $subTotal - +$invoiceData.adjustments
);

export function resetInvoiceData() {
	invoiceData.set(initialData);
	companyAvatar.set({
		avatar: '',
		type: ''
	});
}
