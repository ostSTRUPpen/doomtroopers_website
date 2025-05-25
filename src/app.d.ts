// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	/**
	 * Strojové určení typu akce, pro systémové zpracování
	 */
	type actionTypes = 'akce' | 'treninky' | 'propagace';

	/**
	 * Datový typ obsahující data pro záznam v galerii
	 */
	type GalleryTextsDataValue = {
		/**
		 * Název stránky v URL a příslušné složky s obrázky
		 * smí obsahovat pouze malá písmena a čísla, mezery nahrazené "-"
		 */
		page_name: string,
		/**
		 * Text odkazu v bočním panelu
		 */
		link_text: string,
		/**
		 * Typ akce, využívá se pro třídění do galerií
		 */
		type: actionTypes,
		/**
		 * Datum pro zobrazení
		 */
		display_date: string,
		/**
		  * Den pro systémové zpracování
		  */
		day: number,
		/**
		 * Měsíc pro systémové zpracování
		 */
		month: number,
		/**
		 * Rok pro systémové zpracování
		 */
		year: number,
		/**
		 * Název akce pro nadpis stránky a tabulku v galerii
		 */
		title: string,
		/**
		 * Podrobný popis akce, s podporou formátování
		 */
		main_text: string
	}

	/**
	 * Datový typ obsahující data potřebná pro záznam na nástěnku
	 */
	type dashboardTextsData = {
		/**
		 * Nadpis oznámení
		 */
		heading: string,
		/**
		 * Datum pro zobrazení
		 */
		display_date: string,
		/**
		 * Den pro systémové zpracování
		 */
		day: number,
		/**
		 * Měsíc pro systémové zpracování
		 */
		month: number,
		/**
		 * Rok pro systémové zpracování
		 */
		year: number,
		/**
		 * Text oznámení
		 */
		main_text: string,
	}
}

export { };
