<script lang="ts">
	import { gallery_types_names, getGalleryTypeDisplayName } from '$lib/data/static_data';
import '../app.pcss';

	export let data;

	let { sortedCurrentYearPages } = data;

	$: ({ sortedCurrentYearPages } = data);

	function getCurrentYearPagesByType(type: string) {
		return sortedCurrentYearPages[type as keyof typeof sortedCurrentYearPages];
	}

</script>

<svelte:head>
	<!-- HTML Meta Tags -->
	<title>KVH Doomtroopers, z.s.</title>
	<meta name="description" content="Jsme airsoft tým z Havlíčkova Brodu a okolí a působíme jako občanské sdružení KVH & AS Doomtroopers z.s. od roku 2004.">

	<!-- Facebook Meta Tags -->
	 <!--TODO přepsat na doomtroopers.cz-->
	<meta property="og:url" content="https://www.ghbnav.cz/">
	<meta property="og:type" content="website">
	<meta property="og:title" content="KVH Doomtroopers, z.s.">
	<meta property="og:description" content="Jsme airsoft tým z Havlíčkova Brodu a okolí a působíme jako občanské sdružení KVH & AS Doomtroopers z.s. od roku 2004.">
	<!--TODO přepsat na doomtroopers.cz-->
	<meta property="og:image" content="https://www.ghbnav.cz/doomtroopers.png">

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image">
	<!--TODO přepsat na doomtroopers.cz-->
	<meta property="twitter:domain" content="ghbnav.cz">
	<!--TODO přepsat na doomtroopers.cz-->
	<meta property="twitter:url" content="https://www.ghbnav.cz/">
	<meta name="twitter:title" content="KVH Doomtroopers, z.s.">
	<meta name="twitter:description" content="Jsme airsoft tým z Havlíčkova Brodu a okolí a působíme jako občanské sdružení KVH & AS Doomtroopers z.s. od roku 2004.">
	<!--TODO přepsat na doomtroopers.cz-->
	<meta name="twitter:image" content="https://www.ghbnav.cz/doomtroopers.png">

	<!-- Meta Tags Generated via https://www.opengraph.xyz -->
</svelte:head>

<!-- <div class="bg-red-300 sm:bg-green-300 md:bg-blue-300 lg:bg-black xl:bg-orange-500 2xl:bg-yellow-300 3xl:bg-pink-300">Size test</div>-->

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
		<main class="my-5">
			<slot />
		</main>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<div class="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
			<!-- Sidebar content here -->
			<div class="float-left ml-3 mr-10">
				<div class="pt-2 pb-5" >
					<a href="/"><img src="/doomtroopers.png" alt="Logo" /></a>
					<ul class="list-none bg-base-300 rounded-md">
						<li class="ml-2 text-lg">KVH Doomtroopers, z.s.</li>
					<!--<li class="-inset-x-1 list-item -mb-1"><a href="mailto:info@doomtroopers.cz">info@doomtroopers.cz</a></li>-->						
						<li class="-inset-x-1 list-item"><a href="https://www.facebook.com/KvhAsDoomtroopers/" target="_blank">Fb: KvhAsDoomtroopers</a></li>
					</ul>
				</div>
				<div>
					<ul class="bg-base-300 rounded-lg pb-5">
						<li><a href="/" class="-mb-1">Domovská stránka</a></li>
						<li><a href="/dashboard" class="-mb-1">Nástěnka</a></li>
						<li><a href="/gallery" class="-mb-0.5">Galerie</a></li>
						<ul class="ms-5">
							{#each gallery_types_names as gallery_types_name}
								<li><a href="/gallery/{gallery_types_name}" class="-mb-1 mt-0.5">{getGalleryTypeDisplayName(gallery_types_name)}</a></li>
								<ul class="ms-5">
									{#each getCurrentYearPagesByType(gallery_types_name) as galleryPage}
										<li>
											<a class="-mb-1" href="/gallery/{gallery_types_name}/{galleryPage.page_name}">{galleryPage.link_text}</a>
										</li>
									{/each}
								</ul>
							{/each}
						</ul>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>