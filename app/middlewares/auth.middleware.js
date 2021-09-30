require('dotenv').config();
const jwt = require('jsonwebtoken');




const veryfyToken = (req, res, next) => {
    

    try {
        const { authorization } = req.headers;

        if (authorization) {
            //extract jwttoken from header
            const token = authorization.split(' ')[1];
            //check validity of the token
            const decode = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            req.userData = decode;
            next();


        } else {
            return res.status(401).json({ status: false, message: 'Token not found', data: error })
            
        }


    } catch (err) {
      
        return res.status(402).json({ status: false, message: 'Token not valid', data: err });
    }






}
// const veryfyUser = (req, res, next) => {
//     next();
// }

module.exports = {
    veryfyToken
    // ,
    // veryfyUser
}