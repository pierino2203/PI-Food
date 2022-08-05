import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getRecipeById } from "../redux/actions";
import { Link } from "react-router-dom";
import Style from '../styles/RecipeDetail.module.css'
export default function RecipeDetail(props){
  const dispatch =useDispatch();
  const myRecipe = useSelector((state) =>state.detail);
  useEffect(() => {
    dispatch(getRecipeById(props.match.params.id));
    return ()=> dispatch(cleanDetail());
  },[props.match.params.id]);
  function handleChange(e){

  }
  return(
    <div >
      <Link to='/home'>
        <button className={Style.boton} onChange={(e)=>handleChange(e)}>Back</button>
      </Link>  
      {myRecipe.length>0 ?
        <div className={Style.margin}>
          <div className={Style.contenedor}>
            <div className={Style.text}>
              <h1 className={Style.title}>{myRecipe[0].name}</h1>
              <img className={Style.recipeImage} src={myRecipe[0].image} alt='Food-image' />
            <div >
              {
                !myRecipe[0].createInDb
                ? <h3><u>Diets type</u>: {myRecipe[0].diets.join(' - ')}</h3>
                :<h3><u>Diets types</u>: {myRecipe[0].Diets.map((d) => d.name + ' - ')}</h3>
              }
            </div>
            <div>
                <h3><u>Health Score</u>: {myRecipe[0].health_score}</h3>
            </div>
            <div className={Style.text}>
              <h3><u>Summary</u>: </h3>
              <h4>{myRecipe[0].summary.replace(/<[^>]+>/g,"")}</h4>
            </div>
            <div className={Style.text}>
              {
                myRecipe[0].steps.length>0?
                  <h3><u>Steps</u>:
                    <h4>
                      {
                        myRecipe[0].steps
                      }
                    </h4>
                  </h3>
              :
              <h3><u>Steps</u>: None</h3>
              }

            </div>
            </div>
          </div>  
        </div>
        :<p>Loading...</p>
      }
      
      
    </div>
  )
}