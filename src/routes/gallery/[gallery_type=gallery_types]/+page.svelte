<script lang="ts">
	import { page } from '$app/stores';
	import { getGalleryHeadersByType, getGalleryTypeDisplayName } from '$lib/data/static_data';
	export let data;

	let { matchingPages, currentYear } = data;

	$: ({ matchingPages, currentYear } = data);

	function isFromCurrentYear(year: number) {
		return year === currentYear ? 'bg-accent bg-opacity-25' : '';
	}

</script>

{#if data}
	<div class="ml-5 max-w-7xl rounded-box bg-base-200 px-2 py-2">
		<table class="table">
			<caption class="mb-5 text-xl sm:text-2xl md:text-4xl lg:text-5xl"
				>{getGalleryHeadersByType($page.params.gallery_type)}</caption
			>
			<thead>
				<tr>
					<th> Název </th>
					{#if $page.params.gallery_type === 'all'}
						<th>Typ</th>
					{/if}
					<th> Datum </th>
				</tr>
			</thead>
			<tbody>
				{#each matchingPages as d}
					<tr
						class="hover:cursor-pointer hover:bg-base-300 {isFromCurrentYear(d.year)}"
						on:click={() => (window.location.href = `/gallery/${d.type}/${d.page_name}`)}
					>
						<td>
							{d.title}
						</td>
						{#if $page.params.gallery_type === 'all'}
							<td>
								{getGalleryTypeDisplayName(d.type)}
							</td>
						{/if}
						<td>
							{d.display_date}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
