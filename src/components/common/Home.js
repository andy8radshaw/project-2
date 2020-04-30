import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => (
  <div className="Home hero is-fullheight">
    <Link to="/dinder">
      <div className="all-items is-fullheight">
        <figure className="image is-half is-offset-one-quarter">
          <img src={require('../../assets/dinderBW.png')} alt="dinder logo" height="500px;" />
        </figure>
        <div className="is-full is-offset-one-third">
          <p className="start">Start</p>
        </div>
      </div>
    </Link>
  </div>
)

export default Home