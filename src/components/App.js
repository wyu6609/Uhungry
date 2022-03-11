import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import SearchRecipe from "./SearchRecipe";
import NewRecipes from "./NewRecipes";
import Favorites from "./Favorites";

function App() {
  //RECIPES JSON state
  const [recipes, setRecipes] = useState([]);
  //favorited Recipe states
  const [favRecipes, setFavRecipes] = useState([]);
  //onAddItem

  const onAddItem = (recipeObj) => {
    //create newObj
    console.log(favRecipes.includes(recipeObj));
    if (favRecipes.includes(recipeObj) === false) {
      setFavRecipes([...favRecipes, recipeObj]);
    }
  };
  console.log(favRecipes);
  console.log(favRecipes);
  //favorites del object
  const deleteObj = (obj) => {
    setFavRecipes(
      favRecipes.filter((el) => el.recipe.image !== obj.recipe.image)
    );
  };

  return (
    //routes
    <div>
      <NavBar />
      <Switch>
        <Route path="/SearchRecipe">
          <SearchRecipe
            recipes={recipes}
            setRecipes={setRecipes}
            onAddItem={onAddItem}
          />
        </Route>
        <Route path="/favorites">
          <Favorites favRecipes={favRecipes} deleteObj={deleteObj} />
        </Route>
        <Route path="/newrecipes">
          <NewRecipes />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
