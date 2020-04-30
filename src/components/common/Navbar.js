import React from 'react'
import { Link } from 'react-router-dom'


class Navbar extends React.Component {
  state = { activeModal: false }

  handleToggle = () => {
    this.setState({ activeModal: !this.state.activeModal })
  }

  render() {
    return (

      <>
        <div className={`modal ${this.state.activeModal ? 'is-active' : ''}`}>
          <div onClick={this.handleToggle} className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <div>
                <h1>Instructions:</h1>
                <p>We will send you a random recipe, you decide if you like it or not! Dislike and we will send you another, like and you will have access to the full recipe!</p>
              </div>
              <hr />
              <div>
                <h1>Main Ingredient:</h1>
                <p>If you have a main ingredient you want to use, or just have something in the fridge you want to use up add it to the form below and we will send you recipes with it included!</p>
                <hr/>
                <form>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        placeholder="Main Ingredient - (one only!)"
                        name="ingredient"
                      // onChange={handleChange}
                      // value={formData.name}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button type="submit" className="button is-fullwidth is-danger">SHOW ME FOOOOOD</button>
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