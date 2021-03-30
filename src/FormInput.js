import React, { useState } from "react";
import "./App.css";
export default function FormInput({
  labelName,
  type,
  placeholder,
  onChange,
  validations,
  id,
  className,
  value,
  name
}) {
  const [isElementFocused, setElemetFocus] = useState(false);
  const handleValidations = value => {
    console.log(value, "vaslss");
    if (validations && isElementFocused) {
      const { minLength, maxLength, required } = validations;
      if (!value) {
        return <>{labelName} is Required</>;
      }
      if (value && value.length < minLength) {
        return (
          <>
            {labelName} should be atleast {minLength}
          </>
        );
      }
    }
  };
  return (
    <>
      <label htmlFor={name}>{labelName}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className={className}
        onBlur={event => handleValidations(event.target.value)}
        onFocus={event => setElemetFocus(true)}
        value={value}
        onChange={onChange}
        name={name}
      />
      <p className="error">{handleValidations(value)}</p>
    </>
  );
}
