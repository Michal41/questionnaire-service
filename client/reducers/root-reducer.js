import { createStore, applyMiddleware } from 'redux'
import { createAction } from 'redux-actions'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas/root-saga";

export const FETCH_QUESTIONNAIRES = createAction('QUESTIONNAIRES/FETCH-QUESIONNAIRES');
export const FETCH_QUESTIONNAIRES_SUECCES = createAction('FETCH_QUESTIONNAIRES_SUECCES');


const sagaMiddleware = createSagaMiddleware()
function rootReducer(state = { value: 2, questionnaires:[] }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    case 'FETCH_QUESTIONNAIRES_SUECCES':
      return {...state, questionnaires: action.payload }
    default:
      return state
  }
}

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga);

export default store;