const { Song } = require('../models')

class SongController{
    static read(req, res, next){
        Song.findAll({})
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
}

module.exports = SongController