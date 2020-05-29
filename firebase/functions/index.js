const functions = require("firebase-functions");
const admin = require("firebase-admin");
const recipe = require("./public/Recipe");
admin.initializeApp();

exports.recipe = functions.https.onRequest(recipe.recipe);
