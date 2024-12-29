<script lang="ts">
	import GalleryTypesDisplay from '$lib/elements/GalleryTypesDisplay.svelte';

	// TODO dodělat úvodní stránku

	//TODO podpora pro www.doomtroopers.cz
			//Správně nastavit CORS v Azure
	
	// TODO rozdělit prod a dev branch

</script>

<div class="ml-5 h-fit w-fit max-w-7xl content-between rounded-lg bg-base-200 p-5">
	<div class="select-none">
		<h2 class="pb-5 text-center text-5xl font-extrabold text-primary">Úvod</h2>
		<br />
		<h3 class="m-5 text-left text-3xl">Informace o nás</h3>
		<p>
			Jsme airsoft tým z Havlíčkova Brodu a okolí a působíme jako občanské sdružení KVH & AS
			Doomtroopers z.s. od roku 2004.
		</p>
		<p>
			Záměrně nenapodobujeme žádnou reálnou jednotku či armádu, přesto je doporučený německý
			maskovací vzor flecktarn z důvodu výborných maskovacích vlastností. Jsme spíše
			„žoldáckou jednotkou", jezdíme často za opoziční síly, jako například Talibánce,
			Afghánské vesničany či nejrůznější teroristy či separatisty. Každý člen týmu prochází
			základním taktickým výcvikem, což se pozitivně odráží na bojové kvalitě týmu i
			jednotlivců.
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
