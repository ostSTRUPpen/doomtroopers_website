<script lang="ts">
	import Image from './Image.svelte';

	export let imageLinks: string[];
	let imageDisplay: HTMLDialogElement;

	let currentImageIndex: number = 0;
	let imageLinksLength: number = 0;
	$: imageLinksLength = imageLinks.length

	function displayImageModal(selectedImage: string):void {
		currentImageIndex = imageLinks.indexOf(selectedImage);
		imageDisplay.showModal();
	}

    $:{
        if(currentImageIndex < 0) {
            currentImageIndex = imageLinksLength - 1
        } else if (currentImageIndex >= imageLinksLength) {
            currentImageIndex = 0
        }
    }

</script>

<dialog id="imageDisplay" class="modal" bind:this={imageDisplay}>
	<div class="modal-box w-fit max-w-5xl">
		<div> 
            <button class="btn float-start mb-4 mt-3 ml-2" on:click={() => currentImageIndex--}>←</button>
			<button class="btn float-end mr-2 mt-3 mb-4" on:click={() => currentImageIndex++}>→</button>
            <form method="dialog">
                <button class="text-xl btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
		</div>
		<div>
		    <Image imageLink={imageLinks[currentImageIndex]} displayStyle={'gallery-main'}  />
        </div> 
		<div>
			<p class="align-middle text-center">{currentImageIndex + 1}/{imageLinks.length}</p>
		</div>
	</div>
</dialog>

<div class="bg-base-200 p-4 rounded-box content-between">
	<p class="align-baseline text-end pb-2">Obrázků v galerii: {imageLinks.length}</p>
	{#each imageLinks as pImage, imageIterator}
		<button class="align-left float-start" on:click={() => displayImageModal(pImage)}>
			<Image imageLink={pImage} displayStyle={'gallery-list'} imageNumber={imageIterator+1} maxImageNumber={imageLinksLength}/>
		</button>
	{/each}
</div>
