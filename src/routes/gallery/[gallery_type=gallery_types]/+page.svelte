<script lang="ts">
	import { page } from '$app/stores';
	export let data;

	let { matchingPages } = data;

	$: ({ matchingPages } = data);
</script>

<!-- Výraznější formátování pro akce z aktuálního roku?-->
{#if data}
	<table>
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
				<tr>
					<!-- <a href="/gallery/{d.type}/{d.page_name}"> -->
					<td>
						<a href="/gallery/{d.type}/{d.page_name}">{d.title}</a>
					</td>
					{#if $page.params.gallery_type === 'all'}
						<td>
							<a href="/gallery/{d.type}">{d.type}</a>
						</td>
					{/if}
					<td>
						<!-- TODO not ideal ale tvl co s tím mám asi dělat, kazí to formátování tabulky...-->
						<a href="/gallery/{d.type}/{d.page_name}">{d.display_date}</a>
					</td>
					<!-- </a> -->
				</tr>
			{/each}
		</tbody>
	</table>
{/if}
