import React from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  render() {
    return (
      <div class='body'>
        <div class='login-box'>
          <h1>SUICURA</h1>
          <form action='' method='post'>
            <div class='login-container'>
              <div class='usernamer'>
                <label for='uname'>
                  <b>Username</b>
                </label>
                <input
                  class='containerinput'
                  type='text'
                  placeholder='Enter Username'
                  name='uname'
                  required
                ></input>
              </div>
              <div class='password'>
                <label for='psw'>
                  <b>Password</b>
                </label>
                <input
                  class='containerinput'
                  type='password'
                  placeholder='Enter Password'
                  name='psw'
                  required
                ></input>
              </div>
              <div class='login-buttons'>
                <button class='Login' type='submit'>
                  Login
                </button>
                <Link to='/Register'>
                  <button class='Register'>Register</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login
