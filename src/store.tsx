import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers';
import { rootSaga } from './saga';


const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer(routerReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(routerMiddleware).concat(sagaMiddleware),
});
const history = createReduxHistory(store);
sagaMiddleware.run(rootSaga);
// setupInterceptors();

export { store, history };