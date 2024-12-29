import { AZURE_CONNECTION_STRING } from '$env/static/private';

import { gallery_pages } from '$lib/data/gallery_texts';

import { BlobServiceClient } from '@azure/storage-blob';

const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_CONNECTION_STRING)


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

export const load = async ({ setHeaders, params }) => {
	setHeaders({
		'Cache-Control': `max-age=${360}, s-maxage=${360}`
	});
	const pageName = params.page;

	const data = gallery_pages.filter(p => p.page_name === pageName)[0]

	return { pageData: data, pageImages: await getCorrectImageNames(pageName) };
}