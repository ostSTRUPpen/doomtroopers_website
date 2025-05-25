<!--
	Element zajišťující galerii
	- Zobrazení všech obrázků
	- Přiblížení a procházení obrázků
	@file Gallery.svelte
-->

<script lang="ts">
	import Image from './Image.svelte';

	let { imageLinks } = $props<{ imageLinks: string[] }>();

	/**
	 * Element pro zobrazení obrázku
	 */
	let imageDisplay: HTMLDialogElement;

	/**
	 * Obrázek který se právě zobrazuje v @see imageDisplay
	 */
	let currentImageIndex: number = $state(0);
	/**
	 * Celkový počet obrázků na procházení
	 */
	let imageLinksLength: number = $derived(imageLinks.length);

	/** Zobrazení přiblížených obrázků
	 *
	 * @param selectedImage Vybraný obrázek
	 */
	function displayImageModal(selectedImage: string): void {
		currentImageIndex = imageLinks.indexOf(selectedImage);
		imageDisplay.showModal();
	}

	/**
	 * Zajištění správné změny zobrazovaného obrázku při procházení
	 */
	$effect(() => {
		if (currentImageIndex < 0) {
			currentImageIndex = imageLinksLength - 1;
		} else if (currentImageIndex >= imageLinksLength) {
			currentImageIndex = 0;
		}
	});
</script>

<!-- Přiblížení na konkrétní obrázek, a možnost procházet galerii k akci -->
<dialog id="imageDisplay" class="modal" bind:this={imageDisplay}>
	<div class="modal-box h-screen max-h-screen w-fit max-w-4xl">
		<div class="justify-self-center">
			<button class="btn float-start mb-4 ml-2 mt-3" onclick={() => currentImageIndex--}>
				←</button
			>
			<button class="btn float-end mb-4 mr-2 mt-3" onclick={() => currentImageIndex++}
				>→</button
			>
			<form method="dialog">
				<button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 text-xl"
					>✕</button
				>
			</form>
		</div>
		<div class="justify-items-center">
			<Image imageLink={imageLinks[currentImageIndex]} displayStyle={'gallery-main'} />
		</div>
		<div>
			<p class="text-center align-middle">{currentImageIndex + 1}/{imageLinks.length}</p>
		</div>
	</div>
</dialog>

<!-- Zobrazení všech obrázků -->
<div class="content-between rounded-box bg-base-200 p-4">
	<p class="pb-2 text-end align-baseline">Obrázků v galerii: {imageLinks.length}</p>
	{#each imageLinks as pImage, imageIterator}
		<button class="align-left float-start" onclick={() => displayImageModal(pImage)}>
			<Image
				imageLink={pImage}
				displayStyle={'gallery-list'}
				imageNumber={imageIterator + 1}
				maxImageNumber={imageLinksLength}
			/>
		</button>
	{/each}
</div>

<!-- Konec souboru Gallery.svelte -->
