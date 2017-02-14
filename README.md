# react-redux-unify-template  
根据自己的经验集成redux, reactjs等mobie h5和普通h5网站 
依赖: 
1.修改redux-async支持嵌套action(redux-async源码可以看看https://www.npmjs.com/package/redux-async) 
主要: 
const nestActionSpread = next => (action, attach) => { 
  const typeSpread = obj => obj instanceof Object ? obj : undefined; 
  // 判断是否嵌套action 
  action.type instanceof Array 
    ? action.type 
    .map(type => ({ ...action, type: typeSpread(type) && type.type || type, ...typeSpread(type), ...attach })) 
    .forEach(action => next(action)) 
    : next({ ...action, type: typeSpread(action.type) && action.type.type || action.type, ...typeSpread(action.type), ...attach }); 
}; 
(1)在redux-async基础上支持多个action 
例子: 
export const userLogin = values => { 
  return { 
    types: [ [ GET_USERS_REQUEST, ROOTNOTLOADED ], [ GET_USERS_SUCCESS, ROOTLOADED, { type: SHOWTOAST, value: '加载成功' } ], [ GET_USERS_FAILURE, ROOTLOADED ] ], 
    payload: { 
      user: api.getUser(values).then(response => response.data.user), 
      uid: 0 
    } 
  }; 
}; 

const initialState = {};  
export default createReducer(initialState, {  
  [ROOTLOADED] (state, action) { 
    return { ...state, isrootLoaded: true }; 
  }, 
  [ROOTNOTLOADED] (state, action) { 
    return { ...state, isrootLoaded: false }; 
  }, 
  [SHOWTOAST] (state, action) { 
    DeadToast.makeText(action.value).show(); 
    return state; 
  } 
}); 
