const mongodb = require('mongoose')
const squareController = mongodb.model('square')

module.exports = {
    async listagem(req, res){
        // const listar = await squareController
        return res.json()
    },
    async searchById(req, res){
        const search = await squareController.findById(req.params.id)
        return res.json(search)
    },
    async createTerritory(req, res){
        const create = await squareController.create(req.params.id)
        return res.json(create)
    }
}