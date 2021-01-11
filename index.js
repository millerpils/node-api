/*
Overview:

Uses node, mongo and express to create CRUD API with routes 
to create, read, update and delete users.
*/

const mongoose = require("mongoose");
const express = require("express");
const basicAuth = require("express-basic-auth");
const bodyParser = require("body-parser");
const newUserController = require("./controllers/createUser");
const getUsersController = require("./controllers/readUser");
const updateUsersController = require("./controllers/updateUser");
const deleteUsersController = require("./controllers/deleteUser");
const { urlencoded } = require("body-parser");

// init express
const app = new express();

// use body-parser to parse req.body
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// specify request body is json - app.use(bodyParser.json()) might also work
app.use(express.json());

// connect to mongo
mongoose.connect(
  "mongodb://localhost/node-mongo-api",
  {
    useNewUrlParser: true,
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

// CREATE
app.post("/users/create", newUserController);

// READ
app.get("/users", getUsersController);

// UPDATE
app.put("/users/update", updateUsersController);

// DELETE
app.delete("/users/delete", deleteUsersController);

app.listen(3001, () => {
  console.log("App listening on port 3001");
});
