import { createStore, applyMiddleware } from 'redux'
import { createAction } from 'redux-actions'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas/root-saga";

export const FETCH_QUESTIONNAIRES = createAction('QUESTIONNAIRES/FETCH-QUESIONNAIRES');
export const FETCH_QUESTIONNAIRES_SUECCES = createAction('FETCH_QUESTIONNAIRES_SUECCES');
export const CREATE_QUESTION = createAction('QUESTION/CREATE-QUESTION');
export const CREATE_QUESTION_SUCCES = createAction('QUESTION/CREATE-QUESTION-SUCCES');
export const CREATE_QUESTIONNAIRE = createAction('QUESTIONNAIRE/CREATE-QUESTIONNAIRE');
export const UPDATE_QUESTION = createAction('QUESTION/UPDATE-QUESTION')
export const FETCH_QUESTIONS = createAction('QUESTIONS/FETCH-QUESIONS');
export const FETCH_QUESTIONS_SUECCES = createAction('QUESTIONS/FETCH_QUESTIONS_SUECCES');
export const CREATE_ANSWER = createAction('ANSWER/CREATE-ANSWER');
export const CREATE_ANSWER_SUCCES = createAction('ANSWER/CREATE-ANSWER_SUCCES');



const sagaMiddleware = createSagaMiddleware()
function rootReducer(state = { questionnaires:[], questions:[], questionsIds: [], answers: [] }, action) {
  switch (action.type) {
    case 'FETCH_QUESTIONNAIRES_SUECCES':
      return {...state, questionnaires: action.payload }
    case 'QUESTION/CREATE-QUESTION-SUCCES':
      return {...state, questionsIds: [...state.questionsIds, action.payload.id]}
    case 'QUESTIONS/FETCH_QUESTIONS_SUECCES':
      return {...state, questions:[...action.payload]}
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