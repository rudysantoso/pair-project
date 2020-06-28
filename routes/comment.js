const router = require('express').Router()
const CommentController = require('../controller/commentController')

router.get('/', CommentController.read)

module.exports = router