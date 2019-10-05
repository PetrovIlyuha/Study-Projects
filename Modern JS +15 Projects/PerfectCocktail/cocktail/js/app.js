// Instantiate the Classes
const ui = new UI();
const cocktail = new CocktailAPI();
const cocktailDB = new CocktailDB();



// Create Event Listeners
function eventListeners() {
    // Document ready
    document.addEventListener("DOMContentLoaded", documentReady);
    // Add ev.listener when form is submitted
    const searchForm = document.querySelector('#search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', getCocktails);
    }
    // The results div listeners
    const resultsDiv = document.querySelector('#results');
    if (resultsDiv) {
        resultsDiv.addEventListener('click', resultsDelegation);
    }
}

eventListeners();

// Get cocktails function
function getCocktails(e) {
    e.preventDefault();

    const searchTerm = document.querySelector('#search').value;
    // Check if something is on the search input
    if (searchTerm === '') {
        // Call UI to print message
        ui.printMessage('Please add something into the form', 'danger');
    } else {
        // Server response from promise
        let serverResponse;
        // Type of search (ingredients, cocktails, or name);
        const type = document.querySelector('#type').value;

        // Evaluate the type of method and then execute the query
        switch (type) {
            case 'name':
                serverResponse = cocktail.getDrinksByName(searchTerm);
                break;
            case 'ingredient':
                serverResponse = cocktail.getDrinksByIngredient(searchTerm);
                break;
            case 'category':
                serverResponse = cocktail.getDrinksByCategory(searchTerm);
                break;
            case 'alcohol':
                serverResponse = cocktail.getDrinksByAlcohol(searchTerm);
                break;
        }
        // Clearing the output field
        ui.clearResults();

        // Query the name of the drink
        serverResponse.then(cocktails => {
            if (cocktails.cocktails.drinks === null) {
                // Nothing exists
                ui.printMessage('There\'re no results, try a different term', 'danger');
            } else {
                if (type === 'name') {
                    // Display with ingredients
                    ui.displayDrinksWithIngredients(cocktails.cocktails.drinks);
                } else {
                    // Display without ingredients (category, alcohol, ingredient)
                    ui.displayDrinks(cocktails.cocktails.drinks);
                }
            }
        })
    }
}

// Delegation for results area
function resultsDelegation(e) {
    e.preventDefault();

    if (e.target.classList.contains('get-recipe')) {
        cocktail.getSingleRecipe(e.target.dataset.id)
            .then(recipe => {
                // Displays single recipe into a modal window
                ui.displaySingleRecipe(recipe.recipe.drinks[0])
            });
    }

    // When favourite btn is clicked
    if (e.target.classList.contains('favorite-btn')) {
        if (e.target.classList.contains('is-favorite')) {
            // remove the class
            e.target.classList.remove('is-favorite');
            e.target.textContent = '+';

            // remove from storage
            cocktailDB.removeFromDB(e.target.dataset.id);
        } else {
            e.target.classList.add('is-favorite');
            e.target.textContent = '-';

            // Get info
            const cardBody = e.target.parentElement;

            const drinkInfo = {
                id: e.target.dataset.id,
                name: cardBody.querySelector('.card-title').textContent,
                image: cardBody.querySelector('.card-img-top').src
            }
            // Add to Local Storage
            cocktailDB.saveIntoDB(drinkInfo);
        }
    }
}

// Document ready
function documentReady() {
    // Display on load the favorites from storage
    ui.isFavorite();

    // Select the search category
    const searchCategory = document.querySelector('.search-category');
    if (searchCategory) {
        ui.displayCategories();
    }

    // When favourites page loaded
    const favoritesTable = document.querySelector('#favorites');
    if (favoritesTable) {
        // Get the favourites from LS
        const drinks = cocktailDB.getFromDB();
        ui.displayFavorites(drinks);

        // When view or delete are clicked
        favoritesTable.addEventListener('click', (e) => {
            e.preventDefault();

            // Delegation
            if (e.target.classList.contains('get-recipe')) {
                cocktail.getSingleRecipe(e.target.dataset.id)
                    .then(recipe => {
                        // Displays single recipe into a modal window
                        ui.displaySingleRecipe(recipe.recipe.drinks[0]);
                    });
            }
            // When REMOVE button is clicked in favourites
            if (e.target.classList.contains('remove-recipe')) {
                // Remove from DOM
                ui.removeFavorite(e.target.parentElement.parentElement);

                // Remove from Local Storage
                cocktailDB.removeFromDB(e.target.dataset.id);
            }
        });
    }
}