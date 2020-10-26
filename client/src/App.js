import React from "react";
import Login from "../src/domain/Login/Login";
import Register from "../src/domain/Register/Register";
import Home from "../src/domain/Home/Home";
import Profile from "../src/domain/Profile/Profile";
import Recipe from "../src/domain/Recipe/Recipe";
import RecipeForm from "../src/domain/Recipe/RecipeForm";
import NavBar from "../src/components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/user/:userid" exact component={Profile} />
          <Route path="/recipe/:recipeid" exact component={Recipe} />
          <Route path="/add-recipe" exact component={RecipeForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
