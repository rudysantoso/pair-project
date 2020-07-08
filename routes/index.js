const router = require('express').Router()
const user = require('./user')
const song = require('./song')
const comment = require('./comment')
const SongController = require('../controller/songController')
const request = require('request');
const UserController = require('../controller/userController')
const registerController = require('../controller/registerController')
const { route } = require('./user')
const loginController = require('../controller/loginController')
const CommentController = require('../controller/commentController')
const homeloginController = require('../controller/homeloginController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')
// router.get('/', SongController.read)
router.post('/', SongController.create)
router.get('/login', loginController.login)

router.use(function (req, res, next) {
    res.locals.token = req.signedCookies.token;
    next();
});
router.get('/', (req, res) => {
    console.log(req.query.nama)
    res.render('home')
})
router.get('/library', SongController.read)
router.get('/addsong', (req, res) => {
    res.render('addsong')
})
router.get('/sign up', UserController.register)
router.get('/detail', CommentController.read)
router.get('/register', registerController.register)

// Detail
router.get('/detail-song/:id', SongController.detailSong)

router.get('/library-title/:library', SongController.findTitle)

// Admin
router.get('/admin', SongController.Song)
router.get('/addsong', SongController.create)
router.get('/logout', loginController.logout)
router.get('/addreview/:id', CommentController.createDuls)
router.post('/addreview/:id', authentication, CommentController.createPost)
router.get('/detail-song/:id', CommentController.findOneReview)


router.get('/update-song/:id', SongController.update)
// router.get('/library/:id', SongController.update)
router.get('/:id', SongController.delete)

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