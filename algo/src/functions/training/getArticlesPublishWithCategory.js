
// 3 - Afficher tous les articles publiés ainsi que leur catégorie respective

import { articles } from "../../data/articles"
import { categories } from "../../data/categories"

export const getArticlesPublishWithCategory = () => {
    const publishedArticles = articles.filter((article) => article.published === 1)
    const articlesAndCategorie = publishedArticles.map((article) => ({
            title: article.title,
            content: article.content,
            published: article.published,
            image: article.image,
            categorie: categories.find((categorie) => {
            return categorie.id === article.category_id
            }).name
        }))
        return articlesAndCategorie 
}