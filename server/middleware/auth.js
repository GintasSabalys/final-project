const jwt = require("jsonwebtoken");
require('dotenv').config();

// Middleware to check if user have token
exports.checkIfUser = (req, res, next) => {
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

// Middleware to check if user has token and has admin role
exports.checkIfAdmin = (req, res, next) => {
    const token = req.header('auth-token')

    if(!token){
        return res.status(401).json('No token found')
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        if (req.role !== 'admin') return res.status(403); // 403 - forbidden
        req.id = decoded.id
        next()
    } catch (error) {
        console.log(error)
        res.status(500);
    }
}