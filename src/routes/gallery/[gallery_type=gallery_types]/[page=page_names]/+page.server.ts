/**
 * Server side kód pro zobrazení informací a galerie pro konkrétní událost
 * Soubor: +page.server.ts
 */

import type { Load } from '@sveltejs/kit';

import { AZURE_CONNECTION_STRING } from '$env/static/private';

import { gallery_pages } from '$lib/data/gallery_texts';

import { BlobServiceClient } from '@azure/storage-blob';

const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_CONNECTION_STRING)

/** Vybrání a zformátování odkazů na obrázky pro danou stránku
 * 
 * @param pageName Název stránky
 * @returns List odkazů na dané obrázky
 */
async function getCorrectImageNames(pageName: string): Promise<string[]> {
	const containerClient = blobServiceClient.getContainerClient('dt-images');
	const correctImages = []
	let blobs = await containerClient.listBlobsFlat();
	for await (const blob of blobs) {
		const blobPath = blob.name.split("/");
		if (blobPath[0] === pageName) {
			correctImages.push(blob.name)
		}
	}
	return correctImages;
}

export const load: Load<{ page: string }, { pageData: GalleryTextsDataValue | undefined, pageImages: string[] }> = async ({ setHeaders, params }) => {
	setHeaders({
		'Cache-Control': `max-age=${360}, s-maxage=${360}`
	});
	const pageName = params.page;

	const data = gallery_pages.filter(p => p.page_name === pageName)[0]

	return { pageData: data, pageImages: await getCorrectImageNames(pageName) };
}

/*** Konec souboru +page.server.ts ***/