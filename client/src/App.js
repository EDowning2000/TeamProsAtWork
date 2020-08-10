import React from "react";
import "./App.css";
import Template from "./components/template/index";
import Vision from "./components/vision/index";
import Contact from "./components/contact/index";
import Home from './components/home/index';
import Pros from './components/pros/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path ='/' exact component = {Home}/>
        <Route path ='/vision' exact component = {Vision}/>
        <Route path ='/pros' exact component = {Pros}/>
        <Route path ='/contact' exact component ={Contact}/>

      </Switch>
    </Router>
    // <Template></Template>
    // <Vision></Vision>
    // <Contact></Contact>
  );
}

export default App;
