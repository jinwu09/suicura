import React from 'react'
import '../styles/login.css'

class Login extends React.Component {
  render() {
    return (
      <div class='body'>
        <div class='login-box'>
          <h1>SUICURA</h1>
          <form action='' method='post'>
            <div class='container'>
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
            </div>
            <div class='buttons'>
              <button class='login' type='submit'>
                Login
              </button>
              <button class='register' type='submit'>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
