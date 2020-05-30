const functions = require("firebase-functions");
const admin = require("firebase-admin");
const Recipe = require("./public/resource/RecipeResource");
admin.initializeApp();

exports.recipe = functions.https.onRequest(Recipe.recipe);
