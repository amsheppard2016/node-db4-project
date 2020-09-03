exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("instructions")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("instructions").insert([
                {
                    step_name: "Fill saucepan with water",
                    recipe_id: 1,
                    step_order: 1,
                },
                {
                    step_name: "add eggs and heat on medium to boil",
                    recipe_id: 1,
                    step_order: 2,
                },
                {
                    step_name: "turn off heat and let sit for 10 min",
                    recipe_id: 1,
                    step_order: 3,
                },
                {
                    step_name: "run cold water over eggs and peel",
                    recipe_id: 1,
                    step_order: 4,
                },
                {
                    step_name: "put 2 pieces into toaster on medium",
                    recipe_id: 2,
                    step_order: 1,
                },
                {
                    step_name: "add peanut butter to toast",
                    recipe_id: 2,
                    step_order: 2,
                },
                {
                    step_name:
                        "fill small pot half full of water and bring to boil",
                    recipe_id: 3,
                    step_order: 1,
                },
                { step_name: "add pasta", recipe_id: 3, step_order: 2 },
                {
                    step_name: "cook for 10-13 mins",
                    recipe_id: 3,
                    step_order: 3,
                },
            ]);
        });
};
