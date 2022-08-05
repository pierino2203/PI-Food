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
  
module.exports = router;
