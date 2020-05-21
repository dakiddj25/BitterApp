const { getLikesByUser, getLikesPost, createLikes, deleteLikes } = require("../queries/likes");

likes.get("/:id", getLikesByUser);

likes.get("/:post_id", getLikesPost);

likes.post("/", createLikes);

likes.delete("/:id", deleteLikes);

module.exports = likes;

