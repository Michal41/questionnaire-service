import { all } from 'redux-saga/effects'
import FetchQuestionnaires from './fetch-questionnaires'
import IncrementAsync from './increment-sage'
export default function* rootSaga() {
  yield all([
    IncrementAsync(),
    FetchQuestionnaires(),
  ])
}