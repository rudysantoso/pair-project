const router = require('express').Router()
const user = require('./user')
const song = require('./song')
const comment = require('./comment')

router.use('/user', user)
router.use('/song', song)
router.use('/comment', comment)

module.exports = router