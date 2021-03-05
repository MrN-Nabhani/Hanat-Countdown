import React from "react";

function InputField({ name, label, onChangeHandler }) {
  return (
    <div>
      <label for={name}>{label}</label>
      <input type="text" onChange={onChangeHandler} />
    </div>
  );
}

export default InputField;
