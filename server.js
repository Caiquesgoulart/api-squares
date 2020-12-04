const express = require('express')
const mongodb = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

mongodb.connect(
    'mongodb://localhost:27017/territories',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
)
requireDir('./models')
app.use("/", require('./routes'))

app.listen(3000)
