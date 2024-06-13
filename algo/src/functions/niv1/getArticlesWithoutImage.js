import {articles} from "../../data/articles"

export const getArticlesWithoutImage = () => {
    return articles.filter(article => article.image);
}
