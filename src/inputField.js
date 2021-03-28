import React, { useState } from "react";
import "./App.css";
export default function InputField({
  fieldName,
  keys,
  onInputChange,
  validations
}) {
  const [keys, inputChange] = useState("");
  return (
    <div className="username-container">
      <label>{fieldName} </label>
      <input
        className="username"
        value={keys}
        onChange={event => onInputChange(event.target.value)}
        type="text"
        placeholder="name here"
      />
      {showCrossIcon("userName")}
      // <p> {validator(validations, keys)}</p>
    </div>
  );
}

function validator(arguments, item) {
  const { minLength, maxLength, regex } = arguments;
  if (item && item.length < minLength) {
    return <>`Minimum Length should be greater than ${minLength}`</>;
  }
}
