<script lang="ts">
	import '../app.pcss';
    import { base } from '$app/paths'
    import { gallery_pages } from '$lib/data/static_data';

    const currentYear = new Date().getFullYear();
</script>

<div class="flow-root">
	<div class="float-left mx-10">
        <img src="{base}/favicon.png" alt="Logo">
        <div class="py-2">
            <ul>
                <li>KVH Doomtroopers, z.s.</li>
                <li>mail</li>
                <li>facebook</li>
            </ul>
        </div>
		<nav>
            <ul>
                <li><a href="{base}/">Domovská stránka</a></li>
                <li>Nástěnka</li>
                <li><a href="{base}/gallery">Galerie</a></li>
                    <ul class="px-2">
                        <li><a href="{base}/gallery/akce">Akce</a></li>
                        <ul class="px-2">
                            {#each gallery_pages as galleryPage}
                                {#if galleryPage.type === "akce" && galleryPage.year === currentYear.toString()}
                                    <li><a href="{base}/gallery/akce/{galleryPage.page_name}">{galleryPage.link_text}</a></li>
                                {/if}
                                
                            {/each}
                        </ul>
                        <li><a href="{base}/gallery/treninky">Tréninky</a></li>
                        <ul class="px-2">
                            {#each gallery_pages as galleryPage}
                                {#if galleryPage.type === "treninky" && galleryPage.year === currentYear.toString()}
                                    <li><a href="{base}/gallery/treninky/{galleryPage.page_name}">{galleryPage.link_text}</a></li>
                                {/if}
                                
                            {/each}
                        </ul>
                        <li><a href="{base}/gallery/propagace">Propagační akce</a></li>
                        <ul class="px-2">
                            {#each gallery_pages as galleryPage}
                                {#if galleryPage.type === "propagace" && galleryPage.year === currentYear.toString()}
                                    <li><a href="{base}/gallery/propagace/{galleryPage.page_name}">{galleryPage.link_text}</a></li>
                                {/if}
                                
                            {/each}
                        </ul>
                    </ul>
            </ul>
        </nav>
	</div>
	<div class="float-start">
        <slot />
    </div>
</div>
