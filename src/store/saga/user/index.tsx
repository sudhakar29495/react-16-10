import { put, call } from "redux-saga/effects";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from '../../reducers/user';
import { fetchUsersService } from "../../services/user.service";

export function* fetchUsersSaga(): any {
  try {
    yield put(fetchUsersRequest());
    // const response = yield call(fetchUsersService);
    const response = [{ name: 'Sudhakar' }];
    yield put(fetchUsersSuccess(response));
  } catch (error: any) {
    yield put(fetchUsersFailure(error.message));
  }
}