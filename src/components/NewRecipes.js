import React, { useState, useEffect } from "react";
import "./NewRecipes.css";
import NewRecipeCard from "./NewRecipeCard";
import { v4 as uuid } from "uuid";

const NewRecipes = () => {
  //new recipe state
  const [newRecipes, setNewRecipes] = useState([]);

  //set form state
  const [newForm, setNewForm] = useState({
    title: "",
    image: "",
    ingredients: [],
    calories: "",
  });

  //useEffect
  useEffect(() => {
    fetchNewRecipes();
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("NEW_RECIPES", JSON.stringify(newRecipes));
  }, [newRecipes]);

  const fetchNewRecipes = () => {
    const recipes = window.localStorage.getItem("NEW_RECIPES");
    if (recipes !== null) {
      setNewRecipes(JSON.parse(recipes));
    }
  };

  //handles the inputtext
  const onChangeHandler = (event) => {
    //create new object
    const newObj = { ...newForm, [event.target.name]: event.target.value };
    setNewForm(newObj); // set form state to newly created object
  };

  //submit button handler
  const addNewObjHandler = (event) => {
    console.log(newForm);
    event.preventDefault();

    // POST REQUEST

    setNewRecipes([...newRecipes, newForm]);
  };

  //DELETE fxn
  const onDelete = (objID) => {
    //delete REQUEST

    setNewRecipes(newRecipes.filter((el) => el.title !== objID));
  };

  return (
    <div>
      <form className="new-recipe-form">
        <h2>Add New Ingredient</h2>
        <input
          className="new-recipe-input zoom"
          type="text"
          name="title"
          placeholder="New recipe name..."
          onChange={onChangeHandler}
        />
        <input
          className="new-recipe-input zoom"
          type="text"
          name="ingredients"
          placeholder="New recipe..."
          onChange={onChangeHandler}
        />
        <input
          className="new-recipe-input zoom"
          type="text"
          name="calories"
          placeholder="New recipe calories..."
          onChange={onChangeHandler}
        />
        <input
          className="new-recipe-input zoom"
          type="text"
          name="image"
          placeholder="New recipe image URL..."
          onChange={onChangeHandler}
        />
        <button
          className="new-recipe-button shake"
          type="submit"
          onClick={addNewObjHandler}
        >
          Add New Recipe!
        </button>
      </form>
      <h2>Your Submissions:</h2>
      <div className="submissions">
        {newRecipes.map((recipe) => {
          return (
            <NewRecipeCard
              key={uuid()}
              title={recipe.title}
              calories={parseInt(recipe.calories)}
              ingredients={recipe.ingredients}
              image={recipe.image}
              id={recipe.id}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewRecipes;
