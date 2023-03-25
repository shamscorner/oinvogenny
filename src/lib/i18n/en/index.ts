import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
	common: {
		generate: 'Generate',
		preview: 'Preview',
		changeTheme: 'Change Theme',
		uploadLogo: 'Upload Logo',
		companyLogo: 'Company logo',
		invoice: 'Invoice',
		submittedOn: 'Submitted on {{date:string}}',
		invoiceFor: 'Invoice for',
		invoiceFrom: 'Invoice from',
		dueDate: 'Due date',
		note: 'Note',
		workForDate: 'Work completed for',
		dateFrom: 'Date from',
		dateTo: 'Date to',
		print: 'Print',
		edit: 'Edit',
		hours: 'hours',
		perHour: 'hr',
		clear: 'Clear',
		ok: 'Ok',
		close: 'Close',
		areYouSure: 'Are you sure?'
	},

	pageSpecifics: {
		generator: {
			title: 'Generate Invoice',
			meta: {
				description:
					'Generate & print invoices according to the specified work log & unit.'
			}
		},
		preview: {
			title: 'Preview Invoice',
			meta: {
				description:
					'Preview the invoice that you configured on the generate page'
			}
		}
	},

	invoicesTable: {
		head: {
			description: 'Description',
			qty: 'Qty ({quantity:string})',
			unitPrice: 'Unit Price (/{unit:string})',
			totalPrice: 'Total Price'
		},
		body: {
			subtotal: 'Subtotal',
			adjustments: 'Adjustments',
			total: 'Total',
			quantityAtPrice: '{quantity:string} hours at ${unitPrice:string}'
		}
	},

	invoiceForm: {
		yourName: 'Your name',
		invoiceNumber: 'SK-2023014',
		yourCompany: {
			info: 'Your company information',
			name: 'Your company name',
			city: 'City',
			postalCode: 'Postal Code',
			country: 'Country',
			srOnly: {
				city: 'Your company city',
				postalCode: 'Your company Postal Code',
				country: 'Your country of origin'
			}
		},
		toAddress: {
			title: 'Where would you send this invoice?',
			name: 'Name/Company',
			address: 'Address',
			postalCode: 'Postal Code',
			country: 'Country'
		},
		fromAddress: {
			title: 'Where is the invoice originated from?',
			name: 'Name/Company',
			address: 'Address',
			postalCode: 'Postal Code',
			country: 'Country'
		},
		serviceItem: {
			description: 'Landing page design',
			quantity: '40.0',
			unitPrice: '55.00',
			adjustments: '0.00',
			note: 'Specialized software is used to record the work hours & can be sent if necessary. With this, I confirm that all the information mentioned above is correct & validated.'
		},
		srOnly: {
			invoiceNumber: 'Invoice Number'
		}
	},

	printCustomizationNote:
		'You can change the margin, scale/zoom, paper size, headers & footers, etc., on the print dialog. So feel free to customize it according to your needs.'
};

export default en;
