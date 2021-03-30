import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_QUESTIONS, FETCH_QUESTIONS_SUECCES} from '../reducers/root-reducer'

function* FetchQuestionsFlow(action) {
  try{
    const response = yield call(fetch, `/api/v1/questionnaires/${action.payload}/questions`)
    const data = yield response.json();
    yield put(FETCH_QUESTIONS_SUECCES(data));
  }catch{
    console.log('error while fetching questions');
  }
}

function* FetchQuestions() {
  yield takeEvery(FETCH_QUESTIONS, FetchQuestionsFlow)
}

export default FetchQuestions;