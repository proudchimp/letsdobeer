const functions = require("firebase-functions");
const Service = require("../service/RecipeService");
var express = require("express");
var app = express();

app.get("/", async (req, res) => await res.send(await Service.get()));

app.get("/:id", async (req, res) =>
  res.send(await Service.getById(req.params.id))
);

app.post("/", async (req, res) => res.send(await Service.add(req.body)));

exports.recipe = functions.https.onRequest(app);
