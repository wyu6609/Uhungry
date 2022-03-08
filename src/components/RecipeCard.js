import React from "react";
import "./RecipeCard.css";
const RecipeCard = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipes pulse">
      {/* <h1 className={style.recipe}>{title}</h1> */}
      <ol>
        {/* <div className="recipe">
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </div> */}
      </ol>
      <p className="text">{parseInt(calories)} calories</p>
      <img src={image} alt="" />
    </div>
  );
};

export default RecipeCard;
