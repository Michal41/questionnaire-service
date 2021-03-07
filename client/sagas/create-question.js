import { put, takeEvery, call } from 'redux-saga/effects'
import { CREATE_QUESTION, CREATE_QUESTION_SUCCES } from '../reducers/root-reducer'
import headers from '../utilis/apiHeader';

const fetchFunc = ({ url, options }) => {
  return fetch(url, options);
}

function* CreateQuestionFlow(action) {
  const url = "/api/v1/questions";
  const body = {
    questionnaire_id: action.payload
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
  yield put(CREATE_QUESTION_SUCCES(data));
}

function* CreateQuestion() {
  yield takeEvery(CREATE_QUESTION, CreateQuestionFlow)
}

export default CreateQuestion;