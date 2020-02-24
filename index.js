const functions = require("firebase-functions");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./src/schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.graphql = functions.https.onRequest(app);
