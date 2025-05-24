import { gallery_types_names } from "$lib/data/static_data"

const gallery_types_names_extended = gallery_types_names.concat("all")

export function match(param: string): boolean {
	return gallery_types_names_extended.includes(param)
}