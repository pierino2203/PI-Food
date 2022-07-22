const { Diet, Recipe } = require("../db");

const getDb = async ()  =>  {
  try {
    return await Recipe.findAll({
        include:{
        model: Diet,
        attributes:  ['id','name'],
        through:  { 
          attributes: []
        },
        }
      })
    
  } catch (error) {
    console.log('Error en traer los datos de la Base de Datos',error)
  }
}
module.exports=getDb;