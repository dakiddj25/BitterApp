const db = require('../db/index');



const getSingleUser = async (req, res, next) => {
    try {
        let userId = req.params.id;
        let user = await db.one(`SELECT * FROM users WHERE id=${userId}`);
        res.status(200).json({
            status: "success",
            message: "single user",
            payload: user
            
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Couldn't get User",
            payload: err
        })
        next()
    }
}

const logIn = async (req, res, next) => {
    try{
        let user = await db.one(
            `SELECT * FROM users WHERE userName = '${req.body.username}' AND password = '${req.body.password}'`
            );
            res.status(200).json({
                user, 
                status: "success",
                message: "USER"
            })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Username or Password does not exist",
            payload: err
        })
        next(err);
    }
}


const deleteUser = async (req, res, next) => {
    try {
        let {userId} = req.params.id;
        let user = ("DELETE FROM users WHERE id=$1 RETURNING *", userId)
        res.status(200).json({
            status: "success",
            message: " user deleted",
            payload: user
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

const editUser = async (req, res, next) => {
    try {
        let {userName, user_pic} = req.body;
        let userId = req.params.id;
        let user = await db.one(`UPDATE users SET  userName='${userName}', user_pic='${user_pic}' WHERE id=${userId} RETURNING *`);
        res.status(200).json({
            status: "success",
            message: "User updated",
            payload: user
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

const createUser = async (req, res, next) => {
    try {
        let user = await db.one(
            `INSERT INTO users (firstName, lastName, userName, email, password, user_pic) VALUES('${req.body.firstName}', '${req.body.lastName}', '${req.body.userName}', '${req.body.email}', '${req.body.password}', '${req.body.user_pic}') RETURNING *`)
        res.status(200).json({
            user,
            status: "success",
            message: "added New User"
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


const getUserByEmail = async (req, res, next) => {
    try{
        let userEmail = req.params.email;
        let user = await db.one(
            `SELECT id FROM users WHERE email = '${userEmail}'`
            );
            res.status(200).json({ 
                status: "success",
                message: "USER Found!",
                payload: user
            })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Username or Password does not exist",
            payload: err
        })
        next(err);
    }
}

module.exports = {getSingleUser, logIn, deleteUser, editUser, createUser, getUserByEmail}