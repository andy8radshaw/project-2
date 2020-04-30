import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => (
  <div className="Home hero is-fullheight">
    <Link to="/dinder">
      <div className="hero-body">
    
        <div className="is-multiline">
          <figure className="image is-half is-offset-one-quarter">
            <img src={require('../../assets/dinderBW.png')} alt="dinder logo" height="500px;" />
          </figure>
          <div className="is-full is-offset-one-third">
            <p>Click to start</p>
          </div>
        </div>
      </div>
    </Link>
  </div>
)

export default Home