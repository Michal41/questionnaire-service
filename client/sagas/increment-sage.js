import { put, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementAsyncFlow() {
  yield delay(1000)
  yield put({ type: 'counter/incremented' })
}

function* IncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsyncFlow)
}

export default IncrementAsync;