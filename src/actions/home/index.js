import HomeConstants from './constants';

const getUsersRequest = () => ({
  type: HomeConstants.GET_USERS_REQUEST
});

const getUsersSuccess = (response) => ({
  type: HomeConstants.GET_USERS_SUCCESS,
  response
});

const getUsersError = (error) => ({
  type: HomeConstants.GET_USERS_ERROR,
  error
});

export {
  getUsersRequest,
  getUsersSuccess,
  getUsersError
}