const express = require("express");

const db = require("./recipes-model.js");

const router = express.Router();

router.get("/", (req, res) => {
    db.getRecipes()
        .then((recipe) => {
            res.json(recipe);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get recipes" });
        });
});

router.get("/:id/shoppinglist", (req, res) => {
    const { id } = req.params;

    db.getShoppingList(id)
        .then((list) => {
            if (list.length) {
                res.json(list);
            } else {
                res.status(404).json({
                    message: "Could not find list for given recipe",
                });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get recipe list" });
        });
});

router.get("/:id/instructions", (req, res) => {
    const { id } = req.params;

    db.getInstructions(id)
        .then((instructions) => {
            if (instructions.length) {
                res.json(instructions);
            } else {
                res.status(404).json({
                    message: "Could not find instructions for given recipe",
                });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "failed to get instruction list" });
        });
});

module.exports = router;
