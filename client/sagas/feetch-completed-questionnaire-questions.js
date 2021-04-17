import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_COMPLETED_QUESTIONNAIRE_QUESTIONS, FETCH_QUESTIONS_SUECCES} from '../reducers/root-reducer'

function* FetchQuestionsFlow(action) {
  try{
    const response = yield call(fetch, `/api/v1/completed_questionnaires/${action.payload}`)
    const data = yield response.json();
    yield put(FETCH_QUESTIONS_SUECCES(data));
  }catch{
    console.log('error while fetching questions');
  }
}

function* FetchCompetedQuestionnaireQuestions() {
  yield takeEvery(FETCH_COMPLETED_QUESTIONNAIRE_QUESTIONS, FetchQuestionsFlow)
}

export default FetchCompetedQuestionnaireQuestions;