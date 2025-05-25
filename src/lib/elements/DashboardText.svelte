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

{#if header === ''}
	<div>
		{#each texts as text}
			<article class="mb-4 rounded-box bg-base-200 pb-1">
				<h4 class="pb-0.5 text-2xl">
					{@html text.heading}
					{@html text.display_date.replaceAll(' ', '&nbsp;')}
				</h4>
				<p class="pl-1">{@html text.main_text}</p>
			</article>
			<br />
		{/each}
	</div>
{:else}
	<div>
		<h3 class="pb-2 text-left text-2xl text-secondary">{header}</h3>
		<div>
			{#each texts as text}
				<article class="mb-4 rounded-box bg-base-200 pb-1 pl-2">
					<h4 class="pb-0.5 pl-1 text-xl">
						{@html text.heading}
						{@html text.display_date.replaceAll(' ', '&nbsp;')}
					</h4>
					<p class="pl-3">{@html text.main_text}</p>
				</article>
				<br />
			{/each}
		</div>
	</div>
{/if}

<!-- Konec souboru DashboardText.svelte -->