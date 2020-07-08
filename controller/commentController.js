const { Comment, Song, User } = require('../models')


class CommentController {
    static read(req, res) {
        Song.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
    static findOneReview(req, res) {
        let song
        let user_id
        User.findOne({
            where: {
                name: req.user.nama
            }
        })
            .then(user => {
                user_id = user.dataValues.id
                return song
                    .findByPk(req.params.id, {
                        include: [
                            {
                                model: comments,
                                include: [user]
                            }
                        ]
                    })
            })
            .then(foundSong => {
                song = foundSong
                res.json(song)
                // return song
            })
    }
    static createDuls(req, res) {
        Song.findOne({ id: req.params.id })
            .then(data => {
                // res.json(data)
                res.render('addreview', { data })
            })
            .catch(err => {
                res.redirect(`/detail-song${req.params.id}`)
            })
    }
    static createPost(req, res) {
        let user_id
        User.findOne({
            where: {
                id: req.user.id
            }
        })
            .then(user => {
                user_id = user.dataValues.id
                return Comment
                    .create({
                        reviewTitle: req.body.reviewTitle,
                        rating: req.body.rating,
                        song_id: req.params.id,
                        user_id: req.user.id,
                    })
            })
            .then(created => {
                res.redirect(`/detail-song/${req.params.id}`)
            })
            .catch(err => {
                res.status(400).json(err)
                // res.redirect(`/detail/${req.params.id}/createDuls`)
            })
    }
    static update(req, res) {
        const { Content } = req.body
        const { id } = req.params
        Comment.update({ Content }, { where: { id } })
            .then(data => {
                res.status(200).json({ msg: 'Comment berhasil diperbaharui' })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static delete(req, res) {
        const { id } = req.params
        Comment.destroy({ where: { id } })
            .then(data => {
                res.status(200).json({ msg: 'Comment berhasil dihapus' })
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

}

module.exports = CommentController