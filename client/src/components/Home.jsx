import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, getRecipes, orderByHealth, orderByName,filterByDiet } from "../redux/actions";
import Card from "./Card";
import { NavLink } from 'react-router-dom';
import Paginado from "./Paginado";
import NavBar from "./Navbar";
import Style from '../styles/Home.module.css'
import { Link } from "react-router-dom";


export default function Home(){
  const dispatch = useDispatch();
  const allRecipes =useSelector((state) =>  state.recipes);
  const diets= useSelector((state)=> state.diets);
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
    dispatch(getDiets())
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
  function handleFilterDiets(e){
    e.preventDefault();
    dispatch(filterByDiet(e.target.value))
  }
  function handleOrderName(e){
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
    
  }
  return  (
    <div>
      <NavBar/>
      <div>
      <Paginado
        recipePerPage={recipePerPage} 
        allRecipes={allRecipes.length}
        paginado={paginado}
      />
      <div>
        <NavLink  to='recipe'><button className={Style.boton}>Create Recipe</button></NavLink>
        <button className={Style.boton} onClick={e => {handleClick(e)}}>Refresh Recipes</button>
      </div>
      
      <div className={Style.inputs}>
        <label className={Style.label}>Order by Health Score:</label>
        <select className={Style.select} onChange={(e) =>handleOrderHealth(e)}>
          <option value='----'>----</option>
          <option value='UP'>UP ⬆️</option>
          <option value='DOWN'>DOWN ⬇️</option>
        </select>
        <label className={Style.label}>Diets Types</label>
          <select className={Style.select} onChange={(e) => handleFilterDiets(e) }>
          <option value='All'>All</option>
          {diets && diets.map((d)=>(
            <option value={d.name} key={d.name}>{d.name}</option>
            ))
          }
          </select>
        <label className={Style.label}>Order by Name:</label>
        <select className={Style.select} onChange={(e) => handleOrderName(e)}>
          <option value='----'>----</option>
          <option value='asc'>ASC ⬆️</option>
          <option value='desc'>DES ⬇️</option>
        </select>
      </div>
      <div className={Style.recipeCards}>
        <ul className={Style.recipesGrid}>
          {
            currentRecipes?.map((e) =>{
              return(
                <div className={Style.margin}> 
                  <NavLink  to={`/home/${e.id}`} >
                    <div >
                      <Card  
                      image={e.image}
                      name={e.name} 
                      key={e.id}
                      health_score={e.health_score}
                      diets= {!e.createInDb ? e.diets.join(' - ') : e.Diets.map((d) => d.name + ' - ')}
                      />
                    </div>
                  </NavLink>
                </div>
              )
            })
          }
        </ul>
      </div>
      
      </div>
      
    </div>
  )

}
