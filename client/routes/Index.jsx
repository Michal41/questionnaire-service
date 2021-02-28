import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/home/home.component";
import Questioannaires from "../components/questionnaires/questioannaires.component";
import Questioannaire from "../components/questionnaire/questionnaire.component";
import NewQuestionnaire from "../components/new-questionnaire/new-questionnaire.component";
import EditQuestionnaire from "../components/edit-quesrionnaire/edit-questionnaire.comonent";


import { createStore } from 'redux'
import { Provider } from 'react-redux'


function counterReducer(state = { value: 2 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

let store = createStore(counterReducer)

export default (
  <Provider store= {store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/questionnaires" exact component={Questioannaires} />
        <Route path="/questionnaires/edit/:id" exact component={EditQuestionnaire} />
        <Route path="/questionnaires/new" exact component={NewQuestionnaire} />
      </Switch>
    </Router>
  </Provider>
);



