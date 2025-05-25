<!--
	Zobrazení tabulky událostí konkrétního typu
	@file +page.svelte
-->

<script lang="ts">
	import { page } from '$app/state';
	import { getGalleryHeadersByType, getGalleryTypeDisplayName } from '$lib/data/static_data';

	let { data } = $props<{ matchingPages: GalleryTextsDataValue[]; currentYear: number }>();

	let { matchingPages, currentYear } = $derived<{
		matchingPages: GalleryTextsDataValue[];
		currentYear: number;
	}>(data);

	/** Funkce sloužící pro zvýraznění událostí z aktuálního roku
	 * 
	 * @param year Rok uložený v události
	 */
	function isFromCurrentYear(year: number): string {
		return year === currentYear ? 'bg-accent bg-opacity-25' : '';
	}
</script>

{#if data}
	<div class="ml-5 max-w-7xl rounded-box bg-base-200 px-2 py-2">
		<table class="table">
			<caption class="mb-5 text-xl sm:text-2xl md:text-4xl lg:text-5xl"
				>{getGalleryHeadersByType(page.params.gallery_type)}</caption
			>
			<thead>
				<tr>
					<th> Název </th>
					{#if page.params.gallery_type === 'all'}
						<th>Typ</th>
					{/if}
					<th> Datum </th>
				</tr>
			</thead>
			<tbody>
				{#each matchingPages as d}
					<tr
						class="hover:cursor-pointer hover:bg-base-300 {isFromCurrentYear(d.year)}"
						onclick={() => (window.location.href = `/gallery/${d.type}/${d.page_name}`)}
					>
						<td>
							{@html d.title}
						</td>
						{#if page.params.gallery_type === 'all'}
							<td>
								{getGalleryTypeDisplayName(d.type)}
							</td>
						{/if}
						<td>
							{@html d.display_date}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

<!-- Konec souboru +page.svelte -->