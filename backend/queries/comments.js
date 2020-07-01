const db = require('./../db')

const getComment = async (req, res, next) => {
    try {
        let comments = await db.any("SELECT  * from comments ORDER BY comments.id DESC ");
        res.status(200).json({
            status: "success",
            message: "all users Comments",
            payload: comments
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
const getPostComment = async (req, res, next) => {
    try{
        
        let comments = await db.any("SELECT USERs.username, USER_pic, comments.comment FROM comments INNER JOIN users ON comments.user_id = users.id WHERE comments.post_id = $1 ORDER BY comments.id DESC", req.params.id);
        // let comments = await db.any("SELECT * from comments ORDER BY comments.id DESC ");
        res.status(200).json({
            status: "success",
            message: "all users comments",
            payload: comments
        })
    } catch (err){
        res.status(400).json({
            status: "Error Somethings Not right",
            message: "Error",
            payload: err
        })
        next()
    }
}
const deleteComment = async (req, res, next) => {
    try {
        let {commentsId} = req.params.id;
        let comments = ("DELETE FROM comments WHERE id=$1 RETURNING *", commentsId)
        res.status(200).json({
            status: "success",
            message: "Deleted users comments",
            payload: comments
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
const editComment = async (req, res, next) => {
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
const createComment = async (req, res, next) => {
    try {
        console.log(req.body)
        let comment = await db.one("INSERT INTO comments (post_id, user_id, comment) VALUES(${post_id}, ${user_id}, ${comment}) RETURNING *", req.body);
        res.status(200).json({
            status: "success",
            message: "created a new comment",
            payload: comment
        })
    } catch (err){
        console.log(err)
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
        next()  
    }
}

module.exports = {getComment, getPostComment, deleteComment, editComment, createComment}