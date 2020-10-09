export const changeTextHandler = () => {
  return {
    type: "CHANGETEXTHANDLER"
  };
};

export const asyncChangeTextHandler = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(changeTextHandler());
    }, 2000);
  };
};
