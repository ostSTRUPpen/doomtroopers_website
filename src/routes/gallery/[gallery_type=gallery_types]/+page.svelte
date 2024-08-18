<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { gallery_pages } from '$lib/data/static_data';
	const data = gallery_pages.filter((p) => p.type === $page.params.gallery_type);
</script>

{#if data}
	<table>
		<thead>
			<tr>
				<th> Název </th>
				<th> Datum </th>
			</tr>
		</thead>
		<tbody>
			{#each data as d}
				<a href="{base}/"
					><tr>
						<td>
							{d.title}
						</td>
						<td>
							{d.date}
						</td>
					</tr>
				</a>
			{/each}
		</tbody>
	</table>
{/if}
