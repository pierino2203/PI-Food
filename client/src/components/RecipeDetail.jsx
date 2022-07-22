import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../redux/actions";

export default function RecipeDetail(props){
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(getRecipeById(props.match.params.id))
  },[dispatch]);
  const myRecipe = useSelector((state) =>state.detail);
  return(
    <div>
      {
        myRecipe.length>0 ?
        <div>
          <h1>{myRecipe[0].name}</h1>
          <img src={myRecipe[0].image} atl='image food'/>
          {
            !myRecipe[0].createInDb
            ? <h2>Diets types: {myRecipe[0].diets.join('   ')}</h2>
            :<h2>Diets types: {myRecipe[0].Diets.map((d)=> d.name='   ')}</h2>
          }
          <h3>Summary: {myRecipe[0].summary.replace(/<[^>]+>/g)}</h3>
          <h3>Health Score: {myRecipe[0].health_score}</h3>


        </div>
        :<p>Loading...</p>
      }

    </div>
  )
}