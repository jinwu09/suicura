import React, { useEffect } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Baseurl } from "../API/Config";
import { data_decrypt, data_encrpyt } from "../API/crypto";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const PostLogin = (user_name, user_password) => {
    axios
      .post(Baseurl + "user/auth", {
        user_name,
        user_password,
      })
      .then((res) => {
        console.log(res.data.payload);
        navigate("/home");
        localStorage.setItem("m", JSON.stringify(res.data.payload));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="body">
      <div className="login-box">
        <h1>SUICURA</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            PostLogin(username, password);
          }}
        >
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
              <button className="Login">Login</button>
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
