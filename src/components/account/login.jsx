import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [Create, setCreate] = useState(false);
  const [user, setUser] = useState({
    Username: "",
    email: "",
    password: "",
    confirm: ""
  });

  const useValue = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };
  
  const onCreate = () => {
    setCreate(true);
  };

  return (
    <form className="reg-form">
      <h3 className="sign">Sign In</h3>
      <h5 onClick={onCreate} className="create">
        Create an Account
      </h5>
      {Create && (
        <label>

          Username
          <input type="text" name="Username" onChange={useValue} required />
        </label>
      )}
      <label>
        {" "}
        Email Address
        <input type="email" name="email" onChange={useValue} required />
      </label>
      <label>
        Password
        <input type="password" name="password" onChange={useValue} required />
      </label>
      {Create && (
        <label>
          Confirm Password
          <input type="password" name="confirm" onChange={useValue} required />
        </label>
      )}
      <button className="login-button">{Create ? "Register" : "Login"}</button>
    </form>
  );
};

export default Login;
