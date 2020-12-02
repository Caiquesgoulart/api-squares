const express = require('express')
const routes = express.Router()

const territories = require('./controllers/squareController.js')

routes.get('/territories', territories.listagem)
routes.get('/territories/:id', territories.searchById)
routes.post('/territories', territories.createTerritory)

module.exports = routes