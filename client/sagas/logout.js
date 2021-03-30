import { takeEvery, call, put } from 'redux-saga/effects'
import { LOGOUT, LOGOUT_SUCCES} from '../reducers/root-reducer'
import headers from '../utilis/apiHeader';
LOGOUT_SUCCES
const fetchFunc = ({ url, options }) => {
  return fetch(url, options);
}

function* LogoutFlow() {
  try{
    const url = '/users/sign_out';
    yield call(fetchFunc, {
      url: url,
      options : {
         method : 'DELETE',
         headers : headers,
         body : JSON.stringify(''),
     }
    });
    yield put(LOGOUT_SUCCES());
    }catch{
      console.log('error while logout');
    }
}

function* Logout() {
  yield takeEvery(LOGOUT, LogoutFlow)
}

export default Logout;