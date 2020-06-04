const express = require("express");
const helmet = require("helmet");

const RecipesRouter = require("./recipes/recipes-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/recipes", RecipesRouter);

module.exports = server;
