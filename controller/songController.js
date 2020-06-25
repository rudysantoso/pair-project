const { Song } = require('../models')

class SongController{
    static findAll(req, res, next){
        const { Title, Artist, Genre, comment } = req.body
        console.log(req.body)
        Song.findAll({ Title, Artist, Genre, comment })
            .then(dataSong => {
                res.status(200).json(dataSong)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static create(req, res, next){
        const { Title, Artist, Genre, comment } = req.body
        Song.create({ Title, Artist, Genre, comment })
        .then( data => {
            res.status(201).json(data)
        })
        .catch( err => {
            res.status(400).json(err)
        })
    }
    static 
}

module.exports = SongController