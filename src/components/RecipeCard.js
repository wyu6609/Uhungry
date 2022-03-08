import React from "react";
import "./RecipeCard.css";
import { AiTwotoneFire } from "react-icons/ai";
const RecipeCard = ({ title, calories, image, ingredients }) => {
  //card stuff

  return (
    <div className="recipes">
      {/* <h1 className={style.recipe}>{title}</h1> */}
      <ol>
        {/* <div className="recipe">
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </div> */}
      </ol>
      <p className="text">
        {parseInt(calories)} calories{" "}
        <i>
          <AiTwotoneFire />
        </i>
      </p>
      <img className="pulse" src={image} alt="" />
    </div>
  );
};

export default RecipeCard;
