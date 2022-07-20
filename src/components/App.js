import React from "react";
import {Route,Switch} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import "./app.css"; 
function App() {
  return (<div>
    <NavBar/>
    <Switch>
    <Route path="/actors" ><Actors/></Route>
      <Route path="/home" ><Home/></Route>
      <Route path="/directors" ><Directors/></Route>
      <Route path="/movies" ><Movies/></Route>
      
    </Switch>
  </div>)
}

export default App;
