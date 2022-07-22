const axios= require('axios');
require('dotenv').config();
const {APIKEY} = process.env.APIKEY;

const getRecipes= async () =>  {
  try {
    const recipeApi= (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=bf5375db8d174df0a49f584ca903c241&offset=0&number=100&addRecipeInformation=true`)).data.results;

    const recipes= recipeApi.map((el)=> {
      return{
        id: el.id,
        name: el.title,
        image: el.image,
        summary:  el.summary,
        diets: el.diets,
        health_score: el.healthScore,
        steps: el.analyzedInstructions[0]?.steps.map((e)=>  {return{number: e.number, step:e.step}})

      }
    })
    // console.log(recipes);
    return recipes;
  } catch (error) {
    console.log('Error al traer datos de api',error);
  }
}
module.exports=getRecipes;