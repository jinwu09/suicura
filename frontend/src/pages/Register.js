import React from "react";
import "../styles/register.css";
import axios from "axios";
import { Baseurl } from "../API/Config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  let navigate = useNavigate();
  const registerAPI = (
    user_name,
    user_password,
    user_first_name,
    user_last_name
  ) => {
    // console.log(Baseurl);
    axios
      .post(Baseurl + "user/register", {
        user_name,
        user_password,
        user_first_name,
        user_last_name,
      })
      .then((res) => {
        // console.log(res);
        navigate("/");
      })
      .catch((e) => {
        // console.log(e);
      });
  };
  return (
    <div className="body">
      <div className="register-box">
        <h1>SUICURA</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            registerAPI(username, password, firstName, lastName);
          }}
        >
          <div className="register-container">
            <label>
              <b>First Name</b>
            </label>
            <input
              className="container-input"
              type="text"
              placeholder="First Name"
              name="fname"
              required
              onChange={(e) => setFirstName(e.target.value)}
            ></input>

            <label>
              <b>Last Name</b>
            </label>
            <input
              className="container-input"
              type="text"
              placeholder="Last Name"
              name="fname"
              required
              onChange={(e) => setLastName(e.target.value)}
            ></input>

            <label>
              <b>Username</b>
            </label>
            <input
              className="container-input"
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              onChange={(e) => setUsername(e.target.value)}
            ></input>

            <label>
              <b>Password</b>
            </label>
            <input
              className="container-input"
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <label>
              <b>Confirm Password</b>
            </label>
            <input
              className="container-input"
              type="password"
              placeholder="Confirm Password"
              name="psw-1"
              required
            ></input>
            <div className="register-buttons">
              <Link to="/">
                <button className="cancel">Cancel</button>
              </Link>

              <button className="register">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
