const axios= require('axios');
require('dotenv').config();
const {APIKEY} = process.env.APIKEY;

const getRecipes= async () =>  {
  try {
    const recipeApi= (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4b7bd7e61e9a4bd7b28685540ed46eeb&offset=0&number=100&addRecipeInformation=true`)).data.results;

    const recipes= recipeApi.map((el)=> {
      return{
        id: el.id,
        name: el.title,
        image: el.image,
        summary:  el.summary,
        diets: el.diets,
        health_score: el.healthScore,
        steps: (el.analyzedInstructions[0] && el.analyzedInstructions[0].steps?el.analyzedInstructions[0].steps.map(item=>item.step).join(" \n"):'')
      }
    })
    // console.log(recipes);
    return recipes;
  } catch (error) {
    console.log('Error al traer datos de api',error);
  }
}
module.exports=getRecipes;