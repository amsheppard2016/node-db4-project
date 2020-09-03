exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("recipes_ingredients")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("recipes_ingredients").insert([
                { recipe_id: 1, ingredient_id: 1, quantity: 6 },
                { recipe_id: 2, ingredient_id: 2, quantity: 2 },
                { recipe_id: 2, ingredient_id: 3, quantity: 1 },
                { recipe_id: 3, ingredient_id: 4, quantity: 1 },
            ]);
        });
};
