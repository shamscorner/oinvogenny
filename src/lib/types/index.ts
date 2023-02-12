export type InvoiceDataType = {
	yourCompanyInfo: {
		companyName: string;
		name: string;
		city: string;
		postalCode: string;
		country: string;
	};
	submittedOn: string;
	invoiceFor: {
		name: string;
		address: string;
		postalCode: string;
		country: string;
	};
	invoiceFrom: {
		name: string;
		address: string;
		postalCode: string;
		country: string;
	};
	invoiceNumber: string;
	dueDate: string;
	workDateInterval: {
		fromDate: string;
		toDate: string;
	};
	items: {
		description: string;
		quantity: string;
		unitPrice: string;
	}[];
	adjustments: string;
	note: string;
};
