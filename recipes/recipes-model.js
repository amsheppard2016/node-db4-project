const db = require("../data/db-config.js");

function getRecipes() {
    return db("recipes");
}

async function getShoppingList(id) {
    const shoppingList = await db("recipes_ingredients as r")
        .join("ingredients as i", "r.ingredient_id", "i.id")
        .select("i.ingredient_name", "r.quantity")
        .where("r.recipe_id", id);
    return shoppingList;
}

async function getInstructions(id) {
    const instructions = await db("instructions as in")
        .where("in.recipe_id", id)
        .orderBy("in.step_order");
    return instructions;
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
};
