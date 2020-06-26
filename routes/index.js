const router = require('express').Router()
const user = require('./user')
const song = require('./song')

router.get('/', (req, res) => {
    res.render('home')
})

router.use('/user', user)
router.use('/song', song)

module.exports = router