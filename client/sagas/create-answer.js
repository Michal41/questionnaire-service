import { put, takeEvery, call } from 'redux-saga/effects'
import { CREATE_ANSWER, CREATE_ANSWER_SUCCES } from '../reducers/root-reducer'
import headers from '../utilis/apiHeader';


const fetchFunc = ({ url, options }) => {
  return fetch(url, options);
}

function* CreateAnswerFlow(action) {
  //api/v1/questionnaires/1/questions/1/answers
  console.log('log from saga')
  console.log(action)
  const url = `/api/v1/questions/${action.payload}/answers`;

  // const response = yield call(fetchFunc, {
  //   url: url,
  //   options : {
  //      method : 'POST',
  //      headers : headers,
  //  }
  // });
  // const data = yield response.json();
  // yield put(CREATE_ANSWER_SUCCES(data));
}

function* CreateAnswer() {
  yield takeEvery(CREATE_ANSWER, CreateAnswerFlow)
}

export default CreateAnswer;