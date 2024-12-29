<script lang="ts">
    export let header;
    export let texts;
</script>

{#if header === ""}
<div>
    {#each texts as text}
        <article class="mb-4 bg-base-200 pb-1 rounded-box">
            <h4 class="pb-0.5 text-2xl">{@html text.heading} {@html text.display_date.replaceAll(" ", "&nbsp;")}</h4>
            <p class="pl-1">{@html text.main_text}</p>
        </article>
        <br/>
    {/each}
</div>
{:else}
<div>
    <h3 class="pb-2 text-left text-2xl text-secondary">{header}</h3>
    <div>
        {#each texts as text}
            <article class="pl-2 mb-4 bg-base-200 pb-1 rounded-box">
                <h4 class="pl-1 pb-0.5 text-xl">{@html text.heading} {@html text.display_date.replaceAll(" ", "&nbsp;")}</h4>
                <p class="pl-3">{@html text.main_text}</p>
            </article>
            <br/>
        {/each}
    </div>
</div> 
{/if}