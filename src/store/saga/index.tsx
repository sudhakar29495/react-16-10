import { takeLatest } from 'redux-saga/effects';
import UserConstants from '../actions/user/constants';
import { fetchUsersSaga } from './user';

export function* rootSaga() {
  yield takeLatest(UserConstants.FETCH_USERS, fetchUsersSaga);
}
