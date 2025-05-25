/**
 * Soubor pro omezení validních URL parametrů specifikující typ galerie
 * Soubor: gallery_types.ts
 */

import { gallery_types_names } from "$lib/data/static_data"

/**
 * Seznam povolených strojových jmen galerií
 */
const gallery_types_names_extended = gallery_types_names.concat("all")

/** Funkce určující, zda se jedná o platný parametr
 * 
 * @param param Hodnota parametru
 * @returns true, pokud je platný
 * @returns false, pokud není
 */
export function match(param: string): boolean {
	return gallery_types_names_extended.includes(param)
}

/*** Konec souboru gallery_types ***/