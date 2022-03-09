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
  const fetchNewRecipes = () => {
    fetch("http://localhost:6001/newRecipes")
      .then((resp) => resp.json())
      .then((data) => setNewRecipes(data));
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
    fetch("http://localhost:6001/newRecipes", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "success");
        setNewRecipes([...newRecipes, data]);
      });
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
          placeholder="New recipe ingredients..."
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewRecipes;
