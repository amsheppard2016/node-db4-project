exports.up = function (knex) {
    return knex.schema

        .createTable("ingredients", (tbl) => {
            tbl.increments("id");
            tbl.string("ingredient_name", 128).notNullable().unique();
        })
        .createTable("recipes", (tbl) => {
            tbl.increments("id");
            tbl.string("recipe_name", 128).notNullable().unique();
        })
        .createTable("recipes_ingredients", (tbl) => {
            tbl.integer("recipe_id")
                .notNullable()
                .unsigned()
                .references("recipes.id")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            tbl.integer("ingredient_id")
                .notNullable()
                .unsigned()
                .references("ingredients.id")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            tbl.integer("quantity").notNullable();
            tbl.primary(["recipe_id", "ingredient_id"]);
        })
        .createTable("instructions", (tbl) => {
            tbl.increments("id");
            tbl.string("step_name").notNullable();
            tbl.integer("recipe_id")
                .notNullable()
                .unsigned()
                .references("recipes.id")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            tbl.integer("step_order").notNullable();
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("instructions")
        .dropTableIfExists("recipes_ingredients")
        .dropTableIfExists("recipes")
        .dropTableIfExists("ingredients");
};
