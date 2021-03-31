import React, { useState } from "react";
import FormInput from "./FormInput";
export default function LoginForm() {
  const [userForm, setUserForm] = useState({
    userName: "",
    email: "",
    age: ""
  });
  const changeHandler = event => {
    const { name, value } = event.target;
    if (name === "age" && value && value.length > 3) {
      return;
    }
    setUserForm({ [name]: value });
    // const { user } = this.state;
    // user[event.target.name] = event.target.value;
    // this.setState({ user });
  };
  const checkValidation = () => {
    console.log(userForm, "user form");
  };
  const handleSubmit = event => {
    checkValidation();
  };
  const validation = { minLength: 3, required: true, maxLength: 40 };
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailValidations = { regex: emailRegex, ...validation };
  const ageValidations = { required: true };
  return (
    <>
      <form>
        <div>
          <FormInput
            labelName="User Name"
            type="Text"
            placeholder="Enter Username here"
            onChange={changeHandler}
            validations={emailValidations}
            autocomplete="off"
            id=""
            className=""
            value={userForm["userName"]}
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
            autocomplete="off"
            id=""
            className=""
            value={userForm["email"]}
            name="email"
          />
        </div>
        <div>
          <FormInput
            labelName="Age"
            type="number"
            placeholder="Enter age here"
            onChange={changeHandler}
            validations={ageValidations}
            autocomplete="off"
            id=""
            className=""
            value={userForm["age"]}
            name="age"
          />
        </div>
        <button onClick={handleSubmit} type="button">
          Submit
        </button>
      </form>
    </>
  );
}
