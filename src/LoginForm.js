import React, { useState } from "react";
import FormInput from "./FormInput";
export default function LoginForm() {
  const [userForm, setUserForm] = useState({
    userName: "",
    email: "",
    age: null
  });
  const changeHandler = event => {
    const { name, value } = event.target;
    setUserForm({ [name]: value });
  };
  const checkValidation = () => {
    Object.keys(userForm).forEach(key => {
      if (!userForm[key]) {
        return <>User Name is Required</>;
      }
    });
  };
  const handleSubmit = event => {
    checkValidation();
  };
  console.log(userForm, "user Form");
  const validation = { minLength: 3, required: true, maxLength: 40 };
  return (
    <>
      <form>
        <div>
          <FormInput
            labelName="User Name"
            type="Text"
            placeholder="Enter Username here"
            onChange={changeHandler}
            validations={validation}
            id=""
            className=""
            value=""
            name="userName"
          />
        </div>
        <div>
          <FormInput
            labelName="Email Name"
            type="email"
            placeholder="Enter email here"
            onChange={changeHandler}
            validations={validation}
            id=""
            className=""
            value=""
            name="email"
          />
        </div>
        <div>
          <FormInput
            labelName="Age"
            type="number"
            placeholder="Enter age here"
            onChange={changeHandler}
            validations={validation}
            id=""
            className=""
            value=""
            name="age"
          />
        </div>
        <button onClick={handleSubmit} type="button">
          Submit
        </button>
        {checkValidation()}
      </form>
    </>
  );
}
