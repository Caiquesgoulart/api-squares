const mongodb = require('mongoose')
const squareController = mongodb.model('square')

module.exports = {
    async listagem(req, res){
        const {page = 1} = req.query
        const listar = await squareController.paginate({}, {page, limit:10})
        return res.json(listar)
    },
    async searchById(req, res){
        const search = await squareController.findById(req.params.id)
        return res.json(search)
    },
    async createTerritory(req, res){
        try {
            console.log('teste')
                const create = await squareController.create(req.body)
                return res.json(create)
        }
        catch(e){
            if(req.body.name == null || req.body.name == ''){
                return res.json({message: 'Faltam campos a serem preenchidos'})
            }
            else if(req.body.start == null || req.body.start == ''){
                return res.json({message: 'Faltam campos a serem preenchidos'})
            }
            else if(req.body.end == null || req.body.end == ''){
                return res.json({message: 'Faltam campos a serem preenchidos'})
            }
            else{
                console.log(req.body)
                return res.json('Territorio sobrepõe outro existente')
            } 
        }
    },
    async deleteById(req, res){ 
            const del = await squareController.findByIdAndRemove(req.params.id)
            console.log(del)
            if(del == null) {
                return res.json({message: 'Territorio não encontrado'})
            }
            else {res.json({message: `deletado com sucesso`})}
    },
    async getArea(req, res){
        const area = await squareController.findOne({
            'start.x': req.params.x, 
            'start.y': req.params.y
        })
        return res.json(area)
    }
}
