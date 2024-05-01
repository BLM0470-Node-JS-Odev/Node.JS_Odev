const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const decoded = jwt.verify(req.body.token, "JWTSECRETKEY");
        req.userData = decoded;
        console.log("verify acccess");
        next();
    } catch (error) {
        console.log("verify deny");
        return res.status(401).json({
            message: "token is invalid",
            error: error
        })
    }
};