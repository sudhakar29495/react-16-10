import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import homeReducer from './homeReducer';

const rootReducer = (history) => combineReducers({
  home: homeReducer,
  router: connectRouter(history),
});

export default rootReducer;