import {getCategories} from "./functions/training/getCategories";
import {getArticlesWithoutImage} from "./functions/training/getArticlesWithoutImage";
import {getArticlesPublishWithCategory} from "./functions/training/getArticlesPublishWithCategory";
import {getArticlesNotPublishOfCategory} from "./functions/training/getArticlesNotPublishOfCategory";
import {getArticlesByAuthorPublishedBefore} from "./functions/training/getArticlesByAuthorPublishedBefore";
import {getArticlesPublishWithImageBefore} from "./functions/training/getArticlesPublishWithImageBefore";

const logNested = (name, data) => {
    console.log(name, JSON.stringify(data, null, 2));
}

// 1 - Afficher tous les noms des différentes catégories
const categories = getCategories();
//console.log('🚀 ~ categories', categories);

// 2 - Afficher tous les articles n'ayant pas d'image
const articlesWithoutImage = getArticlesWithoutImage();
//console.log('🚀 ~ articlesWithoutImage', articlesWithoutImage);

// 3 - Afficher tous les articles publiés ainsi que leur catégorie respective
const articlesPublishWithCategory = getArticlesPublishWithCategory();
//console.log('🚀 ~ articlesPublishWithCategory', articlesPublishWithCategory);

// 4 - Afficher tous les articles non publiés de la catégorie 'Bases de données SQL'
const articlesNotPublishOfCategory = getArticlesNotPublishOfCategory('Bases de données SQL');
//console.log('🚀 ~ articlesNotPublishOfCategory', articlesNotPublishOfCategory);

// 5 - Afficher tous les articles de l'auteur 'Eve Moreau' créé et publié avant le 10 Janvier 2024 Minuit
const articlesByAuthorPublishedBefore = getArticlesByAuthorPublishedBefore('Eve Moreau', '2024-01-10 00:00:00');
//console.log("🚀 ~ articlesByAuthorPublishedBefore", articlesByAuthorPublishedBefore);

// 6 - Afficher tous les articles publiés avec une image avant le 10 Janvier 2024 Minuit ainsi que leur catégorie et leur auteur
const articlesPublishWithImageBefore = getArticlesPublishWithImageBefore('2024-01-10 00:00:00');
console.log("🚀 ~ articlesPublishWithImageBefore", articlesPublishWithImageBefore);
