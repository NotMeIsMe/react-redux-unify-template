import { ROOTLOADED, ROOTNOTLOADED } from './actions';

function createReducer (initialState, cases) {
  return (state = initialState, action) => {
    const func = cases[action.type];
    return func !== undefined ? func(state, action) : state;
  };
}

const initialState = {};
export default createReducer(initialState, {
  [ROOTLOADED] (state, action) {
    return { ...state, isrootLoaded: true };
  },
  [ROOTNOTLOADED] (state, action) {
    return { ...state, isrootLoaded: false };
  }
});
