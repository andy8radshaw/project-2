import React from 'react'
import { Link } from 'react-router-dom'

import { getMealById } from '../../lib/api'
import Navbar from '../common/Navbar'

class DinderMatch extends React.Component {
  state = {
    meals: null,
    ingredientsList: []
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



  // getIngredientsList = () => {

  //   this.setState({ ingredientsList })
  // this.state.meals.meals.filter(key => {
  //   if (Object.keys(key).IndexOf(strIngredient) === true) {
  //    }
  // })
  // }

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
    const ingredients = [
      this.state.meals.meals[0].strIngredient1,
      this.state.meals.meals[0].strIngredient2,
      this.state.meals.meals[0].strIngredient3,
      this.state.meals.meals[0].strIngredient4,
      this.state.meals.meals[0].strIngredient5,
      this.state.meals.meals[0].strIngredient6,
      this.state.meals.meals[0].strIngredient7,
      this.state.meals.meals[0].strIngredient8,
      this.state.meals.meals[0].strIngredient9,
      this.state.meals.meals[0].strIngredient10,
      this.state.meals.meals[0].strIngredient11,
      this.state.meals.meals[0].strIngredient12,
      this.state.meals.meals[0].strIngredient13,
      this.state.meals.meals[0].strIngredient14,
      this.state.meals.meals[0].strIngredient15,
      this.state.meals.meals[0].strIngredient16,
      this.state.meals.meals[0].strIngredient17,
      this.state.meals.meals[0].strIngredient18,
      this.state.meals.meals[0].strIngredient19,
      this.state.meals.meals[0].strIngredient20
    ]

    const measurements = [
      this.state.meals.meals[0].strMeasure1,
      this.state.meals.meals[0].strMeasure2,
      this.state.meals.meals[0].strMeasure3,
      this.state.meals.meals[0].strMeasure4,
      this.state.meals.meals[0].strMeasure5,
      this.state.meals.meals[0].strMeasure6,
      this.state.meals.meals[0].strMeasure7,
      this.state.meals.meals[0].strMeasure8,
      this.state.meals.meals[0].strMeasure9,
      this.state.meals.meals[0].strMeasure10,
      this.state.meals.meals[0].strMeasure11,
      this.state.meals.meals[0].strMeasure12,
      this.state.meals.meals[0].strMeasure13,
      this.state.meals.meals[0].strMeasure14,
      this.state.meals.meals[0].strMeasure16,
      this.state.meals.meals[0].strMeasure15,
      this.state.meals.meals[0].strMeasure18,
      this.state.meals.meals[0].strMeasure17,
      this.state.meals.meals[0].strMeasure19,
      this.state.meals.meals[0].strMeasure20
    ]

    for (let i = 0; i < ingredients.length - 1; i++) {
      if (ingredients[i]) {
        ingredientsList.push(`${ingredients[i]}: ${measurements[i]}`)
      }
    }


    console.log(this.state)


    return (
      <>
        <Navbar />
        <section className="DinderMatch section">
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
                  <p>Ingredients:</p>
                  {ingredientsList.map((ingredient, i) => (
                    <p key={i}>{ingredient}</p>
                  ))}
                </div>
                <div className="buttons">

                  <Link to={'/dinder'}>
                    <img className="round-btn" src={require('../../assets/cross3.png')} alt="dislike button" />
                  </Link>
                  <img className="round-btn" src={require('../../assets/heart2.png')} alt="like button" />
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