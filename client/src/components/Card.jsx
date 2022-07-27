import React from "react";
import Style from '../styles/Card.module.css'
export default function Card({ name , image, diets, health_score }) {
  return(
    <div className={Style.card}>
      <h3 className={Style.subTitle}>{name}</h3>
      <img src={image} alt="recipe image" width='200px' height='250px' />
      <h5 className={Style.diet}>Diets: </h5>
      <h5>{diets}</h5>
      <h5 className={Style.diet}>Health Score: {health_score}</h5>
    </div>
   )
}