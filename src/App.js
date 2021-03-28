import React, { useState } from "react";
import "./style.css";
import "./App.css";
import InputField from "./inputField";
export default function App() {
  const [count, setCount] = useState(0);
  const [userForm, setUserForm] = useState({
    userName: "",
    age: "",
    email: ""
  });
  const showCrossIcon = key => {
    if (userForm[key] && userForm[key].length > 1) {
      return (
        <i onClick={() => setUserForm({ userName: "" })} class="fa fa-times" />
      );
    }
  };
  const showFormDetails = () => {
    return Object.keys(userForm).forEach(el => {
      return (
        <>
          <label>{el}</label>
          <p>{userForm[el]}</p>
        </>
      );
    });
  };

  return (
    <div>
      <form>
        <div className="username-container">
          <label>Name </label>
          <input
            className="username"
            value={userForm["userName"]}
            onChange={event => setUserForm({ userName: event.target.value })}
            type="text"
            placeholder="name here"
          />
          {showCrossIcon("userName")}
        </div>
      </form>
      <h5>{showFormDetails()}</h5>
    </div>
  );
}
// <InputField
//   fieldName="User Name"
//   keys="userName"
//   onInputChange={setUserForm["userName"]}
// />
