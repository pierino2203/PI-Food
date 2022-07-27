import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById } from "../redux/actions";
import { Link } from "react-router-dom";
import Style from '../styles/RecipeDetail.module.css'
export default function RecipeDetail(props){
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(getRecipeById(props.match.params.id))
  },[dispatch]);
  const myRecipe = useSelector((state) =>state.detail);
  return(
    <div className={Style.margin}>
      {
        myRecipe.length>0 ?
        <div>
          <h1 className={Style.title}>{myRecipe[0].name}</h1>
          <img src={myRecipe[0].image} atl='image food' width='200px' height='250px'/>
          {
            !myRecipe[0].createInDb
            ? <h3>Diets types: {myRecipe[0].diets.join('   ')}</h3>
            :<h3>Diets types: {myRecipe[0].Diets.map((d)=> {return (<h3>{d.name+'    '}</h3>)})}</h3>
          }
          <h3>Health Score: {myRecipe[0].health_score}</h3>
          <h3>Summary: {myRecipe[0].summary.replace(/<[^>]+>/g,"")}</h3>
          <h3>Steps:
            {myRecipe[0].steps}
          </h3>
        </div>
        :<p>Loading...</p>
      }
      <Link to='/home'>
        <button>Back</button>
      </Link>
    </div>
  )
}