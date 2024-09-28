<script lang=ts>
    export let imageLink, displayStyle = "gallery-list";

   // TODO nastavit správnou doménu-->
    const baseImageUrl = "http://image-api.ghbnav.cz/dt-images/";
</script>

<img src={baseImageUrl + imageLink} alt="Obrázek" class="{displayStyle}">

<style>
    .gallery-list {
        margin: 0.25rem;
        max-height: 100px;
        width: auto
    }

    .gallery-main {
        max-height:700px;
        width: auto
    }
</style>