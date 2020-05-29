const functions = require("firebase-functions");
const admin = require("firebase-admin");
var express = require('express');
var app = express();

app.get('/', async function (req, res) {
  const recipes = await admin
        .firestore()
        .collection("recipes")
        .get()
        .then((res) => {
          return res.docs.map((x) => x.data());
        });
      res.send(recipes);
})

app.get('/:id', async function (req, res) {
    const recipes = await admin
          .firestore()
          .collection("recipes")
          .doc(req.params.id)
          .get()
          .then((res) => {
            return res.data();
          });
        res.send(recipes);
  })

app.post('/', async function (req, res) {
  const addRecipe = await admin
        .firestore()
        .collection("recipes")
        .add(req.body)
        .then((res) => {
          return res.id;
        });
      res.send({ id: addRecipe });
})


exports.recipe = functions.https.onRequest(app);


