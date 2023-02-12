import { openDB, type DBSchema } from 'idb';
import type { InvoiceDataType } from '$lib/types';

export interface IndexedDBSchemaType extends DBSchema {
	invoiceData: {
		value: InvoiceDataType;
		key: string;
	};
}

export async function initIndexDB() {
	if (!('indexedDB' in window)) {
		console.warn('IndexedDB not supported!');
		return;
	}

	const db = await openDB<IndexedDBSchemaType>('invoice-data-db', 1, {
		upgrade(db) {
			db.createObjectStore('invoiceData');
		}
	});

	return db;
}
