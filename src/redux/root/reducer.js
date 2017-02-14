import { ROOTLOADED, ROOTNOTLOADED, SHOWTOAST } from './actions';
import DeadToast from '../../components/toast/toast';

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
  },
  [SHOWTOAST] (state, action) {
    console.log('toast');
    DeadToast.makeText('Hello, World!').show();
    return state;
  }
});
