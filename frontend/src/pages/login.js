import React from "react";
import "../styles/login.css";

class Login extends React.Component {
  render() {
    return (
      <div class="body">
        <div class="login-box">
          <h1>SUICURA</h1>
          <form action="/action_page.php" method="post">
            <div class="container">
              <label for="uname">
                <b>Username</b>
              </label>
              <input
                class="containerinput"
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
              ></input>
              <label for="psw">
                <b>Password</b>
              </label>
              <input
                class="containerinput"
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              ></input>
              <button class="login" type="submit">
                Login
              </button>
              <button class="register" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
