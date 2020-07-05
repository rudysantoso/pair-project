const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./routes/index')
const Cookie = require('cookie-parser')
const session = require('express-session')


const app = express()
app.set('view engine', 'ejs')
app.use(cors())
app.use(Cookie())
app.use(session({
  secret: 'rudyyyyy',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'));

app.use('/', router)

const port = 3000
app.listen(port, () => {
  console.log(`Telah terkoneksi didalam port: ${port}`)
})