import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/home/home.component";
import Questioannaires from "../components/questionnaires/questioannaires.component";
import Questioannaire from "../components/questionnaire/questionnaire.component";
import NewQuestionnaire from "../components/new-questionnaire/new-questionnaire.component";


export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/questionnaires" exact component={Questioannaires} />
      <Route path="/questionnaires/show/:id" exact component={Questioannaire} />
      <Route path="/questionnaires/new" exact component={NewQuestionnaire} />
    </Switch>
  </Router>
);