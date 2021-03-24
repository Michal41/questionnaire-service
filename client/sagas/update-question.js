import { put, takeEvery, call, delay } from 'redux-saga/effects'
import { CREATE_QUESTIONNAIRE, CREATE_QUESTION_SUCCES, UPDATE_QUESTION } from '../reducers/root-reducer'
import headers from '../utilis/apiHeader';


const fetchFunc = ({ url, options }) => {
  return fetch(url, options);
}

function* UpdateQuestionFlow(action) {
  const {content, id} = action.payload
  const body = {content: content}
  const url = `/api/v1/questionnaires/1/questions/${id}`;
  const response = yield call(fetchFunc, {
    url: url,
    options : {
      method : 'PATCH',
      headers : headers,
      body : JSON.stringify(body),
    }
  });
  const data = yield response.json();
}

function* UpdateQuestion() {
  yield takeEvery(UPDATE_QUESTION, UpdateQuestionFlow)
}

export default UpdateQuestion;