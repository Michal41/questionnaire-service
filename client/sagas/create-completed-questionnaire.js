import { takeEvery, call } from 'redux-saga/effects'
import { CREATE_COMPLETED_QUESTIONNAIRE } from '../reducers/root-reducer'
import headers from '../utilis/apiHeader';

const fetchFunc = ({ url, options }) => {
  return fetch(url, options);
}

function* CreateFliedQuestionnaireFlow(action) {
  const { questionnaireId } = action.payload;
  const url = '/api/v1/completed_questionnaires';
  const body = {
    questionnaire_id: questionnaireId
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
  window.location=`/published/fill/${data.id}`
}

function* CreateCompletedQuestionnaire() {
  yield takeEvery(CREATE_COMPLETED_QUESTIONNAIRE, CreateFliedQuestionnaireFlow)
}

export default CreateCompletedQuestionnaire;