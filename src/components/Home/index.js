import './index.css'

const Home = () => (
  <div className="home-page">
    <div className="header-container">
      <img
        className="logo-img"
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
      />
      <button className="logout-btn" type="button">
        Logout{' '}
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

export default Home
