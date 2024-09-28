<script lang="ts">
	import Image from './Image.svelte';

	// gallery-list
	// gallery-main

	export let imageLinks: string[];
	let imageDisplay: HTMLDialogElement;

	let currentImageIndex = 0;

	function displayImageModal(selectedImage: string) {
		currentImageIndex = imageLinks.indexOf(selectedImage);
		imageDisplay.showModal();
	}

    $:{
        if(currentImageIndex < 0) {
            currentImageIndex = imageLinks.length - 1
        } else if (currentImageIndex >= imageLinks.length) {
            currentImageIndex = 0
        }
    }

</script>

<dialog id="imageDisplay" class="modal" bind:this={imageDisplay}>
	<div class="modal-box w-fit max-w-5xl">
		<div>
            <button class="btn float-start" on:click={() => currentImageIndex--}>←</button>
			<button class="btn float-end" on:click={() => currentImageIndex++}>→</button>
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
		</div>
		<div>
		    <Image imageLink={imageLinks[currentImageIndex]} displayStyle={'gallery-main'} />
        </div> 
		<div>
			<p class="align-middle text-center">{currentImageIndex + 1}/{imageLinks.length}</p>
		</div>
	</div>
</dialog>

<div>
	<p>Obrázků v galerii: {imageLinks.length}</p>
	{#each imageLinks as pImage}
		<button class="align-left float-start" on:click={() => displayImageModal(pImage)}>
			<Image imageLink={pImage} displayStyle={'gallery-list'} />
		</button>
	{/each}
</div>
