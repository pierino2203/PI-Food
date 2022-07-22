import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, orderByHealth } from "../redux/actions";
import { filterByDiet } from '../redux/actions'


export default function SearchBar(){
  const dispatch=useDispatch();
  const diets = useSelector((state) => state.diets);
  useEffect ( () => {
    dispatch(getDiets())
    
  },[dispatch]);
  function handleFilterDiets(e){
    e.preventDefault();
    dispatch(filterByDiet(e.target.value))
  }
  
  return  (
    <div>
      <input type='text' placeholder="Insert recipe"/>
      <button type='submit' >Search</button>
      <div>
        <label>Diets Types </label>
        <select onChange={(e) => handleFilterDiets(e) }>
          <option value='All'>All</option>
          {diets && diets.map((d)=>(
            <option value={d.name} key={d.name}>{d.name}</option>
          ))}
        </select>
      </div>
      
    </div>
  )

}