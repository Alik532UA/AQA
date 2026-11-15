<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import ErrorFallback from '#lib/components/ErrorFallback.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>AQA Interview Dashboard & Cheat Sheet</title>
</svelte:head>

<svelte:boundary>
	{@render children()}
	{#snippet failed(error, reset)}
		<ErrorFallback {error} {reset} />
	{/snippet}
</svelte:boundary>
