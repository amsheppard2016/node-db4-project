exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("ingredients")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("ingredients").insert([
                { ingredient_name: "eggs" },
                { ingredient_name: "slices of bread" },
                { ingredient_name: "tablespoon of peanut butter" },
                { ingredient_name: "1 cup of elbow noodles" },
            ]);
        });
};
