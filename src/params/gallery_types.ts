const gallery_types_names = ["akce", "treninky", "propagace", "all"]

export function match(param: string) {
	return gallery_types_names.includes(param)
}