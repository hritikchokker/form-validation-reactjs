import React, { useState } from "react";
import "./style.css";
import "./App.css";
import LoginForm from "./LoginForm";
export default function App() {
  return (
    <div>
      <h1> Form With validations made using Hooks</h1>
      <LoginForm />
    </div>
  );
}
