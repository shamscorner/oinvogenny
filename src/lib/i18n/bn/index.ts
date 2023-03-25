import type { Translation } from '../i18n-types';

const bn: Translation = {
	common: {
		generate: 'তৈরি করুন',
		preview: 'প্রিভিউ',
		changeTheme: 'থিম পরিবর্তন করুন',
		uploadLogo: 'লোগো আপলোড করুন',
		companyLogo: 'কোম্পানি লোগো',
		invoice: 'চালান',
		submittedOn: '{date} তারিখে জমা হয়েছে',
		invoiceFor: 'চালান জন্য',
		invoiceFrom: 'চালান থেকে',
		dueDate: 'নির্দিষ্ট তারিখ',
		note: 'নোট',
		workForDate: 'কাজ সম্পন্ন হয়েছে',
		dateFrom: 'তারিখ থেকে',
		dateTo: 'তারিখ পর্যন্ত',
		print: 'প্রিন্ট',
		edit: 'সম্পাদন করুন',
		hours: 'ঘন্টা',
		perHour: 'ঘন্টা',
		clear: 'মুছুন',
		ok: 'ওকে',
		close: 'বন্ধ করুন',
		areYouSure: 'আপনি কি নিশ্চিত?'
	},

	pageSpecifics: {
		title:
			'ফ্রিল্যান্সার এবং দূরবর্তী কর্মীদের জন্য সিম্পল ওয়ান-ক্লিক চালান জেনারেটর',
		description:
			'ফ্রিল্যান্সারদের এবং দূরবর্তী কর্মীদের জন্য একটি খুব সহজ, পরিষ্কার, অসাধারণ দেখতে সুন্দর, ওপেন-সোর্স, ওয়ান-ক্লিক চালান জেনারেটর অ্যাপ্লিকেশন যা পেমেন্ট পরিচালনার জন্য ব্যবহার করা হয়। সমস্ত ডেটা ক্লায়েন্টের ব্রাউজারে সংরক্ষিত থাকে। কোনও কিছু কোথাও সংরক্ষিত না থাকা সুরক্ষিত এবং নিরাপদ।',
		keywords:
			'সিম্পল চালান জেনারেটর,পরিষ্কার চালান ব্যবস্থাপনা,ওপেন-সোর্স চালান টুল,একক ক্লিক চালান,ফ্রিল্যান্সার পেমেন্ট ব্যবস্থাপনা,দূরবর্তী কর্মী পেমেন্ট ব্যবস্থাপনা,নিরাপদ চালান জেনারেশন,সুরক্ষিত পেমেন্ট ব্যবস্থাপনা,ব্রাউজার ভিত্তিক চালান জেনারেশন,ক্লায়েন্ট সাইড চালান ডেটা',

		generator: {
			title: 'চালান তৈরি করুন',
			meta: {
				description:
					'নির্দিষ্ট কাজের লগ এবং একক অনুযায়ী চালান তৈরি এবং প্রিন্ট করুন।'
			}
		},
		preview: {
			title: 'চালান প্রিভিউ করুন',
			meta: {
				description: 'সেট করা চালান প্রিভিউ করুন যা আপনি তৈরি করেছেন'
			}
		}
	},

	invoicesTable: {
		head: {
			description: 'বিবরণ',
			qty: '{quantity}টি পরিমাণ',
			unitPrice: 'ইউনিট মূল্য (/{unit})',
			totalPrice: 'মোট মূল্য'
		},
		body: {
			subtotal: 'মোট দাম',
			adjustments: 'সংস্কারগুলি',
			total: 'মোট',
			quantityAtPrice: '${unitPrice} এ {quantity} ঘন্টা'
		}
	},

	invoiceForm: {
		yourName: 'আপনার নাম',
		invoiceNumber: 'SK-2023014',
		yourCompany: {
			info: 'আপনার কোম্পানির তথ্য',
			name: 'আপনার কোম্পানির নাম',
			city: 'শহর',
			postalCode: 'পোস্টাল কোড',
			country: 'দেশ',
			srOnly: {
				city: 'আপনার কোম্পানির শহর',
				postalCode: 'আপনার কোম্পানির পোস্টাল কোড',
				country: 'আপনার দেশ'
			}
		},
		toAddress: {
			title: 'আপনি কোথায় চালানটি পাঠাতে চান?',
			name: 'নাম / কোম্পানি',
			address: 'ঠিকানা',
			postalCode: 'পোস্টাল কোড',
			country: 'দেশ'
		},
		fromAddress: {
			title: 'চালান কোথা থেকে উৎপাদিত হয়েছে?',
			name: 'নাম / কোম্পানি',
			address: 'ঠিকানা',
			postalCode: 'পোস্টাল কোড',
			country: 'দেশ'
		},
		serviceItem: {
			description: 'ল্যান্ডিং পেজ ডিজাইন',
			quantity: '40.0',
			unitPrice: '৫৫.০০',
			adjustments: '০.০০',
			note: 'বিশেষজ্ঞ সফটওয়্যার ব্যবহার করে কর্ম ঘন্টা সময় রেকর্ড করা হয় এবং প্রয়োজন হলে পাঠানো যেতে পারে। এর সাথে, আমি নিশ্চিত করছি যে উপরে উল্লিখিত সমস্ত তথ্য সঠিক এবং বৈধ।'
		},
		srOnly: {
			invoiceNumber: 'চালান নাম্বার'
		}
	},

	printCustomizationNote:
		'প্রিন্ট ডায়ালগ বক্সে মার্জিন, স্কেল / জুম, পেপার সাইজ, হেডার এবং ফুটার ইত্যাদি পরিবর্তন করতে পারেন। আপনার প্রয়োজনগুলি অনুযায়ী কাস্টমাইজ করার জন্য স্বতন্ত্রভাবে ব্যবহার করুন।'
};

export default bn;
