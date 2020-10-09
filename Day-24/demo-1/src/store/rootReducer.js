const initialState = {
  text: "Hello Redux!"
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGETEXTHANDLER":
      return {
        text: "Change text with redux thunk after 2 seconds"
      };
    default:
      return state;
  }
};
