import uuidv4 from 'uuid/v4'

const loadRecipes = () => {
     if (localStorage.getItem('recipes')) {
        return JSON.parse(localStorage.getItem('recipes'))
     } else {
         return []
     }
}

const getRecipes = () => {
    return loadRecipes()
}

const saveRecipes = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

const addIngredient = (id, ingredientName) => {
    ingredientName = ingredientName.trim().toLowerCase()
    let recipe = recipes.find(recipe => recipe.id === id)
    if (recipe) {
        recipe.ingredients.push({
            name: ingredientName,
            inStock: false
        })
        saveRecipes()  
    }
    // return ingredientName
}

const createRecipe = title => {
    title = title.trim().toLowerCase()
    let recipe = {
        id: uuidv4(),
        title,
        steps: '',
        ingredients: []
    }
    recipes.push(recipe)
    saveRecipes()
    // return recipe
}

let recipes = loadRecipes()

export { getRecipes, createRecipe, addIngredient }