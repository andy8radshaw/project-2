import React from 'react'
import { Link } from 'react-router-dom'

import { getRandomMeal } from '../../lib/api'
import Navbar from '../common/Navbar'

class DinderRandom extends React.Component {
  state = { 
    meals: null
  }

  getData = async () => {
    try {
      const res = await getRandomMeal()
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
    const { idMeal, strMealThumb, strMeal, strArea } = this.state.meals.meals[0]

    return (
      <>
        <Navbar />
        <section className="DinderRandom is-fullheight-with-navbar section">
          <div className="container">
            <div className="columns">
              <div className="column is-half box">
                <div className="polaroid">
                  <figure className="image">
                    <img src={strMealThumb} alt={strMeal} />
                  </figure>
                  <div className="content">
                    <h1>{strMeal}</h1>
                    <h3>{strArea}</h3>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <img className={`${ window.location.href === 'http://localhost:3000/dinder' ? 'round-btn dislike' : 'round-btn' }`} onClick={this.getData} src={require('../../assets/cross3.png')} alt="dislike button" />
                <Link to={`/dinder/${idMeal}`}>
                  <img className={`${ window.location.href === 'http://localhost:3000/dinder' ? 'round-btn like' : 'round-btn' }`} src={require('../../assets/heart2.png')} alt="like button" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default DinderRandom