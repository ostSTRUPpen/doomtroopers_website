<script lang="ts">
	import Gallery from "$lib/elements/Gallery.svelte";

    export let data;

    let {pageData, pageImages} = data
    $:({pageData, pageImages} = data)
    
/**TODO
 * Lepší umístění na stránce? Nevím vypadá trochu divně
*/

</script>

{#if pageData}
<div class="max-w-7xl ml-5">
    <h2 class="text-3xl text-center pb-5">{@html pageData.title}, ({@html pageData.display_date})</h2>
    <article>{@html pageData.main_text}</article>
    <!-- TODO líp graficky oddělit galerii, možná výpis počtu obrázků? idk, ale něco by to chtělo-->
    {#if pageImages.length > 0}
        <Gallery imageLinks={pageImages} />
    {:else}
        <!-- TODO lepší design-->
        <p class="text-error">V galerii nebyly nalezeny žádné fotografie!</p>
    {/if}
</div>
{/if}