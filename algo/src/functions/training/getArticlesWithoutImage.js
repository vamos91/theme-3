import { articles } from "../../data/articles"

// 2 - Afficher tous les articles n'ayant pas d'image

export const getArticlesWithoutImage = () => {
    return articles.filter((article) => article.image !== null)
}