const jwt = require ('jsonwebtoken');
const User = require('../models/user.model.js')
const Role = require('../models/role.model');

verifyToken = async (req, res, next) => {
    try {
        const token = await req.headers["x-access-token"];
        if (!token) return res.status(403).json({ message: 'No Token Provided ! '});
        const decodedToken = await jwt.verify(token, process.env.JWT_KEY);
        req.userId =  decodedToken.id;
        return next();
    } catch (error) {
        res.status(401).json({ message :' Unauthorized'});
    }
};

isAdmin = async (req, res, next) => {
    try {
        const foundUser = await User.findById(req.userId)
        const foundRole = await Role.find({_id: { $in : foundUser.roles}})
        for (let i =0; i<foundRole.length; i++) {
            if (foundRole[i].name === "admin") { return next();}
            return res.status(403).json({ message: 'Require Admin Role'});
        }
    } catch (error) {
        return res.status(401).json ({ message: error});
    }
}


const authJwt = {
    verifyToken,
    isAdmin
};
module.exports = authJwt;