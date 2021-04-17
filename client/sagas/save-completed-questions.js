import {  takeEvery, call } from 'redux-saga/effects'
import { SAVE_COMPLETED_QUESTIONS } from '../reducers/root-reducer'
import headers from '../utilis/apiHeader';


const fetchFunc = ({ url, options }) => {
  return fetch(url, options);
}

function* SaveCompletedQuestionsFlow(action) {
  if (action.payload) {
    const {filedQuestions, completedQuestionnaireId} = action.payload
    const url = `/api/v1/completed_questionnaires/${completedQuestionnaireId}/completed_questions`;
    const body = {
      completed_question: {
        questions_list: filedQuestions
      }
    };
    yield call(fetchFunc, {
      url: url,
      options : {
        method : 'POST',
        headers : headers,
        body : JSON.stringify(body),
      }
    });
    window.location = `/published/all`
  }
}

function* SaveCompletedQuestions() {
  yield takeEvery(SAVE_COMPLETED_QUESTIONS, SaveCompletedQuestionsFlow)
}

export default SaveCompletedQuestions;