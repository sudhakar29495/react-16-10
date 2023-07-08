import { Reducer, combineReducers } from 'redux';
import userReducer from './user';
import { RouterState } from 'redux-first-history';
import { UserState } from './user/models';

export interface AppReducer {
  user: Reducer<UserState>,
  router: Reducer<RouterState>
}

const rootReducer = (routerReducer: Reducer<RouterState>) => combineReducers({
  user: userReducer,
  router: routerReducer,
} as AppReducer);

export default rootReducer;
