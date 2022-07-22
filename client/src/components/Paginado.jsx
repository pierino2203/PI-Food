import React from "react";
import s from '../styles/Paginado.module.css'

export default function({ recipePerPage , allRecipes , paginado}){
  const pageNumber= [];
  for(let i=1;i<=Math.ceil(allRecipes/recipePerPage);i++){
    pageNumber.push(i);
  }
  return(
    <nav>
      <ul className={s.paginado}>
        {
          pageNumber &&
          pageNumber.map((number)=> ( 
            <li className={s.number} key={number}>
              <p onClick={() => paginado(number)}>{number}</p>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
