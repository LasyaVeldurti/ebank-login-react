/// import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {userId: '', pin: '', errorMsg: '', showErrMsg: false}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state

    const loginDetails = {userId, pin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(loginDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.setState({errorMsg: data.error_msg, showErrMsg: true})
    }
  }

  render() {
    const {userId, pin, errorMsg, showErrMsg} = this.state
    return (
      <div className="bg-container">
        <div className="login-container">
          <img
            className="login-img"
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <div className="user-form-container">
            <h1 className="welcome-heading">Welcome Back!</h1>
            <form className="login-form" onSubmit={this.onSubmitLoginForm}>
              <label className="label-text" htmlFor="username">
                User ID
              </label>
              <br />
              <input
                onChange={this.onChangeUserId}
                value={userId}
                id="username"
                type="text"
                placeholder="Enter User ID"
              />
              <br />
              <label className="label-text" htmlFor="pinInput">
                PIN
              </label>
              <br />
              <input
                onChange={this.onChangePin}
                value={pin}
                id="pinInput"
                type="text"
                placeholder="Enter PIN"
              />
              <br />
              <button className="login-btn" type="submit">
                Login
              </button>
              {showErrMsg && <p className="error-msg">{errorMsg} </p>}
            </form>
          </div>
        </div>
      </div>
      //  </Link>
    )
  }
}
//  <Link className="link-item" to="/ebank/login">

export default Login
