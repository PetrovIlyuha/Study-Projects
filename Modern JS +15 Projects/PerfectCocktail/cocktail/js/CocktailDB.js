class CocktailDB {
    // Save repices to local storage
    saveIntoDB(drink) {
        const drinks = this.getFromDB();
        drinks.push(drink);

        // Add new array into LS
        localStorage.setItem('drinks', JSON.stringify(drinks));
    }

    // removes elements from local storage
    removeFromDB(id) {
        const drinks = this.getFromDB();

        // Loop
        drinks.forEach((drink, index) => {
            if (id === drink.id) {
                drinks.splice(index, 1);
            }
        });
        // Set the array into local storage
        localStorage.setItem('drinks', JSON.stringify(drinks));
    }

    // Return recipes from local storage
    getFromDB() {
        let drinks;
        // Check LS
        if (localStorage.getItem('drinks') === null) {
            drinks = [];
        } else {
            drinks = JSON.parse(localStorage.getItem('drinks'));
        }
        return drinks;
    }
}