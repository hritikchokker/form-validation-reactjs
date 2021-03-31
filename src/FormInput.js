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
  autocomplete,
  value,
  name
}) {
  const [isElementFocused, setElemetFocus] = useState(false);
  const handleValidations = () => {
    const { minLength, maxLength, required, regex } = validations;
    let regTest;
    if (regex) {
      regTest = new RegExp(regex);
    }
    console.log(regTest && regTest.test(value), "tes");
    if (value && value.length > maxLength) {
      return (
        <>
          {labelName} should be less than {maxLength}
        </>
      );
    } else if (value && value.length <= minLength) {
      return (
        <>
          {labelName} should be greater than {minLength}
        </>
      );
    } else if (regTest && regTest.test(value)) {
      return <>{labelName} is not a valid</>;
    } else {
      return <></>;
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
        autocomplete={autocomplete}
        // onBlur={event =>
        //   setElementFocus(fale) && handleValidations(event.target.value)
        // }
        // onFocus={event => setElemetFocus(true)}
        value={value}
        onChange={onChange}
        name={name}
      />
      <p className="error">{handleValidations()}</p>
    </>
  );
}
