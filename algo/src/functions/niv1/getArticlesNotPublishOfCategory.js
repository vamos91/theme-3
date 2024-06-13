import {articles} from "../../data/articles"
import {categories} from "../../data/categories"

export const getArticlesNotPublishOfCategory = (category) => {
    const categoryId = categories.find(categories => categories.name === category).id;

    const articlesNotPublished = articles.filter(article => {
        return article.published === 0 && article.category_id === categoryId;
    })
    return articlesNotPublished;
}