<!--
	Zobrazení informací a galerie pro událost
	@file +page.svelte
-->

<script lang="ts">
	import Gallery from '$lib/elements/Gallery.svelte';

	let { data } = $props<{ pageData: GalleryTextsDataValue; pageImages: string[] }>();

	let { pageData, pageImages } = $derived(data);
</script>

{#if pageData}
	<div class="ml-5 max-w-7xl select-none">
		<h2 class="pb-5 text-center text-3xl font-extrabold text-primary">
			{@html pageData.title}, ({@html pageData.display_date.replaceAll(' ', '&nbsp;')})
		</h2>
		{#if pageData.main_text}
			<article class="mb-4 rounded-box bg-base-200 p-4">{@html pageData.main_text}</article>
		{/if}
		{#if pageImages.length > 0}
			<Gallery imageLinks={pageImages} />
		{:else}
			<div class="content-between rounded-box bg-base-200 p-4 text-center">
				<p class="text-error sm:text-xl sm:font-bold">
					V galerii nebyly nalezeny žádné fotografie!
				</p>
			</div>
		{/if}
	</div>
{/if}

<!-- Konec souboru +page.svelte -->