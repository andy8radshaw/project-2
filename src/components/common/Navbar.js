import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (

  <div>
    <div className="navbar is-white">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>
          <div className="Burger-wrap">
            <span className="Burger"></span>
            <span className="Burger"></span>
            <span className="Burger"></span>
          </div>
        </div>
      </div>
    </div>
  </div>

)




export default Navbar