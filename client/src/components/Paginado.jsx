import React from "react";
import Style from '../styles/Paginado.module.css'

export default function({ recipePerPage , allRecipes , paginado}){
  const pageNumber= [];
  for(let i=1;i<=Math.ceil(allRecipes/recipePerPage);i++){
    pageNumber.push(i);
  }
  return(
    <nav className={Style.nav}>
      <ul className={Style.paginado}>
        {
          pageNumber &&
          pageNumber.map((number)=> ( 
            <li className={Style.number} key={number}>
              <p className={Style.img} onClick={() => paginado(number)}>{number}</p>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
