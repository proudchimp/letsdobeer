const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.getUsers = functions.https.onRequest(async (request, response) => {
  const listUsers = await admin
    .firestore()
    .collection("users")
    .get()
    .then((res) => {
      return res.docs.map((x) => x.data());
    });
  response.send(listUsers);
});
