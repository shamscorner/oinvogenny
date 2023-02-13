import { writable } from 'svelte/store';
import type { InvoiceDataType } from '$lib/types';

export const invoiceData = writable<InvoiceDataType>({
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
});
