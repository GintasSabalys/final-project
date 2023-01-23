const jwt = require("jsonwebtoken");
require('dotenv').config();

module.exports = (req, res, next) => {
    const token = req.header('auth-token')

    if(!token){
        return res.status(401).json('No token found')
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET)
        req.id = decoded.id
        next()
    } catch (error) {
        console.log(error)
        res.status(500);
    }
}