const axios =require('axios');

export function getRecipes(){
  try {
    return async function(dispatch){
      const recipes = await axios.get('http://localhost:3001/recipes');
      return dispatch({
        type: 'GET_RECIPES',
        payload: recipes.data
      })
    }
  } catch (error) {
    console.log('Error en getRecipe',error)
  }
}

export function getDiets(){
  
    return async function(dispatch){
      try {
        const diets = await axios.get('http://localhost:3001/diets')
        return dispatch({
        type: 'GET_DIETS',
        payload: diets.data
      })
      } catch (error) {
        console.log('Error en Get',error)
      }
    }
}


export function filterByDiet(payload){
  return {
    type: 'FILTER_BY_DIET',
    payload,
  }
}
export function orderByHealth(payload){
  return{
    type: 'ORDER_BY_HEALTH',
    payload
  }
}
export function orderByName(payload){
  return{
    type: 'ORDER_BY_NAME',
    payload
  }
}


export function getRecipeById(id){
  return async function(dispatch){
    try{
      const recipe = await axios.get('http://localhost:3001/recipes/'+id)
       return dispatch({
        type: 'GET_RECIPE_ID',
        payload: recipe.data
        })
      }
     catch (error) {
      console.log('Error al traer la Recete por id',error)
    
  }
}
}

export function cleanDetail(){
  return {
    type: 'CLEAN_DETAIL',
    payload: []
  }
}

export function getRecipeByName(name){
  
    return async function(dispatch){
     try{
      const recipe =await axios.get('http://localhost:3001/recipes?name='+ name)
      return dispatch({
        type: 'GET_RECIPE_NAME',
        payload: recipe.data
      })
     }
     catch (e) {
      console.log(e)
      alert("Recipe not found")
    }
    }
   
}

export function postRecipe(payload){
  return async function(dispatch){
    try {
      const recipe= await axios.post('http://localhost:3001/recipes',payload);
      return recipe;
    } catch (error) {
      console.log("Error PostRecipe",error)
    }
  }
}
