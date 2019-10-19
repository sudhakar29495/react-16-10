import React from 'react';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import rootReducer from './reducer';
import * as serviceWorker from './serviceWorker';
import { rootSaga } from './saga';
import { setupInterceptors } from './globals/interceptor';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer(history), applyMiddleware(routerMiddleware(history), sagaMiddleware));

sagaMiddleware.run(rootSaga);
setupInterceptors(store);

const Main = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
