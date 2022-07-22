export default function Card({ name , image, diets, health_score }) {
  return(
    <div>
      <h3>{name}</h3>
      <h5>{diets}</h5>
      <h5>{health_score}</h5>
      <img src={image} alt="recipe image" />
    </div>
   )
}