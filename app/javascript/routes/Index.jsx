import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/home/home.component";
import Questioannaires from "../components/questionnaires/questioannaires.component";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/questionnaires" component={Questioannaires} />
    </Switch>
  </Router>
);