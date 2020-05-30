const admin = require("firebase-admin");
const collection = "recipes"
exports.get = async () => {
  return await admin
    .firestore()
    .collection(collection)
    .get()
    .then((res) => {
      return res.docs.map((x) => {
        return { id: x.id, recipe: x.data() };
      });
    });
};

exports.getById = async (id) => {
  return await admin
    .firestore()
    .collection(collection)
    .doc(id)
    .get()
    .then((res) => {
      return { id: res.id, recipe: res.data() };
    });
};

exports.add = async (recipe) => {
  return await admin
    .firestore()
    .collection(collection)
    .add(recipe)
    .then((res) => {
      return res.id;
    });
};
