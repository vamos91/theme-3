import { articles } from "../../data/articles"
import { authors } from "../../data/authors"

// 5 - Afficher tous les articles de l'auteur 'Eve Moreau' créé et publié avant le 10 Janvier 2024 Minuit

export const getArticlesByAuthorPublishedBefore = () => {
    return articles.filter((article) => authors.find((author) => author.name === 'Eve Moreau').id === article.author_id && article.created_at < '2024-01-10 00:00:00')
}