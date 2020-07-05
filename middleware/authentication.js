const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

function authentication(req, res, next) {
    const decode = verifyToken(req.cookies.token)
    User.findByPk(decode.id)
        .then(data => {
            if (data) {
                req.user = decode
                next()
            } else {
                next({ status: 400, msg: 'kamu belum login, login dahulu!' })
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = authentication