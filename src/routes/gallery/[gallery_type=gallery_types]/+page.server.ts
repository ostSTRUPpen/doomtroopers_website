import { gallery_pages } from '$lib/data/gallery_texts';

export const load = (async ({ params }) => {
    const galleryType = params.gallery_type;
    
	let matchingPages = gallery_pages.filter((p) => p.type === galleryType).sort((a, b) => b.year - a.year || b.month - a.month || b.day - a.day);

    if(matchingPages.length === 0 && galleryType === "all") matchingPages = gallery_pages.sort((a, b) => b.year - a.year || b.month - a.month || b.day - a.day);

    return {matchingPages};
})