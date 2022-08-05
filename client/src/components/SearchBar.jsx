import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDiets, getRecipeByName } from "../redux/actions";
import Style from '../styles/SearchBar.module.css'

export default function SearchBar(){
  const dispatch=useDispatch();
  const [name,setName]=useState('');
  useEffect ( () => {
    dispatch(getDiets())
    
  },[dispatch]);

 function handleInputName(e){
  e.preventDefault();
  setName(e.target.value);
  
 } 
 function handleSubmitName(e){
  e.preventDefault();
  dispatch(getRecipeByName(name))
  setName('')
  
 } 
 return  (
    <div>
      <div className={Style.SearchBar}>
        <input 
          className={Style.input}
          type='text' 
          value={name}
          placeholder="Insert recipe" 
          onChange={(e)=>handleInputName(e)}
        />
        <button className={Style.boton} type='submit' onClick={(e)=>handleSubmitName(e)}>Search</button>
      </div>
    </div>
 )

}