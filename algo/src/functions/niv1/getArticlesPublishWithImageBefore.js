import {authors} from "../../data/authors"
import {articles} from "../../data/articles"
import {categories} from "../../data/categories"

export const getArticlesPublishWithImageBefore = (date) => {
    let articlesPublishWithImageBefore = articles.filter((article) => {
        return article.published === 1 && article.created_at < date && article.image !== null;
    });

    return articlesPublishWithImageBefore.map((article) => {
        return {
            articleId: article.id,
            title: article.title,
            content: article.content,
            image: article.image,
            category: categories.find(category => category.id === article.category_id).name,
            author: authors.find(author => author.id === article.author_id).name,
            createdAt: article.created_at,
            updatedAt: article.updated_at
        };
    })

}