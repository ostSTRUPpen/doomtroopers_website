<script lang="ts">
    import { page } from '$app/stores';
	import { gallery_pages } from '$lib/data/static_data';

    const data = gallery_pages.filter(p => p.page_name === $page.params.page)[0]
</script>

{#if data}
<div>
    <h2>{@html data.title}, {@html data.date}</h2>
    <p>{@html data.main_text}</p>
</div>
{/if}