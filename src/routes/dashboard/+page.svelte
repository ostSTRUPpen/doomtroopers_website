<script lang="ts">
	import DashboardText from '$lib/elements/DashboardText.svelte';

	let { data } = $props<{
		h_events: dashboardTextsData[];
		u_events: dashboardTextsData[];
		o_events: dashboardTextsData[];
		other: dashboardTextsData[];
	}>();

	let { h_events, u_events, o_events, other } = $derived(data);
</script>

<div class="ml-5 h-fit max-w-7xl content-between rounded-lg bg-base-200 p-5">
	<h2 class="pb-5 text-center text-5xl font-extrabold text-primary">Nástěnka</h2>
	<p>
		Informace o námi organizovaných akcích. Popřípadě o akcích, kterých jsme se zúčastnili, ale
		ještě nemají stránku v galerii.
	</p>
	<br />
	{#if other.length > 0}
		<DashboardText header="" texts={other} />
	{/if}
	<br />
	{#if o_events.length > 0}
		<DashboardText header="Námi organizované akce" texts={o_events} />
	{/if}
	<br />
	{#if u_events.length > 0}
		<DashboardText
			header="Nadcházející akce, kterých se plánujeme zúčastnit"
			texts={u_events}
		/>
	{/if}
	<br />
	{#if h_events.length > 0}
		<DashboardText header="Již proběhlé akce" texts={h_events} />
	{/if}
</div>
