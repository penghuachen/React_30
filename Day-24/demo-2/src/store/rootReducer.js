const initialState = {
  text: "Hello Redux with redux thunk!"
};

export const rootReducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case "CHANGETEXTHANDLER":
      return {
        text: "change text asynchronously with redux thunk!"
      };
    default:
      return state;
  }
};
