import { articles } from "../../data/articles"
import { categories } from "../../data/categories"

// 4 - Afficher tous les articles non publiés de la catégorie 'Bases de données SQL'

export const getArticlesNotPublishOfCategory = () => {
    const db_cat_id = categories.find((cat) => cat.name === 'Bases de données SQL').id
    console.log(db_cat_id)
    const resultat = articles.filter((article) => article.category_id === db_cat_id && article.published === 1)
    return resultat
}