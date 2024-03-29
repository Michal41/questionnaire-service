import { all } from 'redux-saga/effects'
import FetchQuestionnaires from './fetch-questionnaires'
import CreateQuestion from './create-question'
import CreateQuestionnaire from './create-questionnaire'
import UpdateQuestion from './update-question'
import FetchQuestions from './fetch-questions'
import CreateAnswer from './create-answer'
import Logout from './logout'
import PublishQuestionnaire from './publish-questionnaire'
import FetchPublishedQuestionnaires from './fetch-published-questionnaires'
import CreateCompletedQuestionnaire from './create-completed-questionnaire'
import FetchCompetedQuestionnaireQuestions from './feetch-completed-questionnaire-questions'
import SaveCompletedQuestions from './save-completed-questions'

export default function* rootSaga() {
  yield all([
    FetchQuestionnaires(),
    CreateQuestion(),
    CreateQuestionnaire(),
    UpdateQuestion(),
    CreateAnswer(),
    FetchQuestions(),
    Logout(),
    PublishQuestionnaire(),
    FetchPublishedQuestionnaires(),
    CreateCompletedQuestionnaire(),
    FetchCompetedQuestionnaireQuestions(),
    SaveCompletedQuestions(),
  ])
}