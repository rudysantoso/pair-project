const jwt = require('jsonwebtoken')

function generateToken(payload){
    return jwt.sign(payload, 'sEmU4')
}
function verifyToken(token){
    return jwt.verify(token, 'sEmU4')
}

module.exports = {
    generateToken, verifyToken
}