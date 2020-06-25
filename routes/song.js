const router = require('express').Router()
const SongController = require('../controller/songController')

router.get('/', SongController.read )
router.post('/', SongController.create )

module.exports = router