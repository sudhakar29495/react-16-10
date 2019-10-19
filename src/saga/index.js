import { takeLatest } from 'redux-saga/effects';
import HomeConstants from '../actions/home/constants';
import { getUsersList } from '../saga/home';

export function* rootSaga() {
  yield takeLatest(HomeConstants.GET_USERS_REQUEST, getUsersList)
}