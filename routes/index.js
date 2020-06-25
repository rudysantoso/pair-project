const router = require('express').Router()
const user = require('./user')
const song = require('./song')

router.use('/user', user)
router.use('/song', song)

module.exports = router