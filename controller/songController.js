const { Song } = require('../models')

class SongController {
    static read(req, res, next) {
        Song.findAll()
            .then(data => {
                res.render('library', { data })
                // res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static create(req, res, next) {
        const { Title, Artist, Genre, comments } = req.body
        Song.create({ Title, Artist, Genre, comments })
            .then(data => {
                res.render('addsong', { data })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static update(req, res) {
        const { Title, Artist, Genre, comments } = req.body
        const { id } = req.params
        Song.update({ Title, Artist, Genre, comments }, { where: { id } })
            .then(data => {
                res.redirect('/admin')
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static updaterender(req, res) {
        const { id } = req.params
        Song.findByPk(id)
            .then(data => {
                res.render('updatesong', { data })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static delete(req, res) {
        const { id } = req.params
        Song.destroy({ where: { id } })
            .then(data => {
                res.redirect('/admin')
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static detailSong(req, res, next) {
        const { id } = req.params
        const { Title, Artist, Genre, comments } = req.body
        Song.findAll({ where: { id } }, { Title, Artist, Genre, comments })

            .then(data => {
                //  console.log(data)
                res.render('detail', { data })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static findTitle(req, res, next) {
        const { Title } = req.params
        const { Artist, Genre, comments } = req.body
        console.log(Title)
        Song.findAll({ where: { Title } }, { Title, Artist, Genre, comments })
            .then(data => {
                res.render('library', { data })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static Song(req, res, next) {
        const { Title, Artist, Genre, comments } = req.body
        Song.findAll({ Title, Artist, Genre, comments })
            .then(data => {
                console.log(data)
                res.render('admin', { data })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
}

module.exports = SongController