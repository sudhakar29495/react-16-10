import axios from 'axios';
import ERRORS from './errors';
import ApiError from './apiError';

export const setupInterceptors = (store) => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.interceptors.response.use((response) => {
    const { status } = response;
    if (status > 205 && status !== 201) {
      switch (status) {
        case 500:
          throw new ApiError(ERRORS.SERVER_ERROR);
        case 403:
          throw new ApiError(ERRORS.SERVER_ERROR);
        case 409:
          throw new ApiError(ERRORS.SERVER_CONFLICT);
        case 401:
          throw response.data.code;
        default:
      }
    } else {
      return response.data;
    }
  }, () => {
    throw new ApiError(ERRORS.NETWORK_ERROR);
  });
};
