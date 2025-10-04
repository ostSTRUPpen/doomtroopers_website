<!--
	Element pro zobrazení tématických okruhů dotazů
	Soubor: QaQTexts.svelte
-->

<script lang="ts">
	/**
	 * Dotazy spadající pod stejné téma
	 */
	let { dataSection } = $props<{ dataSection: qaaSection[] }>();
</script>

{#if dataSection.data.length > 0}
	<h4 class="pb-0.5 text-2xl">{@html dataSection.header}</h4>

	{#each dataSection.data as qaa}
		<div class="collapse-arrow rounded-box bg-base-300 collapse z-2 mb-4">
			<input type="checkbox" />
			<div class="collapse-title font-semibold">{@html qaa.q}</div>
			<div class="collapse-content text-sm">
				{@html qaa.a}
			</div>
		</div>
	{/each}
{/if}

<!-- Konec souboru QaQTexts.svelte -->
