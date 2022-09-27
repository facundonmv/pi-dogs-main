import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage'
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Training from "./components/Training";
import Health from "./components/Health";
import CreateDog from "./components/CreateDog"

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path={"/"} render={() => <LandingPage />} />
      <Route exact path={"/home"} render={() => <Home />} />
      <Route path={"/training"} render={() => <Training />} />
      <Route path={"/health"} render={() => <Health />} />
      <Route path="/dogs/:id" render={() => <Detail />} />
      <Route path={"/create"} render={() => <CreateDog />} />
      </Switch>
    </div>
  );
}

export default App;