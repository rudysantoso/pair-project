const { Comment } = require('../models')

class CommentController{
    static read(req, res){
        Comment.findAll()
        .then( data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(400).json(err)
        })
    }

    
}

module.exports = CommentController