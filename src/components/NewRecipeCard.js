import { useState } from "react";
import "./RecipeCard.css";
import { AiTwotoneFire } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import { v4 as uuid } from "uuid";
const NewRecipeCard = ({ title, calories, image, ingredients }) => {
  //card stuff
  //click state (flip)
  const [flip, setFlip] = useState(false);
  //flip function
  const clickHandler = () => {
    setFlip(!flip);
  };

  //added btn color state
  const [btnColor, setBtnColor] = useState(false);

  return (
    <div className="recipes">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              onClick={clickHandler}
              className={`pulse2 ${flip ? "flip" : ""}`}
              src={image}
              alt=""
            />
          </div>
          <div className="flip-card-back">
            <p
              onClick={() => {
                setBtnColor(true);
              }}
              className={btnColor ? "AddedBtn" : ""}
            >
              {parseInt(calories)} calories{" "}
              <i>
                <AiTwotoneFire style={{ color: "red" }} />
              </i>
              <i>
                <CgAddR />
              </i>
            </p>
            <h1 className={btnColor ? "AddedBtn" : ""}>{title}</h1>
            <ol>
              <div className={btnColor ? "AddedBtn" : ""}>{ingredients}</div>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRecipeCard;
