const axios = require('axios');
const { Diet } = require('../db');
require('dotenv').config();
const {API_KEY} =process.env;
const getDiets= async ()  =>  {
  try {
    const allDiet= await Diet.findAll();
    if(allDiet.length ===0){
      const datosApi= (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)).data.results;
      
    
    const dietApi= (datosApi.map((el) => el.diets)).flat();
    const arrSinRep= [];
    dietApi.forEach((element) => {
      if(!arrSinRep.includes(element)){
        arrSinRep.push(element)
      }
    });
    // arrSinRep.push("vegetarian")
    console.log(arrSinRep);
    
    arrSinRep.map(async (el) =>  {
      await Diet.findOrCreate({
        where:  { name : el}
      })
    })
    
    
    const diets= await Diet.findAll();
    console.log(diets)
    return diets;
    }else{
      console.log('ya estan cargadas')
      return allDiet;
    }
      
  }
  catch (error) {
    console.log('Error a traer las Dietas',error);   
  }
}
  module.exports=getDiets;