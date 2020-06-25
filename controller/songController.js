const { Song } = require('../models')

class SongController{
    static read(req, res, next){
        Song.findAll()
        .then( data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(400).json(err)
        })
    }

    static create(req, res, next){
        const { Title, Artist, Genre, comments } = req.body
        Song.create({ Title, Artist, Genre, comments })
        .then( data => {
            res.status(201).json({ msg: 'data song berhasil dibuat'})
        })
        .catch( err => {
            res.status(400).json(err)
        })
    }
    
    static update(req, res){
        const { Title } = req.body
        const { id } = req.params
        Song.update({ Title }, {where: { id }})
        .then( data => {
            res.status(200).json({ msg: 'Title berhasil diupdate'})
        })
        .catch( err => {
            res.status(400).json(err)
        })
    }

    static delete(req, res){
        const { id } = req.params
        Song.destroy({ where: { id }})
        .then( data =>{
            res.status(200).json({ msg: 'Song berhasil dihapus'})
        })
        .catch( err => {
            res.status(400).json(err)
        })
    }
}

module.exports = SongController