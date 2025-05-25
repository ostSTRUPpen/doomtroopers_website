/**
 * Server side kód pro zobrazení informací a galerie pro konkrétní událost
 * @file +page.server.ts
 */

import type { Load } from '@sveltejs/kit';

import { gallery_pages } from '$lib/data/gallery_texts';

export const load: Load<{ gallery_type: string }, { matchingPages: GalleryTextsDataValue[]; currentYear: number }> = (async ({ setHeaders, params }) => {
    setHeaders({
        'Cache-Control': `max-age=${60}, s-maxage=${60}`
    });
    const galleryType = params.gallery_type;

    const currentYear = new Date().getFullYear();

    let matchingPages;

    if (galleryType === "all") {
        // Seřazení od nejnovější
        matchingPages = gallery_pages.sort((a, b) => b.year - a.year || b.month - a.month || b.day - a.day);
    } else {
        // Vybrání správných událostí seřazení od nejnovější
        matchingPages = gallery_pages.filter((p) => p.type === galleryType).sort((a, b) => b.year - a.year || b.month - a.month || b.day - a.day);
    }

    return { matchingPages, currentYear };
})

/*** Konec souboru +page.server.ts ***/