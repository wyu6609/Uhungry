import React, { useState } from "react";
import "./RecipeCard.css";
import { AiTwotoneFire } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
const RecipeCard = ({ title, calories, image, ingredients }) => {
  //card stuff
  //click state (flip)
  const [flip, setFlip] = useState(false);
  //flip function
  const clickHandler = () => {
    setFlip(!flip);
  };
  console.log(flip);
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
        <i>
          <CgAddR
            onClick={() => {
              console.log("clicked");
            }}
          />
        </i>
      </p>
      <img onClick={clickHandler} className="pulse" src={image} alt="" />
    </div>
  );
};

export default RecipeCard;
