const { verifyToken } = require('../helpers/jwt')
const { Song } = require('../models')
const { verify } = require('jsonwebtoken')

class homeloginController {
    static login(req, res) {
        res.render('library')
    }
    // static masukLogin(req, res, next) {
    //     User.
    // }
    // static libraryLogout(req, res) {
    //     Song.findAll()
    //         .then(result => {
    //             let data_user = verifyToken(req.cookie.accesstoken)
    //             res.render('librarylogin', { result, data_user })
    //         })
    //         .catch(data => {
    //             res.status(400).json(err)
    //         })
}

module.exports = homeloginController