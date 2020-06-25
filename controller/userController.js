const { User } = require('../models')
const { hashPassword, compare } = require('../helpers/bcryptjs')
const { generateToken } = require('../helpers/jwt')

class UserController{
    static register(req, res, next){
        const { nama, email, password } = req.body
        const hash = hashPassword(password)
        User.create({ nama, email, password:hash })
        .then( result => {
            res.status(201).json('register telah berhasil')
        })
        .catch( err => {
            res.status(400).json(err)
        })
    }
    static login(req, res, next){
        const { nama, password } = req.body
        console.log(req.body)
        User.findOne({where: { nama }})
        .then(data => {
            const user = data.dataValues
            if(user && compare(password, user.password)){
                let payload = {id: user.id, nama: user.nama }
                let token = generateToken(payload)
                res.status(200).json({ token })
            }else{
                res.status(400).json('msg: data tidak ada')
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }
}

module.exports = UserController