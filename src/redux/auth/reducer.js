import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from './actions';

function createReducer (initialState, cases) {
  return (state = initialState, action) => {
    const func = cases[action.type];
    return func !== undefined ? func(state, action) : state;
  };
}

const initialState = {};
export default createReducer(initialState, {
  [GET_USERS_REQUEST] (state, action) {
    const { uid } = action.payload;
    return { isFetching: true, uid };
  },
  [GET_USERS_SUCCESS] (state, action) {
    const { uid, user } = action.payload;
    return { isFetching: false, user, uid };
  },
  [GET_USERS_FAILURE] (state, action) {
    return { isFetching: false, errorMessage: action.payload.message };
  }
});
