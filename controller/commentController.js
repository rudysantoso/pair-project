const { Comment } = require('../models')

class CommentController {
    static read(req, res) {
        Comment.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }

    static create(req, res) {
        const { song_id, user_id, Content } = req.body
        Comment.create({ song_id, user_id, Content })
            .then(data => {
                res.status(201).json({ msg: 'berhasil membuat Comment' })
            })
            .catch(err => {
                res.status(400).json(err)
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