import { put } from 'redux-saga/effects';
import { getUsersSuccess, getUsersError } from '../actions/home'
// import { getUsers } from '../service/home';

export function* getUsersList() {
  try {
    const response = [{name: 'sudhakar', email: 'sudhakar29495@gmail.com'}];
    // const response = yield call(getUsers)
    yield put(getUsersSuccess(response));
  } catch (error) {
    yield put(getUsersError(error));
  }
}