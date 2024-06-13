import { categories } from "../../data/categories"

// 1 - Afficher tous les noms des différentes catégories
export const getCategories = () => {
    return categories.map((categorie) => ({
        categorieName: categorie.name
    }))
}