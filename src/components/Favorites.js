import React from "react";

import "./SearchRecipe.css";

import RecipeCard from "./RecipeCard";
import { v4 as uuid } from "uuid";
const Favorites = ({ favRecipes, deleteObj }) => {
  const onClick = (obj) => {
    deleteObj(obj);
  };
  return (
    <div>
      <h1 className="heading">Your Favorites</h1>
      <div className="recipes">
        {favRecipes.map((recipe) => (
          <RecipeCard
            recipeObj={recipe}
            onAddItem={onClick}
            className="pulse"
            key={uuid()}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
