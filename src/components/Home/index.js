import Cookies from 'js-cookie'

import {withRouter, Redirect} from 'react-router-dom'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  console.log(jwtToken)
  const onClickLogout = props => {
    // Cookies.remove('jwt_token')
    const {history} = props
    console.log(props)

    history.replace('/ebank/login')
  }

  if (jwtToken === undefined) {
    return <Redirect to="ebank/login" />
  }
  return (
    <div className="home-page">
      <div className="header-container">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <button onClick={onClickLogout} className="logout-btn" type="button">
          Logout
        </button>
      </div>
      <div className="body-container">
        <h1>Your Flexibility, Our Excellence</h1>
        <img
          className="digital-card-img"
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </div>
    </div>
  )
}

export default withRouter(Home)
