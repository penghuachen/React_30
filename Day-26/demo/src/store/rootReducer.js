const initialState = {
  number: 0
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENTHANDLER":
      return {
        number: state.number + 1
      };
    case "DECREMENTHANDLER":
      return {
        number: state.number - 1
      };
    case "INCREMENTTENNUMBERHANDLER":
      return {
        number: action.payload.number + 10
      };
    default:
      return state;
  }
};
