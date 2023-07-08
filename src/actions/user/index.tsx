import { createAction } from '@reduxjs/toolkit';
import userAction from './constants';

export const fetchUsers = createAction(userAction.FETCH_USERS);