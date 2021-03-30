import { put, takeEvery, call, delay } from 'redux-saga/effects'
import { CREATE_QUESTIONNAIRE, CREATE_QUESTION_SUCCES } from '../reducers/root-reducer'
import headers from '../utilis/apiHeader';

const fetchFunc = ({ url, options }) => {
  return fetch(url, options);
}

function* CreateQuestionnaireFlow(action) {
  if (action.payload) {
    const {name, description} = action.payload;
    const url = "/api/v1/questionnaires";
    const body = {
      name,
      description
    };
    const response = yield call(fetchFunc, {
      url: url,
      options : {
        method : 'POST',
        headers : headers,
        body : JSON.stringify(body),
      }
    });
    const data = yield response.json();
    window.location = `/questionnaires/edit/${data.id}`
  }
}

function* CreateQuestionnaire() {
  yield takeEvery(CREATE_QUESTIONNAIRE, CreateQuestionnaireFlow)
}

export default CreateQuestionnaire;