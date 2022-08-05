

const initialState={
  recipes: [],
  allRecipes: [],
  diets: [],
  detail:[]
}
export default function rootReducer(state= initialState,action){
  switch(action.type){
    case 'GET_RECIPES':
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload
      }
    case 'GET_DIETS':
      return  {
        ...state,
        diets: action.payload,
      }
    case 'FILTER_BY_DIET':
      const allRecipes = state.allRecipes;
      const dietsFilter=
      action.payload === 'All'
      ? allRecipes
      : allRecipes.filter(
        (el) =>
        el.diets &&
        !el.createInDb
        ? el.diets.find(e => e===action.payload)
        : el.Diets.find(e => e.name===action.payload)
      ) 
      return{
        ...state,
        recipes: dietsFilter 
      }
    case 'ORDER_BY_HEALTH':
      const orderDiets=action.payload==='UP' ? 
      state.recipes.sort(function(a,b){
        if(a.health_score > b.health_score){
          return 1;
        }if(b.health_score > a.health_score){
          return -1;
        }
          return 0;
        })
      : state.recipes.sort(function(a,b){
        if(a.health_score > b.health_score){
           return -1;
        }if(b.health_score > a.health_score){
           return 1;
        }
          return 0;
      })
      return{
        ...state,
        recipes: orderDiets
      }
    case 'ORDER_BY_NAME':
      let sortedArr= action.payload==='desc'?
       state.recipes.sort( function (a,b){
              if(a.name.toLowerCase() > b.name.toLowerCase()){
                return 1;
              }
              if(b.name.toLowerCase() > a.name.toLowerCase()){
                return -1;
              }
              return 0;  
              
          })  :
          state.recipes.sort(  function(a,b) {
            if(a.name.toLowerCase() > b.name.toLowerCase()) {
              return -1;
            }
            if(b.name.toLowerCase() > a.name.toLowerCase()) {
              return 1;
            }
            return 0;
          })
          return{
            ...state,
            recipes: sortedArr
          }    
    case 'GET_RECIPE_ID':
      return{
        ...state,
        detail: action.payload
      }
    case 'GET_RECIPE_NAME':
      return{
        ...state,
        recipes: action.payload
      }      
            
    case 'POST_RECIPE':
      return{
        ...state
      }
    case 'CLEAN_DETAIL':
      return{
        ...state,
        detail: action.payload
      }  
   
    default:
    return state;
  }
}

