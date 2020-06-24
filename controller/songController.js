const { Song } = require('../models')

class SongController{
    static create(req, res){
        const { Title, Artist, Genre, comment } = req.body
        Song.create({ Title, Artist, Genre, comment })
        .then( data => {
            res.status(201).json({ msg: 'data song berhasil dibuat'})
        })
        .catch( err => {
            res.status(400).json(err)
        })
    }
}

module.exports = SongController