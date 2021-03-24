import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_QUESTIONNAIRES, FETCH_QUESTIONNAIRES_SUECCES } from '../reducers/root-reducer'
import request from 'axios';

function* FetchQuestionnairesFlow() {
  try{
    const response = yield call(fetch, 'api/v1/questionnaires')
    const data = yield response.json();
    yield put(FETCH_QUESTIONNAIRES_SUECCES(data));
  }catch{
    console.log('error while fetching quesionnaires');
  }
}

function* FetchQuestionnaires() {
  yield takeEvery(FETCH_QUESTIONNAIRES, FetchQuestionnairesFlow)
}

export default FetchQuestionnaires;