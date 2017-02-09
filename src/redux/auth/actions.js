import api from '../../../api/client/api';

// 请求用户信息
export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
export const loadUser = uid => {
  return {
    types: [GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE],
    payload: {
      user: api.getUser(uid).then(response => response.data.user),
      uid
    }
  };
};

