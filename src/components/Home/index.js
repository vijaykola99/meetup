import {Link} from 'react-router-dom'
import MeetUpContext from '../../context/MeetUpContext'
import './index.css'

const Home = () => (
  <MeetUpContext.Consumer>
    {value => {
      const {name, topic, register} = value
      const isTrue = name === 'Welcome to Meetup'
      return (
        <div className="home-background">
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          <div className="submit-button-container">
            <h1 className={isTrue ? 'home-heading' : 'home-heading2'}>
              {name}
            </h1>
            <p className={isTrue ? 'home-paragraph' : 'home-paragraph2'}>
              {topic}
            </p>
            {register && (
              <Link to="/register">
                <button className="register-button" type="button">
                  Register
                </button>
              </Link>
            )}
            <img
              className="meetup-image"
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </div>
        </div>
      )
    }}
  </MeetUpContext.Consumer>
)

export default Home
