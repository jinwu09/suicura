import React from "react"
import "../styles/register.css"

class Register extends React.Component {
  render() {
    return (
      <div class="body">
        <div class="register-box">
          <h1>SUICURA</h1>
          <form action="/action_page.php" method="post">
            <div class="register-container">
              <label for="fname">
                <b>First Name</b>
              </label>
              <input
                class="container-input"
                type="text"
                placeholder="First Name"
                name="fname"
                required
              ></input>

              <label for="lname">
                <b>Last Name</b>
              </label>
              <input
                class="container-input"
                type="text"
                placeholder="Last Name"
                name="fname"
                required
              ></input>

              <label for="uname">
                <b>Username</b>
              </label>
              <input
                class="container-input"
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
              ></input>

              <label for="psw">
                <b>Password</b>
              </label>
              <input
                class="container-input"
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              ></input>

              <label for="psw-1">
                <b>Confirm Password</b>
              </label>
              <input
                class="container-input"
                type="password"
                placeholder="Confirm Password"
                name="psw-1"
                required
              ></input>
              <div class='register-buttons'>
              <button class="cancel">
                Cancel
              </button>
              <button class="register" type="submit">
                Register
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register
