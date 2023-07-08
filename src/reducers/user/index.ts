import { createSlice } from '@reduxjs/toolkit';
import { UserState } from './models';

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    fetchUsersFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure
} = userSlice.actions;

export default userSlice.reducer;