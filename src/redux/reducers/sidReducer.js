import { actionTypes } from "../actions/actionType";

const initialState = {
  sid: null,
};

const sidReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SONGID: {
      return {
        ...state,
        sid: action.payload || null,
      };
    }
    default:
      return state;
  }
};
export default sidReducer;
