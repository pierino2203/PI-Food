const getRecipes=require('../utils/getRecipes');
const getDb=require('../utils/getDb') ;
const getAllRecipe= async () =>  {
  try {
    const recipeApi= await getRecipes();
    const recipeDb= await getDb();
    const allRecipe= recipeApi.concat(recipeDb);
    return allRecipe
  } catch (error) {
    console.log('Error al traer todos los datos',error)
  }
}
module.exports=getAllRecipe;