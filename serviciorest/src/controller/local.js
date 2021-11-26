const localmodels = require('../models/local');

class LocalController{

    async create(req, res){
        try {
          const {Distancia} = req.body;
          if(Distancia>10){
            req.body.error = 'Distancia incorrecta';
          }
          const data = await localmodels.create(req.body);
          res.json({data});
        } catch (error) {
          res.json({error})
        }
      }

    async getAll(req, res){
    try {
        const data = await localmodels.find();
        res.json({data});
        } catch (error) {
        res.json({error})
        }
    } 

  

    async errores(req, res){
        try {
        const data = await localmodels.find({tipoError:{
            $ne: null
        }});
        res.json({data});
        } catch (error) {
        res.json({error})
        }
  }
}

module.exports = new LocalController();