import React, { useState } from "react";
import "./App.css";
export default function InputField({
  fieldName,
  onInputChange,
  placeholderVal,
  inputType,
  validations
}) {
  const [keys, inputChange] = useState("");
  const showCrossIcon = () => {
    if (keys && keys.length > 1) {
      return <i onClick={() => inputChange("")} class="fa fa-times" />;
    }
  };
  const updateValue = val => {
    console.log(val, "val update");
    onInputChange(val);
    inputChange(val);
  };
  return (
    <div className="username-container">
      <label>{fieldName} </label>
      <input
        className="username"
        value={keys}
        onChange={event => updateValue(event.target.value)}
        type={inputType}
        placeholder={placeholderVal}
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
