export default function Card({ name , image, diets, health_score }) {
  return(
    <div>
      <h3>{name}</h3>
      <img src={image} alt="recipe image" width='200px' height='250px' />
      <h5>Diets: {diets}</h5>
      <h5>Health Score: {health_score}</h5>
    </div>
   )
}