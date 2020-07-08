const { User } = require('../models')
const { hashPassword, compare } = require('../helpers/bcryptjs')
const { generateToken } = require('../helpers/jwt')
const { cookie } = require('request')

class UserController {
    static register(req, res, next) {
        const { nama, email, password } = req.body
        const hash = hashPassword(password)
        User.create({ nama, email, password: hash })
            .then(result => {
                console.log('masuk')
                res.status(201).json({ msg: 'register telah berhasil'})
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static login(req, res, next) {
        const { nama, password } = req.body
        User.findOne({ where: { nama } })
            .then(data => {
                const user = data.dataValues
                console.log(user)
                if (user && compare(password, user.password)) {
                    let payload = { id: user.id, nama: user.nama }
                    let token = generateToken(payload)
<<<<<<< HEAD
                    res.cookie('token', token)
                    res.redirect('/library')
                    // res.status(200).json({ token })
=======
                    // localStorage.setItem('token', token)
                    // res.redirect('/')
                    // console.log('login masuk')
                    // console.log( token )
                    res.status(200).json({ msg: token })
>>>>>>> b1839700c45227b3f83fa456e1a87158aa8c6526
                } else {
                    res.status(400).json('msg: username / password is invalid')
                }
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static read(req, res){
        User.findAll()
            .then( data => {
                res.status(200).json( data )
            })
            .catch( err => {
                res.status(400).json({ msg: err })
            })    
    }
}

module.exports = UserController