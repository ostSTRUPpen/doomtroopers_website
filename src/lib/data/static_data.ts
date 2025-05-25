/**
 * Soubor obsahující různá statická data
 * 
 * Soubor: static_data.ts
 */

/**
 * Strojové názvy galerií, musí být stejné jako @see actionTypes
 */
export const gallery_types_names: string[] = ["akce", "treninky", "propagace"]

/**
 * Zobrazovací názvy galerií
 */
const gallery_types_display_names = {
    akce: "Akce",
    propagace: "Propagační akce",
    treninky: "Tréninky"
}

/** Převod typu galerie na zobrazovací název
 * 
 * @param type Strojový název galerie
 * @returns Název galerie pro zobrazení uživateli
 */
export function getGalleryTypeDisplayName(type: string): string {
    return gallery_types_display_names[type as keyof typeof gallery_types_display_names]
}

/** Nadpis pro galerii na základě typu
 * 
 * @param type Strojový název galerie
 * @returns Nadpis pro stránku
 */
export function getGalleryHeadersByType(type: string): string {
    switch (type) {
        case "akce":
            return "Fotografie z bojových akcí"
        case "treninky":
            return "Fotografie z tréninků"
        case "propagace":
            return "Fotografie z propagací"
        case "all":
            return "Fotografie ze všech aktivit"
        default:
            return "Fotografie"
    }
}

/*** Konec souboru static_data.ts ***/