import React from "react";

function Input({ handleChange, setInput }) {
  return (
    <div>
      <input onChange={handleChange} type="text" />
    </div>
  );
}

export default Input;
