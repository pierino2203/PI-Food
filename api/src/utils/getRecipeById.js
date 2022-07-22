const getAllRecipe = require("../utils/getAllRecipe");

const getRecipeById=async (id) => {
  try {
    const allRecipe=await getAllRecipe();
  // console.log(allRecipe)
    const recipeId= allRecipe.filter((r) =>  (r.id).toString() === id.toString());
    return recipeId;
  } catch (error) {
    console.log('Error al buscar la Receta por Id',error);
  }
}
module.exports= getRecipeById;