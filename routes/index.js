const router = require('express').Router()
const user = require('./user')
const song = require('./song')
const comment = require('./comment')
const SongController = require('../controller/songController')
const request = require('request');
// router.get('/', SongController.read)
router.post('/', SongController.create)


router.get('/', (req, res) => {
    console.log(req.query.nama)
    res.render('home')
})
router.get('/library', SongController.read)
router.get('/addsong', (req, res) => {
    res.render('addsong')

    router.use('/user', user)
    router.use('/song', song)
    router.use('/comment', comment)


    router.get('/contoh_api', (req, res) => {

        request('https://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=3&country=ina&apikey=56f42e4bf76a4ab571f3168a2f028d5c', function (error, response, body) {
            // console.log(JSON.stringify(response))
            let data = JSON.parse(body)
            res.json(data)
        });
    })

    module.exports = router