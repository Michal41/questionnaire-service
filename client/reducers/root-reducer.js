import { createStore, applyMiddleware } from 'redux'
import { createAction } from 'redux-actions'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas/root-saga";

export const FETCH_QUESTIONNAIRES = createAction('QUESTIONNAIRES/FETCH-QUESIONNAIRES');
export const FETCH_QUESTIONNAIRES_SUECCES = createAction('FETCH_QUESTIONNAIRES_SUECCES');
export const CREATE_QUESTION = createAction('QUESTION/CREATE-QUESTION')
export const CREATE_QUESTION_SUCCES = createAction('QUESTION/CREATE-QUESTION-SUCCES')

const sagaMiddleware = createSagaMiddleware()
function rootReducer(state = { questionnaires:[], questionsIds: [] }, action) {
  switch (action.type) {
    case 'FETCH_QUESTIONNAIRES_SUECCES':
      return {...state, questionnaires: action.payload }
    case 'QUESTION/CREATE-QUESTION-SUCCES':
      // console.log(state.questionsIds.push(action.payload.id));
      return {...state, questionsIds: [...state.questionsIds, action.payload.id]}
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