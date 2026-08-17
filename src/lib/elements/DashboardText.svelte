<!--
	Element zajišťující zobrazení dat na nástěnce
	Soubor: DashboardText.svelte
-->

<script lang="ts">
	/**
	 * header: Nadpis sady záznamu
	 * texts: Texty pro konkrétní záznamy
	 */
	let { header, texts } = $props<{ header: string; texts: dashboardTextsData[] }>();
</script>

<div>
	{#if header !== ''}
		<h3 class="text-secondary pb-2 text-left text-2xl">{header}</h3>
	{/if}
	<div>
		{#each texts as text (text)}
			<article class="rounded-box bg-base-200 mb-4 pb-1 pl-2">
				<h4 class="pb-0.5 pl-1 text-xl">
					{text.heading}
					<span class="whitespace-nowrap">{text.display_date}</span>
				</h4>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -- Důvěryhodný HTML obsah z lokálních dashboard dat. -->
				<p class="pl-3">{@html text.main_text}</p>
			</article>
			<br />
		{/each}
	</div>
</div>

<!-- Konec souboru DashboardText.svelte -->
