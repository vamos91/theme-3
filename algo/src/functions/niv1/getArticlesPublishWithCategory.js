import {articles} from "../../data/articles"
import {categories} from "../../data/categories"

export const getArticlesPublishWithCategory = () => {
    let articlesPublished = articles.filter((article) => article.published);
    return articlesPublished.map(article => {
        const category = categories.find(category => category.id === article.category_id);
        return {
            title: article.title,
            content: article.content,
            image: article.image,
            category: category.name,
            created_at: article.created_at,
            updated_at: article.updated_at
        };
    });
}