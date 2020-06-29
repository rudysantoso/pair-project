const { User } = require('../models')

class loginController {
    static login(req, res) {
        res.render('login')
    }
    static masukLogin(req, res, next) {
        User.
    }
}

module.exports = loginController