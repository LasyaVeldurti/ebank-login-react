/// import {Link} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {userId: '', pin: '', errorMsg: '', showErrMsg: false}

  onChangeUsername = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitSuccess = () => {
    console.log('success')
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {userId, pin}
    const url = 'https://apis.ccbp.in/ebank/login/'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
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
            <form className="user-form" onSubmit={this.onSubmitLoginForm}>
              <label className="label-text" htmlFor="username">
                User ID
              </label>
              <br />
              <input
                onChange={this.onChangeUsername}
                value={userId}
                id="username"
                type="text"
                placeholder="Enter User ID"
              />
              <br />
              <label className="label-text" htmlFor="pin">
                PIN
              </label>
              <br />
              <input
                onChange={this.onChangePin}
                value={pin}
                id="pin"
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
