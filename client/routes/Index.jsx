import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/home/home.component";
import Questioannaires from "../components/questionnaires/questioannaires.component";
import Questioannaire from "../components/questionnaire/questionnaire.component";
import NewQuestionnaire from "../components/new-questionnaire/new-questionnaire.component";
import EditQuestionnaire from "../components/edit-quesrionnaire/edit-questionnaire.comonent";
import { Provider } from 'react-redux'
import store from "../reducers/root-reducer";
import NavBar from "../components/NavBar";


export default (
  <Provider store= {store}>
    <Router>
    <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/questionnaires" exact component={Questioannaires} />
        <Route path="/questionnaires/edit/:id" exact component={EditQuestionnaire} />
        <Route path="/questionnaires/new" exact component={NewQuestionnaire} />
      </Switch>
    </Router>
  </Provider>
);



