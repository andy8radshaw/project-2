import React from 'react'
import { Link } from 'react-router-dom'

import { getMealById } from '../../lib/api'
import Navbar from '../common/Navbar'

class DinderMatch extends React.Component {
  state = {
    meals: null,
    ingredientsList: [],
    activeModal: false
  }

  getData = async () => {
    try {
      const { id } = this.props.match.params
      const res = await getMealById(id)
      this.setState({ meals: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    if (!this.state.meals) return null

    const {
      strMeal,
      strArea,
      strMealThumb,
      strInstructions
    } = this.state.meals.meals[0]

    const ingredientsList = []
    const getIngredientsList = () => {
      const ingredients = []
      const measures = []
      const array = Object.entries(this.state.meals.meals[0])
      array.map(key => {
        if (key[0].search('Ingredient') > 0 && key[1]) {
          ingredients.push(`${key[1]}`)
        }
        if (key[0].search('Measure') > 0 && key[1]) {
          measures.push(`${key[1]}`)
        } 
      })
      for (let i = 0; i < ingredients.length - 1; i++) {
        if (ingredients[i]) {
          ingredientsList.push(`${ingredients[i]}: ${measures[i]}`)
        }
      }
    }
    getIngredientsList()



    return (
      <>
        <Navbar />
        <section className="DinderMatch is-fullheight-with-navbar section">
          <div className="container">
            <section className="top-section">
              <div className="image-container">
                <figure className="image">
                  <img src={strMealThumb} alt={strMeal} />
                </figure>
              </div>
              <div className="ingredients">
                <div className="meal-title">
                  <h1 className="title">{strMeal}</h1>
                  <h2 className="subtitle">{strArea}</h2>
                </div>
                <div className="meal-ingredients">
                  <p className="subtitle">Ingredients:</p>
                  {ingredientsList.map((ingredient, i) => (
                    <p key={i}>{ingredient}</p>
                  ))}
                </div>
                <div className="buttons">
                  <Link to={'/dinder'}>
                    <img className="round-btn" src={require('../../assets/cross3.png')} alt="dislike button" />
                  </Link>
                  <img className="round-btn" src={require('../../assets/favouriteBtn.png')} alt="like button" />
                </div>
              </div>
            </section>
            <section className="bottom-section">
              <div className="method">
                <h1 className="title">Method:</h1>
                <h1>{strInstructions}</h1>
              </div>
            </section>
          </div>
        </section>
      </>
    )
  }


}
export default DinderMatch