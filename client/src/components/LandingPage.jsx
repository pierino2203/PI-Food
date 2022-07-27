import React from "react";
import { Link } from "react-router-dom";
import cooking from '../imagenes/cooking.png'
import Style from '../styles/LandingPage.module.css'
export default function LandingPage(){
    return(
      <div>
        <div>
          <h1 className={Style.tittle}>Welcome to Food-Page</h1>
          <Link to='/home'>
          <button className={Style.boton}>Enter</button>
        </Link>
        </div>
        
        
        <img className={Style.img} src={cooking} alt='Image cook'/>
        
      </div>
    )
}