import { useState } from "react";
import "./RecipeCard.css";
import { AiTwotoneFire, AiOutlineDelete } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import { v4 as uuid } from "uuid";
const NewRecipeCard = ({
  id,
  title,
  calories,
  image,
  ingredients,
  onDelete,
}) => {
  //card stuff
  //click state (flip)
  const [flip, setFlip] = useState(false);
  //flip function
  const clickHandler = () => {
    setFlip(!flip);
  };

  //added btn color state
  const [btnColor, setBtnColor] = useState(false);

  const deleteItem = (title) => {
    console.log(title);
    onDelete(title);
  };

  return (
    <div className="recipes">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              onClick={clickHandler}
              className={`pulse2 new-image ${flip ? "flip" : ""}`}
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
                <AiOutlineDelete
                  style={{ color: "red" }}
                  onClick={() => deleteItem(title)}
                />
              </i>
            </p>
            <h1>{title}</h1>
            <ol>
              <div>{ingredients}</div>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRecipeCard;
