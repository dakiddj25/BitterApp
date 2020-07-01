const posts = require("express").Router();
const { getPosts, getUsersPosts, deletePost, editPost, createPost } = require("../queries/posts");
const { checkFirebaseToken } = require('../middleware/auth');

posts.get("/", getPosts);

posts.get("/:id", getUsersPosts);

posts.post("/", checkFirebaseToken, createPost);

posts.delete("/:id", deletePost);

posts.patch("/:id", editPost);


module.exports = posts;

