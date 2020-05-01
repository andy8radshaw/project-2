import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../common/Navbar'
import { getMealWithIngredient } from '../../lib/api'

class DinderIngredientRandom extends React.Component {
  state = {
    mealToDisplay: null,
    meal: null,
    activeModal1: true,
    mealsArray: null,
    gotRandom: false
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
      const mealsArray = await getMealWithIngredient(ingredient)
      // console.log(mealArray)
      this.setState({ mealsArray, activeModal1: false })
      // this.props.history.push('/dinder/ingredient')
    } catch (err) {
      console.log(err)
    }
  }

  getRandomItem = () => {
    const mealsArray = { ...this.state.mealsArray.data }
    if (mealsArray.meals === null) {
      this.props.history.push('/notfound')
    } else {

      // const usedMeals = { ...this.state.usedMeals }
  
      const randomNumber = Math.floor(Math.random() * mealsArray.meals.length)
      console.log(mealsArray.meals[randomNumber])
  
      this.setState({ meal: mealsArray.meals[randomNumber], gotRandom: true })
    }
  }





  render() {
    // if (!this.state.meals) return null

    if (this.state.mealsArray && !this.state.gotRandom) {
      this.getRandomItem()
    }

    // console.log(this.state.meal)

    return (
      <>
        <Navbar />
        <div className={`modal ${this.state.activeModal1 ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
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
        <section className="DinderRandom is-fullheight-with-navbar section">
          <div className="container">
            <div className="columns">
              <div className="column is-half box">
                <div className="polaroid">
                  <figure className="image">
                    <img src={`${this.state.meal ? this.state.meal.strMealThumb : ''}`} alt='food' />
                    {/* <img src={strMealThumb} alt={strMeal} /> */}
                  </figure>
                  <div className="content">
                    <h1>{`${this.state.meal ? this.state.meal.strMeal : ''}`}</h1>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <img onClick={this.getRandomItem} className="round-btn" src={require('../../assets/cross3.png')} alt="dislike button" />
                <Link to={ `/dinder/${this.state.meal ? this.state.meal.idMeal : ''}`} >
                  <img className="round-btn" src={require('../../assets/heart2.png')} alt="like button" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default DinderIngredientRandom