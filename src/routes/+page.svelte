<script lang="ts">
	import GalleryTypesDisplay from "$lib/elements/GalleryTypesDisplay.svelte";

	// TODO dodělat úvodní stránku

	// TODO zprovoznit HTTPS na azure
	// TODO ověřit, zda jde používat www.ghbnav.cz s funkční CDN

	/* TODO
	podpora pro www.doomtroopers.cz

	Správně nastavit CORS v Azure

	Po přesunu z free tieru přidat HTTPS přesun dat (Přes "Security+networking", "Front Door and CDN")nastavit Secure transfer required (přes "Settings" "Configuration"

	// TODO možná by nebylo od věci přidat možnost zobrazit všechny akce (/all) (ona už existuje, ale není oficiální - dá se vyvolat jen ručně úpravou URL)
	
	// TODO vypnout možnost vybírat text a pravé tlačítko?

	// TODO používat neoddělitelné mezery na nadpisy (například na formát datum a tak -> na mobilu to vypadá blbě)

	// TODO udělat zobrazení pro nadcházející, plánované a proběhlé akce - aby se zobrazili v nástěnce jen pokud u sebe mají nějaký záznam (zase array objektů jako je pro galerii)
	
	*/
</script>

<div class="ml-5 h-fit w-fit max-w-7xl content-between rounded-lg bg-base-200 p-5">
	<h2 class="pb-5 text-center text-5xl font-extrabold text-primary">Úvod</h2>
	<br />
	<h3>Informace o nás</h3>
	<p>
		Jsme airsoft tým z Havlíčkova Brodu a okolí a působíme jako občanské sdružení KVH & AS
		Doomtroopers z.s. od roku 2004.
	</p>
	<p>
		Záměrně nenapodobujeme žádnou reálnou jednotku či armádu, přesto je doporučený německý maskovací
		vzor flecktarn z důvodu výborných maskovacích vlastností. Jsme spíše „žoldáckou jednotkou",
		jezdíme často za opoziční síly, jako například Talibánce, Afghánské vesničany či nejrůznější
		teroristy či separatisty. Každý člen týmu prochází základním taktickým výcvikem, což se
		pozitivně odráží na bojové kvalitě týmu i jednotlivců.
	</p>
	<br/>
	<br/>
	<br/>

	<h3 class="pb-5 text-center text-3xl font-bold text-primary">Čím se zabýváme?</h3>
	<br />
	<div class="md:flex md:justify-center">
	<GalleryTypesDisplay />
	</div>
</div>