import React, { useState, useEffect } from "react";
import "./SearchRecipe.css";
import RecipeCard from "./RecipeCard";
import { v4 as uuid } from "uuid";
const SearchRecipe = ({ recipes, setRecipes, onAddItem }) => {
  //search and query states
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  //fetch API and UseEffect Hooks
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = () => {
    const APP_ID = "4038b7cf";
    const APP_KEY = "43a9538f3b7dc73105f958bdc5812b2e";
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setRecipes(data.hits);
        console.log(data.hits);
      });
  };

  //search functions
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar zoom"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search a recipe..."
        />
        <button className="search-button shake" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <RecipeCard
            recipeObj={recipe}
            onAddItem={onAddItem}
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

export default SearchRecipe;
