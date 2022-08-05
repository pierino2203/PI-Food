const { Router } = require('express');
const getAllRecipe = require('../utils/getAllRecipe');
const getRecipeByName=require('../utils/getRecipeByName')
const getRecipeById=require('../utils/getRecipeById');
const { Recipe,Diet } = require('../db');
const recipeRouter = Router();

recipeRouter.get('/recipes',async (req,res)  =>  {
    try {
        const { name }  = req.query;
      if(name)  {
        const recipeFind= await getRecipeByName(name);
        // console.log('Aqui esta la receta',recipeFind);
        recipeFind.length
        ? res.status(200).send(recipeFind)
        : res.status(404).send('Recipe not found')
      }else{
        const allRecipe= await getAllRecipe();
        res.status(200).send(allRecipe);
      }
      } catch (error) {
        console.log('error en buscar la receta',error)
      }
})
recipeRouter.get('/recipes/:id', async (req,res) =>  {
  try {
    const { id }=req.params;
    const recetaId= await getRecipeById(id);
    console.log(recetaId)
    !recetaId
    ? res.status(404).send(`No se encontro una receta asociada a id=${id}`)
    : res.status(200).send(recetaId);
  } catch (error) {
    console.log('Error en el get al buscar la receta por id',error)
  }
})
recipeRouter.post('/recipes',async (req,res)  =>  {
  try {
    const recipe={
      id,
      name,
      image ,
      summary,
      health_score,
      steps,
      diets,
      createInDb

    } = req.body;
    // console.log(recipe)
    const find = await Recipe.findAll({
      where:{name : name}
    })
    if(find.length>0){
      res.send('Ya hay una receta con ese nombre')
    }else{
      const recCreated=await Recipe.create({
        id,
        name,
        image,
        summary,
        health_score,
        steps,
        createInDb
      })
      let dietDb= await Diet.findAll({
        where:  {name:  diets}
      })
      recCreated.addDiet(dietDb);
      console.log(recCreated);
      res.send('Se creo la Receta correctamente :)')
    }
    

    
  } catch (error) {
    console.log('Error al crear la receta',error)
  }
})


 

module.exports=recipeRouter;