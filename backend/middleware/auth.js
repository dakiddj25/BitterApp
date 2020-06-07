const admin = require('../firebase')

const checkFirebaseToken = async (req, res, next) => {
    try {
        const token = req.headers.authtoken;
        const decodeToken = await admin.auth().verifyIdToken(token);
        const uid = decodeToken.uid;
        req.user.id = uid;
        next();
    }
    catch(err){
        console.log("code brokew",err);
        res.status(401).json({message: "No Auth User"});
    }
}

module.exports = {
    checkFirebaseToken
}