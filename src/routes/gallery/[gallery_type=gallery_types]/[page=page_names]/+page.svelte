<script lang="ts">
	import Gallery from "$lib/elements/Gallery.svelte";

    export let data;

    let {pageData, pageImages} = data
    $:({pageData, pageImages} = data)
</script>

{#if pageData}
    <div class="max-w-7xl ml-5">
        <h2 class="text-3xl text-center pb-5 font-extrabold text-primary ">{@html pageData.title}, ({@html pageData.display_date})</h2>
        {#if pageData.main_text}
            <article class="mb-4 bg-base-200 p-4 rounded-box">{@html pageData.main_text}</article>
        {/if}
        {#if pageImages.length > 0}
            <Gallery imageLinks={pageImages} />
        {:else}
             <div class="bg-base-200 p-4 rounded-box content-between text-center">
                <p class="text-error sm:font-bold sm:text-xl">V galerii nebyly nalezeny žádné fotografie!</p>
             </div>
         
        {/if}
    </div>
{/if}