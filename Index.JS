// Method to view all recipes
    viewRecipes() {
        if (this.recipes.length === 0) {
            console.log('No recipes found.');
        } else {
            this.recipes.forEach(recipe => recipe.display());
        }
    }

    // Method to delete a recipe by name
    deleteRecipe(name) {
        this.recipes = this.recipes.filter(recipe => recipe.name !== name);
    }

    // Menu class
class Menu {
    constructor() {
        this.recipes = []; // Array to store recipes
    }

    // Method to add a new recipe
    addRecipe(name, ingredients, instructions) {
        const newRecipe = new Recipe(name, ingredients, instructions);
        this.recipes.push(newRecipe);
    }
}

class Recipe {
    constructor(name, ingredients, instructions) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }

    display() {
        console.log(`Recipe: ${this.name}`);
        console.log(`Ingredients: ${this.ingredients.join(', ')}`);
        console.log(`Instructions: ${this.instructions}`);
        console.log('------------------------');
    }
}

// Create a new Menu instance
let menu = new Menu();

//recipes
menu.addRecipe('Chiken Alfredo', ['Penne', 'Heavy Cream', 'Parmesan', 'Chicken'], 'Cook penne; mix heavy cream, Parmesan, and cooked chicken; toss with hot penne.');
menu.addRecipe('Smoothie', ['Berries', 'Sugar', 'Milk', 'Ice'], 'Add a cup of milk and berrie to a blender with 2 tsps of sugar and a cup of ice. Blen until all ingredients are incorporated.');

// View the recipes
console.log('Initial Recipes:');
menu.viewRecipes();

// Add a new recipe
menu.addRecipe('Chicken Fajitas', ['Chicken breast', 'Bell peppers', 'Onion', 'Salt'], 'Sautee the onions and bellpeppers, season chicken and grill until fully cooked and incorporate together.');

// View all recipes after adding
console.log('Recipes after adding new recipe:');
menu.viewRecipes();

// Delete a recipe
menu.deleteRecipe('Smoothie');

// View all recipes after deleting
console.log('Recipes after deleting "Smoothie":');
menu.viewRecipes();


