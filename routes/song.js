const router = require('express').Router()
const SongController = require('../controller/songController')


router.post('/', SongController.create )

module.exports = router