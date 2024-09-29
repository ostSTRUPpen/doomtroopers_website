<script lang=ts>
    export let imageLink, displayStyle = "gallery-list", imageNumber: number = -1, maxImageNumber: number = -2;

   // TODO nastavit správnou doménu-->
    const baseImageUrl = "http://image-api.ghbnav.cz/dt-images/";
</script>

{#if imageLink !== '' || imageLink !== undefined || imageLink !== null}
<div class="{displayStyle === "gallery-list" && imageNumber > 0 && imageNumber <= maxImageNumber  ? 'tooltip' : ''}" data-tip="{imageNumber}/{maxImageNumber}" >
<img src={baseImageUrl + imageLink} alt="Obrázek" class="{displayStyle}">

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
</style>