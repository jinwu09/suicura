import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Baseurl from "../API/Config";

const postLogin = (user_name, user_password) => {
  axios
    .post(Baseurl + "user/auth", {
      user_name,
      user_password,
    })
    .then((res) => {
      console.log(res.data.payload);
    })
    .catch((e) => {
      console.log(e);
    });
};
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="body">
      <div className="login-box">
        <h1>SUICURA</h1>
        <form action="" method="post">
          <div className="container">
            <div className="usernamer">
              <label>
                <b>Username</b>
              </label>
              <input
                className="containerinput"
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="password">
              <label>
                <b>Password</b>
              </label>
              <input
                className="containerinput"
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="buttons">
              <button
                className="Login"
                onClick={(e) => {
                  e.preventDefault();
                  postLogin(username, password);
                }}
              >
                Login
              </button>
              <Link to="/Register">
                <button className="Register">Register</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
