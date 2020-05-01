import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  state = {
    activeModal: false,
    ingredient: '',
    mealArray: []
  }

  handleToggle = () => {
    this.setState({ activeModal: !this.state.activeModal })
  }

  refreshPage = () => {
    window.location.reload()
  }

  render() {
    return (

      <>
        <div className={`modal ${this.state.activeModal ? 'is-active' : ''}`}>
          <div onClick={this.handleToggle} className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <div>
                <h1 className="title is-4">Instructions:</h1>
                <p>We&apos;ll send you a random recipe, decide if you like it or not! Dislike and we&apos;ll send you another, like and its a date! Well... a dinner date at least. You&apos;ll be able to check out the full recipe, ingredient list and method</p>
              </div>
              <hr />
              <div>
                <h1 className="title is-4">Main Ingredient:</h1>
                <p>If you have a main ingredient you want to use, or just have something in the fridge you want to use up, click the button below</p>
                <hr />
                <form>
                  <div className="field" onClick={`${ window.location.href === 'http://localhost:3000/dinder/ingredient' ? this.refreshPage : '' }`}>
                    <Link to='/dinder/ingredient' className="button is-fullwidth is-danger">USE MY INGREDIENT UP!</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        < div className="Navbar" >
          <Link to="/" className="">
            <img className="logo" src={require('../../assets/logo2.png')} alt="logo" />
          </Link>
          <div className="navbar-brand">
            <div onClick={this.handleToggle} className="Burger-wrap">
              <span className="Burger"></span>
              <span className="Burger"></span>
              <span className="Burger"></span>
            </div>
          </div>
        </div >
      </>
    )
  }
}




export default Navbar