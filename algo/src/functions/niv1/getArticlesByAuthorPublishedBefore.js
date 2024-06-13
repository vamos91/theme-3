import {authors} from "../../data/authors"
import {articles} from "../../data/articles"

export const getArticlesByAuthorPublishedBefore = (authorName, date) => {
    const authorId = authors.find(author => author.name === authorName).id;
    let articlesPublishBefore = articles.filter((article) => {
        return article.published === 1 && article.created_at < date && article.author_id === authorId;
    });
    return articlesPublishBefore;
}