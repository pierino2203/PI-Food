import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDiets, getRecipeByName, orderByHealth } from "../redux/actions";
import { filterByDiet } from '../redux/actions'
import Style from '../styles/SearchBar.module.css'
import cooking from '../imagenes/cooking.png'



export default function SearchBar(){
  const dispatch=useDispatch();
  const diets = useSelector((state) => state.diets);
  const [name,setName]=useState('');
  useEffect ( () => {
    dispatch(getDiets())
    
  },[dispatch]);
  function handleFilterDiets(e){
    e.preventDefault();
    dispatch(filterByDiet(e.target.value))
  }
 function handleInputName(e){
  e.preventDefault();
  setName(e.target.value);
  
 } 
 function handleSubmitName(e){
  e.preventDefault();
  dispatch(getRecipeByName(name))
 } 
 return  (
    <div>
      <div className={Style.SearchBar}>
      <h1 >Foods-Recipes {<img src={cooking}  alt='logo de cocina' width='40px' height='40px'/>}</h1>
         <input className={Style.input} type='text' placeholder="Insert recipe" onChange={(e)=>handleInputName(e)}
         ></input>
        <button className={Style.boton} type='submit' onClick={(e)=>handleSubmitName(e)}>Search</button>
      </div>
      <div>
        <label>Diets Types </label>
        <select onChange={(e) => handleFilterDiets(e) }>
          <option value='All'>All</option>
          {diets && diets.map((d)=>(
            <option value={d.name} key={d.name}>{d.name}</option>
          ))}
        </select>
      </div>
      <Link to='/recipe'><button>Create Recipe</button></Link>
      
    </div>
  )

}