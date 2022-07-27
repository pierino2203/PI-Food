import React , {useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getDiets, postRecipe } from "../redux/actions";
import Style from '../styles/CreateRecipe.module.css'
function validate(input){
  let error={};
  if(!input.name|| !/^[A-Z]+[A-Za-z\s]+$/g.test(input.name)){
    error.name="Insert name(required)"
  }
  if(!input.summary){
    error.summary="Insert recipe summary(required)"
  }
  if(!input.health_score || !/^[1-9]\d*(\.\d+)?$/.test(input.health_score)){
    error.health_score="Insert Health Score(required), Only Numbers "
  }
  if(input.health_score>100 || input.health_score<0){
    error.health_score="The Health Score value is, 0<=value<=100"
  }
  return error;
}
export default function CreateRecipe(){
  const dispatch=useDispatch();
  const diet=useSelector((state)=> state.diets)
  const [error,setError]=useState({});
  const [input,setInput]= useState({
    name: '',
    image: '', 
    summary: '',
    health_score: '',
    steps: '',
    diets: []  
  })
  
  useEffect(()=>  {
    dispatch(getDiets());
  },[]);
  
  function handleChange(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setError(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }
  function handleSelect(e){
    setInput({
      ...input,
      diets: [...input.diets,e.target.value]
    })
  } 
  function handleSubmit(e){
    e.preventDefault();
    dispatch(postRecipe(input))
    alert('Recipe Created')
    setInput({
      name: '',
      image: '', 
      summary: '',
      health_score: '',
      steps: '',
      diets: []  
    })
  }
  return(
    <div>
      <NavLink className={Style.navLink} to='/home'><button className={Style.boton}>Back</button></NavLink>
      <h1 className={Style.text}>Create Recipe:</h1>
      <form className={Style.form} onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label>Name: </label>
          <input
          type='text'
          value={input.name}
          name='name'
          onChange={(e)=>handleChange(e)}
          />  
          {
            error.name && <p className={Style.danger}>{error.name}</p>
          }
        </div>  
        <div>
          <label>Image: </label>
          <input
          type='text'
          value={input.image}
          name='image'
          onChange={(e)=>handleChange(e)}
          />  
        </div>
        <div>
          <label>Summary: </label>
          <input
          type='text'
          value={input.summary}
          name='summary'
          onChange={(e)=>handleChange(e)}
          />
          {
            error.summary && <p className={Style.danger}>{error.summary}</p>
          }
        </div>
        <div>  
          <label>Health Score: </label>
          <input
          type='text'
          value={input.health_score}
          name='health_score'
          onChange={(e)=>handleChange(e)}
          />
          {
            error.health_score && <p className={Style.danger}>{error.health_score}</p>
          }  
        </div>
        <div>  
          <label>Steps: </label>
          <input
          type='text'
          value={input.steps}
          name='steps'
          onChange={(e)=>handleChange(e)}
          />  
        </div>
        <div>
          <label>Select the diet types: </label>
          <select className={Style.select} onChange={(e)=>handleSelect(e)}>
            {
              diet && diet.map(e => (
                <option value= {e.name} key={e.id}>{e.name}</option>
              ))
            }
          </select>
          <ul className={Style.ul}><li className={Style.lista}>{input.diets.map(el=> el + ' ,')}</li></ul>
        </div>
        <button className={Style.boton} type='submit'>Create Recipe</button>
      </form>
    </div>
  )
}