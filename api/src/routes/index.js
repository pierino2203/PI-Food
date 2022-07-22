const { Router } = require('express');
const getAllRecipe=require('../utils/getAllRecipe');
const getRecipeByName=require('../utils/getRecipeByName');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeRouter =require('../routes/recipeRouter');
const dietsRouter = require('./dietsRouter');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
  
  router.use('/',recipeRouter);
  router.use('/',dietsRouter);
  
// router.get('/recipes',async (req,res)  =>  {
//     try {
//       const { name }  = req.query;
//     if(name)  {
//       const recipeFind= await getRecipeByName(name);
//       // console.log('Aqui esta la receta',recipeFind);
//       !recipeFind
//       ? res.status(404).send('No se encontro la receta')
//       : res.status(200).send(recipeFind);
//     }else{
//       const allRecipe= await getAllRecipe();
//       res.status(200).send(allRecipe);
//     }
//     } catch (error) {
//       console.log('error en buscar la receta',error)
//     }
//   })
module.exports = router;
