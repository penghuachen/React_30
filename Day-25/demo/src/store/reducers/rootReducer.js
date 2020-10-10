const initialState = {
  person: {
    name: "Bill",
    age: 28,
    habbit: "Read comic books"
  }
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeCardContent":
      return {
        ...state,
        person: action.payload
      };
    default:
      return state;
  }
};
