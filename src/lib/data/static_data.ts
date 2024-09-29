export const gallery_types_names = ["akce", "treninky", "propagace"]

const gallery_types_display_names = {
    akce: "Akce",
    propagace: "Propagační akce",
    treninky: "Trénink"
}

export function getGalleryTypeDisplayName(type: string) {
    return gallery_types_display_names[type as keyof typeof gallery_types_display_names]
}

export function getGalleryHeadersByType(type: string) {
    switch (type) {
        case "akce":
            return "Fotografie z bojových akcí"
        case "treninky":
            return "Fotografie z tréninků"
        case "propagace":
            return "Fotografie z propagací"
        case "all":
            return "Fotografie ze všech aktivit"
        default:
            return "Fotografie"
    }
}