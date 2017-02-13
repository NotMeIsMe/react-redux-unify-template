import api from '../../../api/client/api';
import { ROOTLOADED, ROOTNOTLOADED } from '../root/actions';

// 请求用户信息
export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
export const loadUser = uid => {
  return {
    types: [ [ GET_USERS_REQUEST, ROOTNOTLOADED ], [ GET_USERS_SUCCESS, ROOTLOADED ], [ GET_USERS_FAILURE, ROOTLOADED ] ],
    payload: {
      user: api.getUser(uid).then(response => response.data.user),
      uid
    }
  };
};

