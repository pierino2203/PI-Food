const { Router }=require('express');
const getDiets = require('../utils/getDiets');
const { Diet } = require('../db');
const dietsRouter =Router();
dietsRouter.get('/diets',async (req,res) =>  {
  try {
    const diets=await getDiets();
    // console.log(diets)
    res.status(200).send(diets);
  } catch (error) {
    console.log('Error al obtener las Dietas',error)
  } 
   
})
module.exports=dietsRouter;
