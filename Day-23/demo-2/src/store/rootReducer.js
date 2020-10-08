import * as actionTypes from "./action-types";

const initialState = {
  number: 0
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENTHANDLER:
      return {
        number: state.number + 1
      };
    case actionTypes.DECREMENTHANDLER:
      return {
        number: state.number - 1
      };
    case actionTypes.INCREMENTTENNUMBERHANDLER:
      return {
        number: action.payload.number + 10
      };
    default:
      return state;
  }
};
