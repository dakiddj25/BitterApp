const comment = require("express").Router();
const { getComment, getPostComment, deleteComment, editComment, createComment } = require("../queries/comments");
const { checkFirebaseToken } = require('../middleware/auth');

comment.get("/", getComment);

comment.get("/:id", getPostComment);

comment.post("/", checkFirebaseToken, createComment);

comment.delete("/:id", deleteComment);

comment.patch("/:id", editComment);

module.exports = comment;