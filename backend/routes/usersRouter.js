const users = require("express").Router();
const { getSingleUser ,logIn, createUser, editUser, deleteUser, getUserByEmail } = require("../queries/users");


users.get("/:id", getSingleUser);

users.get("/email/:email", getUserByEmail);

users.post("/login", logIn); // get user by username

users.post("/", createUser); 

users.patch("/:id", editUser);

users.delete("/:id", deleteUser);


module.exports = users;