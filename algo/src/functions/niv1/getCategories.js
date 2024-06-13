import {categories} from "../../data/categories"

export const getCategories = () => {
    return categories.map(category => category.name);
}
