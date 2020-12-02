const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongoose')
const requireDir = require('require-dir')
const app = express()

app.use(express.json())

mongodb.connect(
    'mongodb://localhost:27017/territories',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
)
requireDir('./models')
app.use("/territories", require('./routes'))

app.listen(3000)
