import React, { useRef, useImperativeHandle, forwardRef } from "react";

const BaseInput = (props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return (
    <input
      type="text"
      placeholder="type text here..."
      ref={inputRef}
      {...props}
    />
  );
};

export default forwardRef(BaseInput);
