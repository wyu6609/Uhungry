import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import SearchRecipe from "./SearchRecipe";

import Favorites from "./Favorites";

function App() {
  //RECIPES JSON state
  const [recipes, setRecipes] = useState([]);

  return (
    //routes
    <div>
      <NavBar />
      <Switch>
        <Route path="/SearchRecipe">
          <SearchRecipe recipes={recipes} setRecipes={setRecipes} />
        </Route>
        <Route path="/favorites">
          <Favorites />
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
