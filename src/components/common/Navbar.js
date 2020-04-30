import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (

  <div className="Navbar">
    <Link to="/" className="">
      <img className="logo" src={require('../../assets/logo2.png')} alt="logo" />
    </Link>
    <div className="navbar-brand">
      <div className="Burger-wrap">
        <span className="Burger"></span>
        <span className="Burger"></span>
        <span className="Burger"></span>
      </div>
    </div>
  </div>


)




export default Navbar