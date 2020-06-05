const db = require('./../db')

const getPosts = async (req, res, next) => {
    try {
        let posts = await db.any("SELECT  USERs.id AS UsersId, USERs.username, USER_pic, posts.id AS postID, posts.tweet FROM posts INNER JOIN users ON posts.user_id = users.id ORDER BY posts.id DESC ");
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: posts
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
        next()
    }
}
const getUsersPosts = async (req, res, next) => {
    try{
        let posts = await db.any("SELECT * FROM posts WHERE user_id=$1 ORDER BY id DESC", req.params.id);
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: posts
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
        next()
    }
}
const deletePost = async (req, res, next) => {
    try {
        let {postId} = req.params.id;
        let post = ("DELETE FROM posts WHERE id=$1 RETURNING *", postId)
        res.status(200).json({
            status: "success",
            message: "Deleted users posts",
            payload: post
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
        next()
    }
}
const editPost = async (req, res, next) => {
    try {
        let {tweet} = req.body;
        let {userId} = req. params;
        let post = await db.one("UPDATE posts SET tweet=$1, WHERE =$2", [tweet, userId])
        res.status(200).json({
            status: "success",
            message: "Edit users posts",
            payload: post
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Post does not exist",
            payload: err
        })
        next()
    }
}
const createPost = async (req, res, next) => {
    try {
        let post = await db.one(`
            INSERT INTO posts (user_id, tweet) VALUES('${req.body.user_id}', '${req.body.tweet}') RETURNING *`);
        res.status(200).json({
            status: "success",
            message: "created a new post",
            payload: post
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
        next()  
    }
}

module.exports = {getPosts, getUsersPosts, deletePost, editPost, createPost}