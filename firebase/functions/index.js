const functions = require("firebase-functions");
const admin = require("firebase-admin");
const Recipe = require("./public/route/RecipeRoute");
admin.initializeApp();

exports.recipe = functions.https.onRequest(Recipe.recipe);
