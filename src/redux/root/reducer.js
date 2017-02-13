import { ROOTLOADED } from './actions';

function createReducer (initialState, cases) {
  return (state = initialState, action) => {
    const func = cases[action.type];
    return func !== undefined ? func(state, action) : state;
  };
}

const initialState = {};
export default createReducer(initialState, {
  [ROOTLOADED] (state, action) {
    const isfinished = action.isfinished;
    return { ...state, isrootLoaded: isfinished };
  }
});
