class CocktailAPI {

    // Get recipes by name
    async getDrinksByName(name) {
        // Search by name
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        // returns a JSON response
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }

    // Get recipes by category
    async getDrinksByIngredient(ingredient) {
        // Search by ingredient
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        // Wait response & return JSON
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }

    async getSingleRecipe(id) {
        // Search by ingredient
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        // Wait response & return JSON
        const recipe = await apiResponse.json();

        return {
            recipe
        }
    }

    // Retrieves all the Categories from the REST API
    async getCategories() {
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
        // Wait fir response and return JSON
        const categories = await apiResponse.json()

        return {
            categories
        }
    }

    // Retrieves all the Drinks from category
    async getDrinksByCategory(category) {
        // Search by Category
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        // Wait response & return JSON
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }

    // Get Alcohol/Non-Alcohol Drinks
    async getDrinksByAlcohol(term) {
        // Search by Category
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${term}`);
        // Wait response & return JSON
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }
}