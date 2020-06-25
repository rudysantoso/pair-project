const router = require('express').Router()
const SongController = require('../controller/songController')


router.post('/', SongController.create)
router.get('/', SongController.read)
router.put('/title/:id', SongController.update)
router.delete('/:id', SongController.delete)

module.exports = router