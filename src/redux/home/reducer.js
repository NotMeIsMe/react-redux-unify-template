import { LOADED } from './actions';

function createReducer (initialState, cases) {
  return (state = initialState, action) => {
    const func = cases[action.type];
    return func !== undefined ? func(state, action) : state;
  };
}

const initialState = {};
export default createReducer(initialState, {
  [LOADED] (state, action) {
    return { ...state, isloaded: true };
  }
});
