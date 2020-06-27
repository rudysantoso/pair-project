const router = require('express').Router()
const CommentController = require('../controller/commentController')

router.get('/', CommentController.read)
router.post('/', CommentController.create)
router.put('/comment/:id', CommentController.update)
router.delete('/:id', CommentController.delete)

module.exports = router