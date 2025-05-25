<!--
	Zobrazení domovské stránky
	Soubor: +page.svelte
-->

<script lang="ts">
	import GalleryTypesDisplay from '$lib/elements/GalleryTypesDisplay.svelte';
</script>

<div class="ml-5 h-fit w-fit max-w-7xl content-between rounded-lg bg-base-200 p-5">
	<div class="select-none">
		<h2 class="pb-5 text-center text-5xl font-extrabold text-primary">Úvod</h2>
		<br />
		<h3 class="m-5 text-left text-3xl">Informace o nás</h3>
		<p>
			Jsme airsoft tým z&nbsp;Havlíčkova Brodu a&nbsp;okolí a&nbsp;působíme jako občanské sdružení KVH&nbsp;&&nbsp;AS
			Doomtroopers z.s. od roku 2004.
		</p>
		<br/>	
		<p>
			Záměrně nenapodobujeme žádnou reálnou jednotku či&nbsp;armádu, přesto je doporučený německý
			maskovací vzor flecktarn z&nbsp;důvodu výborných maskovacích vlastností. Jsme spíše
			„žoldáckou jednotkou", jezdíme často za&nbsp;opoziční síly, jako například Talibánce,
			Afghánské vesničany či&nbsp;nejrůznější teroristy či&nbsp;separatisty. Každý člen týmu prochází
			základním taktickým výcvikem, což se pozitivně odráží na bojové kvalitě týmu i&nbsp;jednotlivců.
		</p>
		<br />
		<br />
		<br />

		<h3 class="pb-5 text-center text-4xl font-bold text-primary">Čím se zabýváme?</h3>
		<br />
	</div>
	<div class="md:flex md:justify-center">
		<GalleryTypesDisplay />
	</div>
</div>

<!-- Konec souboru +page.svelte -->