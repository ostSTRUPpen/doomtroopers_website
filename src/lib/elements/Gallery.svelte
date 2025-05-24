<script lang="ts">
	import Image from './Image.svelte';

	let { imageLinks } = $props<{ imageLinks: string[] }>();
	let imageDisplay: HTMLDialogElement;

	let currentImageIndex: number = $state(0);
	let imageLinksLength: number = $derived(imageLinks.length);

	function displayImageModal(selectedImage: string): void {
		currentImageIndex = imageLinks.indexOf(selectedImage);
		imageDisplay.showModal();
	}

	$effect(() => {
		if (currentImageIndex < 0) {
			currentImageIndex = imageLinksLength - 1;
		} else if (currentImageIndex >= imageLinksLength) {
			currentImageIndex = 0;
		}
	});
</script>

<dialog id="imageDisplay" class="modal" bind:this={imageDisplay}>
	<div class="modal-box w-fit max-w-4xl max-h-screen h-screen">
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
