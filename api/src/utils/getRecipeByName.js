const { Recipe, Diet } = require('../db');
const getRecipes=require('../utils/getRecipes');
const getAllRecipe = require('./getAllRecipe');
const getRecipeByName= async (name)  =>{
 try {
  const allRecipe= await getAllRecipe();
  const recipeFind= allRecipe.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()))
//   console.log(name);
//   console.log(recipeFind);
  return recipeFind;
 } catch (error) {
  console.log('Error al Buscar Receta por Name',error);
 }
  
}
module.exports=getRecipeByName;