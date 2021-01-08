/*

GOAL:

Use node, mongo, express to create API with routes to get users.
Later, secure with basic auth.

*/

const mongoose = require("mongoose");
const express = require("express");
const basicAuth = require("express-basic-auth");
const getUsersController = require("./controllers/getUsers");

// init express
const app = new express();

// specify request body is json
app.use(express.json());

// connect to mongo
mongoose.connect("mongodb://localhost/node-mongo-api", {
  useNewUrlParser: true,
});

app.get("/users", getUsersController);

app.listen(3001, () => {
  console.log("App listening on port 3001");
});
