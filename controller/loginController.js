const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

class loginController {
    static login(req, res) {
        res.render('login')
    }
    // static masukLogin(req, res, next) {
    //     User.
    // }
    static logout(req, res) {
        res.clearCookie('token');
        res.redirect('/')
    }
}

module.exports = loginController