import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_PUBLISHED_QUESTIONNAIRES, FETCH_QUESTIONNAIRES_SUECCES } from '../reducers/root-reducer'

function* FetchQuestionnairesFlow() {
  try{
    const response = yield call(fetch, '/api/v1//questionnaires/show_published')
    const data = yield response.json();
    yield put(FETCH_QUESTIONNAIRES_SUECCES(data));
  }catch{
    console.log('error while fetching quesionnaires');
  }
}

function* FetchPublishedQuestionnaires() {
  yield takeEvery(FETCH_PUBLISHED_QUESTIONNAIRES, FetchQuestionnairesFlow)
}

export default FetchPublishedQuestionnaires;