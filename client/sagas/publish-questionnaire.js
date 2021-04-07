import { put, takeEvery, call, delay } from 'redux-saga/effects'
import { PUBLISH_QUESTIONNAIRE } from '../reducers/root-reducer'
import headers from '../utilis/apiHeader';

const fetchFunc = ({ url, options }) => {
  return fetch(url, options);
}

function* PublishQuestionnaireFlow(action) {
  if (action.payload) {
    console.log(action.payload)
    const url = `/api/v1/questionnaires/${action.payload}/publish_questionnaire`;
    const response = yield call(fetchFunc, {
      url: url,
      options : {
        method : 'PUT',
        headers : headers,
        body : JSON.stringify(""),
      }
    });
    const data = yield response.json();
    console.log(data)
  }
}

function* PublishQuestionnaire() {
  yield takeEvery(PUBLISH_QUESTIONNAIRE, PublishQuestionnaireFlow)
}

export default PublishQuestionnaire;