import { gallery_pages } from '$lib/data/gallery_texts';

export const load = (async () => {
    
    const currentYear = new Date().getFullYear();

	const currentYearPages = gallery_pages.filter((p) => p.year === currentYear);

    const currentYearPages_akce = [], currentYearPages_propagace = [] , currentYearPages_treninky = [];

    for(let page of currentYearPages){
        if(page.type === "akce") currentYearPages_akce.push(page)
        else if(page.type === "treninky") currentYearPages_treninky.push(page)
        else if(page.type === "propagace") currentYearPages_propagace.push(page)
        else console.error(page)
    }

    const sortedCurrentYearPages = {
        akce: currentYearPages_akce,
        propagace: currentYearPages_propagace,
        treninky: currentYearPages_treninky
    }

    return {sortedCurrentYearPages};
})