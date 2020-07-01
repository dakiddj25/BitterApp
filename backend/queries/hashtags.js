const db = require('../db/index')


const getHashtagByHashtag = async (req, res, next) => {
    try {
        let hashtagId = req.body.hashtag
        // console.log(hashtagId);
        let hashtag = await db.any(`SELECT * FROM hashtags JOIN posts ON hashtags.post_id = posts.id LEFT JOIN users ON posts.user_id = users.id WHERE hashtag LIKE '%${hashtagId}%' ORDER BY posts.id DESC`);
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: hashtag
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Not Getting Hashtag",
            payload: err
        })
        next()
    }
}

const deleteHashtag = async (req, res, next) => {
    try {
        let hashtagId = req.params.id;
        let hashtag = ("DELETE FROM hastags WHERE id=$1 RETURNING *", hashtagId)
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: hashtag
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



const createHashtag = async (req, res, next) => {
    try {
        let hashtag = await db.one("INSERT INTO hashtags (post_id, hashtag) VALUES (${post_id}, ${hashtag}) RETURNING *", req.body)
        res.status(200).json({
            status: "success",
            message: "created hashtag",
            payload: hashtag
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

module.exports = {getHashtagByHashtag, deleteHashtag, createHashtag}