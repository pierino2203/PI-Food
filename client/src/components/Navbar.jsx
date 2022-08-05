import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getDiets } from "../redux/actions";
import { getRecipes } from "../redux/actions";
import SearchBar from "./SearchBar";
import Style from '../styles/NavBar.module.css'
import logo from '../imagenes/cooking.png'

export default function NavBar(){
  const dispatch=useDispatch();
   
  useEffect ( () => {
    dispatch(getDiets())
    dispatch(getRecipes())
    
  },[dispatch]);
  
  return(
    <header>
      <nav className={Style.navbar}>
        <ul className={Style.list}>
          <li className={Style.item}>
            <NavLink className={Style.home} exact to='/'>
              <img
                className={Style.imgHome}
                id='logorecipe'
                src={logo}
                width="30"
                height="30"
                alt=""
              />
            </NavLink>
            <div className={Style.t_f_s}>
              <h1 className={Style.title} >Foods-Recipes </h1>
              <div className={Style.filtros_search}>
                <SearchBar />      
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}    