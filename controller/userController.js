const { User } = require('../models')
const { hashPassword, compare } = require('../helpers/bcryptjs')


class UserController{
    static register(req, res){
        const { nama, email, password } = req.body
        const hash = hashPassword(password)
        User.create({ nama, email, password })
        .then( result => {
            res.status(201).json('register telah berhasil')
        })
        .catch( err => {
            res.status(400).json(err)
        })
    }
}

module.exports = UserController