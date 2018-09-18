import React from "react";

import Home from './components/Home'
import Signup from './components/Signup'
import Details from './components/Details'

import { Switch, Route } from "react-router-dom";


export default (
  <Switch>
    <Route path="/" exact component={Home}></Route>
    <Route path="/Signup" component={Signup}></Route>
    <Route path="/details" component={Details}></Route>
  </Switch>
)