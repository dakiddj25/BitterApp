const hashtag =  require("express").Router();
const { getHashtagByHashtag, createHashtag, deleteHashtag } = require("../queries/hashtags");

hashtag.post("/getHashtag", getHashtagByHashtag);

hashtag.post("/", createHashtag);

hashtag.delete("/:id", deleteHashtag);


module.exports = hashtag;