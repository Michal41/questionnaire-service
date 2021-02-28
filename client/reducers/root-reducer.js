import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas/root-saga";

const sagaMiddleware = createSagaMiddleware()
function counterReducer(state = { value: 2 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

const store = createStore(
  counterReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga);

export default store;