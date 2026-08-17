<!--
	Element umožňující přechod do jednotlivých galerií
	Soubor: GalleryTypesDisplay.svelte
-->

<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div>
	<div
		class="3xl:w-96 card card-compact bg-base-300 float-start h-auto shadow-xl md:w-52 lg:w-44 xl:w-64 2xl:w-80"
	>
		<a href={resolve('/gallery/[gallery_type=gallery_types]', { gallery_type: 'akce' })}>
			<div class="card-body">
				<h2 class="card-title md:text-2xl 2xl:text-xl">Akce</h2>
			</div>
			<figure class="rounded">
				<img src="/akce.jpg" alt="Akce" />
			</figure>
		</a>
	</div>

	<div
		class="3xl:w-96 card card-compact bg-base-300 float-start my-5 h-auto shadow-xl md:mx-5 md:my-0 md:w-52 lg:w-44 xl:w-64 2xl:w-80"
	>
		<a href={resolve('/gallery/[gallery_type=gallery_types]', { gallery_type: 'treninky' })}>
			<div class="card-body">
				<h2 class="card-title md:text-2xl 2xl:text-xl">Tréninky</h2>
			</div>
			<figure class="rounded">
				<img src="/treninky.jpg" alt="Treninky" />
			</figure>
		</a>
	</div>

	<div
		class="3xl:w-96 card card-compact bg-base-300 float-start h-auto shadow-xl md:w-52 lg:w-44 xl:w-64 2xl:w-80"
	>
		<a href={resolve('/gallery/[gallery_type=gallery_types]', { gallery_type: 'propagace' })}>
			<div class="card-body">
				<h2 class="card-title md:text-2xl 2xl:text-xl">Propagace</h2>
			</div>
			<figure class="rounded">
				<img src="/propagace.jpg" alt="Propagace" />
			</figure>
		</a>
	</div>
</div>

<!-- Konec souboru GalleryTypesDisplay.svelte -->
