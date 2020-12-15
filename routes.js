const express = require('express')
const routes = express.Router()

const territories = require('./controllers/squareController')

routes.get('/', function(req, res){
    res.render('views/index')
})
routes.get('/territories', territories.listagem)
routes.get('/territories/:id', territories.searchById)
routes.post('/territories', territories.createTerritory)
routes.delete('/territories/:id', territories.deleteById)
routes.get('/territories/:x/:y', territories.getArea)
routes.put('/territories/:id', territories.paint)
routes.put('/territories/:id', territories.removePaint)

module.exports = routes