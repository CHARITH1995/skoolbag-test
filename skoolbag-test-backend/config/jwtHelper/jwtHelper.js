const jwt = require('jsonwebtoken');
const con = require('../connection/connection');
require('dotenv').config()

module.exports.verifyJwtToken = (req, res, next) => {
    var token;
    if (req.headers.authorization)
        token = req.headers.authorization

    if (!token){
        console.log(token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    }
    else {
        jwt.verify(token,process.env.SECRETKEY,
            (err, decoded) => {
                
                if (err)
                    return res.status(500).send('Token authentication failed.');
                else {
                    console.log(decoded)
                    req.body['decode']=decoded;
                    next();
                }
            }
        )
    }
}