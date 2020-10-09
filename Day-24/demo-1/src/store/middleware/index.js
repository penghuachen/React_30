export const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("middleware", action);
      const result = next(action);
      console.log("middleward next state", store.getState());
      return result;
    };
  };
};
