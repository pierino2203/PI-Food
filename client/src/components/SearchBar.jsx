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
        <input 
          className={Style.input}
          type='text' 
          placeholder="Insert recipe" 
          onChange={(e)=>handleInputName(e)}
        />
        <button className={Style.boton} type='submit' onClick={(e)=>handleSubmitName(e)}>Search</button>
      </div>
    </div>
 )

}