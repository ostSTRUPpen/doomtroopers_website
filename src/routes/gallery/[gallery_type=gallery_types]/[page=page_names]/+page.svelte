<!--
	Zobrazení informací a galerie pro událost
	Soubor: +page.svelte
-->

<script lang="ts">
	import { page } from '$app/state';
	import Gallery from '$lib/elements/Gallery.svelte';

	let { data } = $props<{ pageData: GalleryTextsDataValue; pageImages: string[] }>();

	let { pageData, pageImages } = $derived(data);

	// Slouží pro explicitní znovu načtení stránky při změně galerie (brání pozůstatkům obrázků z předchozí galerie)
	let pageName = $derived(page.params.page);
</script>

{#if pageData}
	<div class="ml-5 max-w-7xl select-none">
		<h2 class="text-primary pb-5 text-center text-3xl font-extrabold">
			{@html pageData.title}, ({@html pageData.display_date.replaceAll(' ', '&nbsp;')})
		</h2>
		{#if pageData.main_text}
			<article class="rounded-box bg-base-200 mb-4 p-4">{@html pageData.main_text}</article>
		{/if}
		{#if pageImages.length > 0}
			{#key pageName}
				<Gallery imageLinks={pageImages} />
			{/key}
		{:else}
			<div class="rounded-box bg-base-200 content-between p-4 text-center">
				<p class="text-error sm:text-xl sm:font-bold">
					V galerii nebyly nalezeny žádné fotografie!
				</p>
			</div>
		{/if}
	</div>
{/if}

<!-- Konec souboru +page.svelte -->
