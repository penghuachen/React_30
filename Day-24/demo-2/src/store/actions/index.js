export const changeTextHandler = () => {
  console.log(34);

  return {
    type: "CHANGETEXTHANDLER"
  };
};

export const asyncChangeTextHandler = () => {
  return (dispatch) => {
    setTimeout(() => {
      console.log(12);
      dispatch(changeTextHandler());
    }, 2000);
  };
};
