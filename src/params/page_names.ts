import { gallery_pages } from "$lib/data/gallery_texts"

const page_names = gallery_pages.map((p) => p.page_name)

export function match(param: string): boolean {
	return page_names.includes(param)
}