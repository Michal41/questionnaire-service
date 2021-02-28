import { all } from 'redux-saga/effects'
import IncrementAsync from './increment-sage'

export default function* rootSaga() {
  yield all([
    IncrementAsync()
  ])
}