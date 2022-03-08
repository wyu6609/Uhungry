import React, {useState, useEffect} from "react"
import "./NewRecipes.css";
import RecipeCard from "./RecipeCard";
import { v4 as uuid } from "uuid";


const NewRecipes = () => {
  //form to add new recipes to db.json
  const [newRecipeName, setNewRecipeName] = useState("")   
  const [newRecipeDirections, setNewRecipeDirections] = useState("")
  const [newRecipeCalories, setNewRecipeCalories] = useState("")
  const [newRecipeImage, setNewRecipeImage] = useState("")
  const [recipeData, setRecipeData] = useState([])

  function handleRecipeName (event) {
      setNewRecipeName(event.target.value)
      console.log("New Patient Recipe:", newRecipeName)
  }

  function handleRecipeDirections (event) {
      setNewRecipeDirections(event.target.value)
      console.log("New Recipe Directions: ", newRecipeDirections)
  }

  function handleRecipeCalories (event) {
    setNewRecipeCalories(event.target.value)
    console.log("New Recipe Calroies: ", newRecipeCalories)
  }

  function handleRecipeImage (event) {
    setNewRecipeImage(event.target.value)
    console.log("New Recipe Image: ", newRecipeImage)
  } 

  // function onHandle(handler, target) {
  //   handler(target)
  // }

  useEffect(() => {
    fetch(`http://localhost:3000/recipes`)
      .then(response => response.json())
      .then(recipesJson => {
        console.log("recipesJson: ", recipesJson);
        setRecipeData(recipesJson)
    })
  }, [])

  // console.log("Recipe Data:", recipeData)

  function handleSubmit(event) {
     event.preventDefault();
     console.log("Ive been submitted")
      const newRecipe = {
          id: uuid(),
          name: newRecipeName,
          directions: newRecipeDirections,
          calories: newRecipeCalories,
          image: newRecipeImage
      }
      fetch("http://localhost:3000/recipes", {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(newRecipe)
      })
          .then(response => response.json())
          .then(data => {
            console.log("New Recipe Data:", data)
            // recipeData(data)
          })
      setRecipeData([...recipeData, newRecipe])
      setNewRecipeName("");
      setNewRecipeDirections("");
      setNewRecipeCalories("");
      setNewRecipeImage("");
  }

  const mapRecipes = recipeData.map(function(recipe) {
  //  console.log("recipe", recipe)
    return <RecipeCard key={recipe.id} calories={recipe.calories} image={recipe.image} />
  })
  
  //render new recipes under as clickable cards


  return (
    <div className="App">
      <h1> // Add to the Collection // </h1>
      <h2> Drop in Your Favorite Recipes Here!</h2>
        <form onSubmit={handleSubmit} id="new-recipe" className="new-recipe-form">
            <input onChange={handleRecipeName} value={newRecipeName} className="recipe-bar zoom" id="recipe-name" type="text" placeholder="Recipe Name Here" form="new-recipe"/>
            <input onChange={handleRecipeDirections} value={newRecipeDirections} id="recipe-directions" className="recipe-bar zoom" placeholder="Recipe Directions Here" form="new-recipe" />
            <input onChange={handleRecipeCalories} value={newRecipeCalories} id="recipe-calories" className="recipe-bar zoom" placeholder="Recipe Calories Here" form="new-recipe" />
            <input onChange={handleRecipeImage} value={newRecipeImage} id="recipe-image" className="recipe-bar zoom" placeholder="Recipe Image Here" form="new-recipe" />
            {/* <select onChange={handlePatientDeceased} value={newPatientDeceased} name="deceased-or-alive" id="deceased-or-alive" placeholder="Deceased: True or False" form="new-patient-form" >
                <option value="true">True</option>
                <option value="false">False</option>
            </select> */}
            <button className="submit-button shake" type="submit" value="Add Recipe"> Add Recipe </button>
        </form>
            <h2>Your Submissions:</h2>
              <div className="recipes">
              {mapRecipes}  
            </div>
    </div>
  );
};

export default NewRecipes;
