<script lang="ts">
	import '../app.pcss';

	export let data;

	let { currentYearPages_akce, currentYearPages_treninky, currentYearPages_propagace } = data;

	$: ({ currentYearPages_akce, currentYearPages_treninky, currentYearPages_propagace } = data);
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content mb-5 me-5 ms-3 mt-5 flex flex-col justify-center">
		<!-- Page content here -->
		<label for="my-drawer-2" class="btn btn-square btn-primary drawer-button lg:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block h-6 w-6 stroke-current"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				></path>
			</svg>
		</label>
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<div class="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
			<!-- Sidebar content here -->
			<div class="float-left mx-10">
				<img src="/favicon.png" alt="Logo" />
				<div class="py-2">
					<ul>
						<li>KVH Doomtroopers, z.s.</li>
						<li>mail</li>
						<li>facebook</li>
					</ul>
				</div>
				<div>
					<ul>
						<li><a href="/">Domovská stránka</a></li>
						<li><a href="/dashboard">Nástěnka</a></li>
						<li><a href="/gallery">Galerie</a></li>
						<ul class="ms-10">
							<li><a href="/gallery/akce">Akce</a></li>
							<ul class="ms-10">
								{#each currentYearPages_akce as galleryPage}
									<li>
										<a href="/gallery/akce/{galleryPage.page_name}">{galleryPage.link_text}</a>
									</li>
								{/each}
							</ul>
							<li><a href="/gallery/treninky">Tréninky</a></li>
							<ul class="ms-10">
								{#each currentYearPages_treninky as galleryPage}
									<li>
										<a href="/gallery/treninky/{galleryPage.page_name}">{galleryPage.link_text}</a>
									</li>
								{/each}
							</ul>
							<li><a href="/gallery/propagace">Propagační akce</a></li>
							<ul class="ms-10">
								{#each currentYearPages_propagace as galleryPage}
									<li>
										<a href="/gallery/propagace/{galleryPage.page_name}">{galleryPage.link_text}</a>
									</li>
								{/each}
							</ul>
						</ul>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <div class="flow-root">
	<div class="float-left mx-10">
        <img src="/favicon.png" alt="Logo">
        <div class="py-2">
            <ul>
                <li>KVH Doomtroopers, z.s.</li>
                <li>mail</li>
                <li>facebook</li>
            </ul>
        </div>
		<nav>
            <ul>
                <li><a href="/">Domovská stránka</a></li>
                <li>Nástěnka</li>
                <li><a href="/gallery">Galerie</a></li>
                    <ul class="px-2">
                        <li><a href="/gallery/akce">Akce</a></li>
                        <ul class="px-2">
                            {#each gallery_pages as galleryPage}
                                {#if galleryPage.type === "akce" && galleryPage.year === currentYear.toString()}
                                    <li><a href="/gallery/akce/{galleryPage.page_name}">{galleryPage.link_text}</a></li>
                                {/if}
                                
                            {/each}
                        </ul>
                        <li><a href="/gallery/treninky">Tréninky</a></li>
                        <ul class="px-2">
                            {#each gallery_pages as galleryPage}
                                {#if galleryPage.type === "treninky" && galleryPage.year === currentYear.toString()}
                                    <li><a href="/gallery/treninky/{galleryPage.page_name}">{galleryPage.link_text}</a></li>
                                {/if}
                                
                            {/each}
                        </ul>
                        <li><a href="/gallery/propagace">Propagační akce</a></li>
                        <ul class="px-2">
                            {#each gallery_pages as galleryPage}
                                {#if galleryPage.type === "propagace" && galleryPage.year === currentYear.toString()}
                                    <li><a href="/gallery/propagace/{galleryPage.page_name}">{galleryPage.link_text}</a></li>
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
</div> -->
