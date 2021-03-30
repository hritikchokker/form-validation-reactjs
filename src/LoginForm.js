import React from "react";
import FormInput from "./FormInput";
export default function LoginForm() {
  const changeHandler = () => {};
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
            name="User Name"
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
            name="Email"
          />
        </div>
      </form>
    </>
  );
}
