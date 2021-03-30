import React, { useState } from "react";
import FormInput from "./FormInput";
export default function LoginForm() {
  const [userForm, setUserForm] = useState({
    userName: "",
    email: ""
  });
  const changeHandler = event => {
    const { name, value } = event.target;
    // setUserForm({ userForm.name: value });
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
      </form>
    </>
  );
}
