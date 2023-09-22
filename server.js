const express = require('express');
const recipes = require('./data/recipes');

const app = express();

// Define your endpoints

// Endpoint to get all recipes
app.get('/recipes', (req, res) => { 
    const recipeList = recipes.map((recipe) => ({
        id: recipe.id,
        name: recipe.name,
    }));
    res.json(recipeList);
});

// Endpoint to get a recipe by ID
app.get('/recipes/:id', (req, res) => { 
    const recipeId = parseInt(req.params.id);
    const recipe = recipes.find(recipe => recipe.id === recipeId);
    if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
    }    
    res.json(recipe);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});