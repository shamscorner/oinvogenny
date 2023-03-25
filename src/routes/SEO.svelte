<script lang="ts">
	import { setSeo } from '$lib/stores/SeoStore';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { onMount } from 'svelte';

	export let title: string = $LL.pageSpecifics.title();
	export let description: string = $LL.pageSpecifics.description();

	onMount(() => {
		setSeo({
			title: title || $LL.pageSpecifics.title(),
			description: description || $LL.pageSpecifics.description()
		});
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta name="keywords" content={$LL.pageSpecifics.keywords()} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta
		property="og:url"
		content="https://oinvogenny.shamscorner.com/generate"
	/>

	<meta
		property="twitter:url"
		content="https://oinvogenny.shamscorner.com/generate"
	/>
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />

	<meta
		data-n-head="1"
		data-hid="og:type"
		property="og:type"
		content="website"
	/>
	<meta
		data-n-head="1"
		data-hid="og:url"
		property="og:url"
		content="https://oinvogenny.shamscorner.com/generate"
	/>
	<meta
		data-n-head="1"
		data-hid="og:title"
		property="og:title"
		content={title}
	/>
	<meta
		data-n-head="1"
		data-hid="og:description"
		property="og:description"
		content={description}
	/>

	<meta
		data-n-head="1"
		data-hid="twitter:url"
		name="twitter:url"
		content="https://oinvogenny.shamscorner.com/generate"
	/>
	<meta
		data-n-head="1"
		data-hid="twitter:title"
		name="twitter:title"
		content={title}
	/>
	<meta
		data-n-head="1"
		data-hid="twitter:description"
		name="twitter:description"
		content={description}
	/>

	<meta data-n-head="1" charset="utf-8" />
	<meta data-n-head="1" name="HandheldFriendly" content="True" />
	<meta data-n-head="1" property="og:site_name" content="oinvogenny" />
	<meta data-n-head="1" name="format-detection" content="telephone=no" />
	<meta data-n-head="1" property="og:image:width" content="1280" />
	<meta data-n-head="1" property="og:image:height" content="640" />
	<meta data-n-head="1" name="twitter:site" content="@shamscorner" />
	<meta data-n-head="1" name="twitter:card" content="summary_large_image" />

	<link
		data-n-head="1"
		data-hid="canonical"
		rel="canonical"
		href="https://oinvogenny.shamscorner.com/generate"
	/>
</svelte:head>
