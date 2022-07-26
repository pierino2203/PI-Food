import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, orderByHealth, orderByName } from "../redux/actions";
import Card from "./Card";
import { NavLink } from 'react-router-dom';
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
export default function Home(){
  const dispatch = useDispatch();
  const allRecipes =useSelector((state) =>  state.recipes);
  const [currentPage,setCurrentPage] =useState(1);
  const [recipePerPage,setRecipePerPAge] =useState(9);
  const indexOfLastRecipe= currentPage*recipePerPage;
  const indexOfFirstRecipe= indexOfLastRecipe-recipePerPage;
  const currentRecipes =allRecipes.slice(indexOfFirstRecipe,indexOfLastRecipe);
  const [orden,setOrden]=useState('');
  
  const paginado= (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  useEffect(()  =>  {
    dispatch(getRecipes())
  },[dispatch]);  
  
  function handleClick(e){
    e.preventDefault();
    dispatch(getRecipes());
  }
  function handleOrderHealth(e){
    dispatch(orderByHealth(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }
  function handleOrderName(e){
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
    
  }
  return  (
    <div>
      <SearchBar/>
      <h1>Foods-Recipes</h1>
      <button onClick={e => {handleClick(e)}}>Refresh Recipes</button>
      <div>
      <Paginado
        recipePerPage={recipePerPage} 
        allRecipes={allRecipes.length}
        paginado={paginado}
      />
      <div>
        <label>Order by Health Score:</label>
        <select onChange={(e) =>handleOrderHealth(e)}>
          <option value='----'>----</option>
          <option value='UP'>UP ⬆️</option>
          <option value='DOWN'>DOWN ⬇️</option>
        </select>
      </div>
      <div>
        <label>Order by Name:</label>
        <select onChange={(e) => handleOrderName(e)}>
          <option value='----'>----</option>
          <option value='asc'>ASC ⬆️</option>
          <option value='desc'>DES ⬇️</option>
        </select>
      </div>
      {
        currentRecipes?.map((e) =>{
          return(
            <div > 
            <NavLink to={`/home/${e.id}`} >
              <div><Card  
              image={e.image}
              name={e.name} 
              key={e.id}
              health_score={e.health_score}
              diets= {!e.createInDb ? e.diets.join('   ') : e.Diets.map((d) => d.name + '   ')}
             
              /></div>
            </NavLink>
          </div>
          )
        })
      
      }
      </div>
      
    </div>
  )

}
