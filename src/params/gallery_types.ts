const gallery_types_names = ["akce", "treninky", "propagace"]

export function match(param: string) {
    return true
	return gallery_types_names.includes(param)
}

// TODO nožná takhle vyřeším i ten název článku... a nebo možné ne, kdo ví