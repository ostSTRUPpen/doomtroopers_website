// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

type actionTypes = 'akce' | 'treninky' | 'propagace';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type actionTypes = 'akce' | 'treninky' | 'propagace';
	
	type GalleryTextsDataValue = {
		page_name: string,
        link_text: string,
        type: actionTypes,
        display_date: string,
        day: number,
        month: number,
        year: number,
        title: string,
        main_text: string
	}
}

export {};
