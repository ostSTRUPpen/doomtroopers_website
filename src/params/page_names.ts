/**
 * Soubor pro omezení validních URL parametrů pro název stránky (informací o akci)
 * Soubor: page_names.ts
 */

import { gallery_pages } from "$lib/data/gallery_texts"

/**
 * Seznam všech názvů stránek v galeriích
 */
const page_names = gallery_pages.map((p) => p.page_name)

/** Funkce určující, zda se jedná o platný parametr
 * 
 * @param param Hodnota parametru
 * @returns true, pokud je platný
 * @returns false, pokud není
 */
export function match(param: string): boolean {
	return page_names.includes(param)
}

/*** Konec souboru page_names.ts ***/