import { createStore, compose, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import DevTools from '../components/DevTools/DevTools'

import rootReducer from "../reducers"
import rootSaga from "../sagas"

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(sagaMiddleware), DevTools.instrument())
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
