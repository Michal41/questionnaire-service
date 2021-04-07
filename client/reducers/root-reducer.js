import { createStore, applyMiddleware } from 'redux'
import { createAction } from 'redux-actions'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas/root-saga";
import {handleAnswerChange, handleQuestionChange} from './utilis';

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
export const HANDLE_ANSWER_CHANGE = createAction('ANSWER/HANDLE-CHANGE');
export const HANDLE_QUESTION_CHANGE = createAction('QUESTION/HANDLE-CHANGE');
export const LOGOUT = createAction('USER/LOGOUT');
export const LOGOUT_SUCCES = createAction('USER/LOGOUT-SUCCES');
export const PUBLISH_QUESTIONNAIRE = createAction('QUESTIONNAIRE/PUBLISH');
export const FETCH_PUBLISHED_QUESTIONNAIRES = createAction('QUESTIONNAIRES/FETCH_PUBLISHED_QUESTIONNAIRES');




const sagaMiddleware = createSagaMiddleware()
function rootReducer(state = { questionnaires:[], questions:[], questionsIds: []}, action) {
  switch (action.type) {
    case 'FETCH_QUESTIONNAIRES_SUECCES':
      return {...state, questionnaires: action.payload }
    case 'QUESTION/CREATE-QUESTION-SUCCES':
      return {...state, questions:[...state.questions, action.payload]}
    case 'QUESTIONS/FETCH_QUESTIONS_SUECCES':
      return {...state, questions:[...action.payload]}
    case 'ANSWER/HANDLE-CHANGE':
      return handleAnswerChange(state, action.payload)
    case 'QUESTION/HANDLE-CHANGE':
      return handleQuestionChange(state, action.payload)
    case 'QUESTIONNAIRES/FETCH_PUBLISHED_QUESTIONNAIRES':
      console.log('reducer log')
      return {...state}
    case 'USER/LOGOUT-SUCCES':
      return {...state, logout: true}
    case 'ANSWER/CREATE-ANSWER_SUCCES':
      const anotherQuestions = state.questions.filter(question => question.id!=action.payload.question.id)
      const question = state.questions.filter(question => question.id==action.payload.question.id)
      const updatedQuestion = {...{...question[0], answers: [...question[0].answers, action.payload]}}
      return {...state, questions:[...anotherQuestions, updatedQuestion] }
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