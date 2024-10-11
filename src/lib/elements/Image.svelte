<script lang=ts>
	import { PUBLIC_API_LINK, PUBLIC_START_URL, PUBLIC_IMAGE_URL } from "$env/static/public";

    export let imageLink, displayStyle = "gallery-list", imageNumber: number = -1, maxImageNumber: number = -2;

    const baseImageUrl : string = `${PUBLIC_START_URL}://${PUBLIC_API_LINK}/${PUBLIC_IMAGE_URL}/`;
</script>

{#if imageLink !== '' || imageLink !== undefined || imageLink !== null || displayStyle=="none"}
<div class="{displayStyle === "gallery-list" && imageNumber > 0 && imageNumber <= maxImageNumber  ? 'tooltip' : ''}" data-tip="{imageNumber}/{maxImageNumber}" >
    <img src={baseImageUrl + imageLink} alt="Obrázek" class="{displayStyle}" on:error={() => displayStyle = "none"}>

</div>
{/if}

<style>
    .gallery-list {
        margin: 0.25rem;
        max-height: 100px;
        width: auto;
        border: 1px solid black;
    }

    .gallery-main {
        max-height:700px;
        width: auto
    }

    .none.none {
        display: none;
    }
</style>