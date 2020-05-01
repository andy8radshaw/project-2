import React from 'react'
// import { Link } from 'react-router-dom'

import Navbar from '../common/Navbar'
import { getMealWithIngredient } from '../../lib/api'

class DinderIngredientRandom extends React.Component {
  state = {
    meal: null,
    activeModal1: true,
    mealsArray: [],
    usedIndex: []
  }

  getData = async () => {
    try {

      // this.setState({ meals: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  componentDidMount() {
    this.getData()
  }

  handleToggle = () => {
    this.setState({ activeModal1: !this.state.activeModal1 })
  }

  handleChange = event => {
    const ingredient = { ...this.state.ingredient, ingredient: event.target.value }
    this.setState({ ingredient })
  }

  handleSubmit = async event => {
    event.preventDefault()
    
    const ingredient = this.state.ingredient
    try {
      const mealArray = await getMealWithIngredient(ingredient)
      // console.log(mealArray)
      this.setState({ mealArray, activeModal1: false })
      // this.props.history.push('/dinder/ingredient')
    } catch (err) {
      console.log(err)
    }
  }




  render() {
    // if (!this.state.meals) return null
    console.log(this.state.mealArray)
    

    return (
      <>
        <Navbar />
        <div className={`modal ${this.state.activeModal1 ? 'is-active' : ''}`}>
          <div onClick={this.handleToggle} className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <div>
                <h1>Main Ingredient:</h1>
                <p>If you have a main ingredient you want to use, or just have something in the fridge you want to use up, add it below and we will only send you meals that will help you use it up!</p>
                <hr />
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        placeholder="Your Ingredient..."
                        name="ingredient"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-fullwidth is-danger">USE MY INGREDIENT UP!</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <h1>test</h1>
      </>
    )
  }
}

export default DinderIngredientRandom