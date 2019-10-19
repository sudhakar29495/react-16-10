import HomeConstants from '../actions/home/constants';

const initialState = {
  loading: false,
  users: []
};

const homeReducer = (state = initialState, action) => {
  switch(action.type) {
    case HomeConstants.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case HomeConstants.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.response
      };
    case HomeConstants.GET_USERS_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return {
        ...state
      }
  }
}

export default homeReducer;