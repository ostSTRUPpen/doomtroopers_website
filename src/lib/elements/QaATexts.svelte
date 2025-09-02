<script lang="ts">
    let { dataSection } = $props<{ dataSection: any[] }>();
</script>

{#if dataSection.data.length > 0}
    <h4 class="pb-0.5 text-2xl"> {@html dataSection.header}</h4>

    {#each dataSection.data as qaa}
        <div class="collapse collapse-arrow mb-4 rounded-box bg-base-300">
            <input type="checkbox" />
            <div class="collapse-title font-semibold">{@html qaa.q}</div>
            <div class="collapse-content text-sm">
                {@html qaa.a}
            </div>
        </div>
    {/each}
    
{/if}