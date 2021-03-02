import { all } from 'redux-saga/effects'
import FetchQuestionnaires from './fetch-questionnaires'
import CreateQuestion from './create-question'
import CreateQuestionnaire from './create-questionnaire'
import UpdateQuestion from './update-question'


export default function* rootSaga() {
  yield all([
    FetchQuestionnaires(),
    CreateQuestion(),
    CreateQuestionnaire(),
    UpdateQuestion(),
  ])
}