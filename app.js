const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./routes/index')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use('/', router)

const port = 3000
app.listen(port, () => {
  console.log(`Telah terkoneksi didalam port: ${port}`)
})