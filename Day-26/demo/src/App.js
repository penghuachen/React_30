import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";

const App = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number);

  const incrementHandler = useCallback(
    () => dispatch({ type: "INCREMENTHANDLER" }),
    [dispatch]
  );

  const decrementHandler = useCallback(
    () => dispatch({ type: "DECREMENTHANDLER" }),
    [dispatch]
  );

  const incrementTenNumberHandler = useCallback(
    (number) =>
      dispatch({
        type: "INCREMENTTENNUMBERHANDLER",
        payload: { number }
      }),
    [dispatch]
  );

  return (
    <div className="App">
      <h2>使用 React Redux Hooks 改寫</h2>
      <h2>數字: {number}</h2>
      <button onClick={incrementHandler}>點擊 + 1</button>
      <button onClick={decrementHandler}>點擊 - 1</button>
      <button
        onClick={() => {
          incrementTenNumberHandler(number);
        }}
      >
        由當前數字 + 10
      </button>
    </div>
  );
};

export default App;
