import { articles } from "../../data/articles"
import { authors } from "../../data/authors"
import { categories } from "../../data/categories"


// 6 - Afficher tous les articles publiés avec une image avant le 10 Janvier 2024 Minuit ainsi que leur catégorie et leur auteur

export const getArticlesPublishWithImageBefore = (date) => {
    const allArticles = articles.filter((article) =>  article.published === 1 && article.image !== null && article.created_at < date)
    console.log('allArticles', allArticles)
    const resultat = allArticles.map((allArticle) => ({
        title: allArticle.title,
        content: allArticle.content,
        image: 'algorithms.jpg',
        category: categories.find((categorie) => categorie.id === allArticle.category_id).name,
        author: authors.find((author) => author.id === allArticle.author_id).name,
    }))
    return resultat
}