import { all } from 'redux-saga/effects'
import FetchQuestionnaires from './fetch-questionnaires'
import CreateQuestion from './create-question'

export default function* rootSaga() {
  yield all([
    FetchQuestionnaires(),
    CreateQuestion(),
  ])
}