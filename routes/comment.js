const router = require('express').Router()
const CommentController = require('../controller/commentController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.get('/', authentication, CommentController.read)
// router.post('/', authentication, CommentController.create)
router.put('/comment/:id', authentication, authorization, CommentController.update)
router.delete('/:id', authentication, authorization, CommentController.delete)

module.exports = router