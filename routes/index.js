const router = require('express').Router()
const user = require('./user')
const song = require('./song')
const comment = require('./comment')
const SongController = require('../controller/songController')

router.get('/', SongController.findAll)
router.get('/', (req, res) => {
    res.render('home')
})

router.use('/user', user)
router.use('/song', song)
router.use('/comment', comment)

module.exports = router