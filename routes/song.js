const router = require('express').Router()
const SongController = require('../controller/songController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.get('/', SongController.read)
router.get('/form', (req, res) => {
  res.render('formsong')
})

router.post('/', authentication, SongController.create)
router.get('/', SongController.read)
router.put('/title/:id', authentication, authorization, SongController.update)
router.delete('/:id', authentication, authorization, SongController.delete)

module.exports = router