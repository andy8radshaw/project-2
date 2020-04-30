import React from 'react'
import { Link } from 'react-router-dom'

import { getRandomMeal } from '../../lib/api'
import Navbar from '../common/Navbar'

class DinderRandom extends React.Component {
  state = { meals: null }

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
    const { idMeal, strMealThumb, strMeal, strArea  }  = this.state.meals.meals[0]
    
    return (
      <>
        <Navbar />
        <section className="DinderRandom section">
          <div className="container">
            <div className="columns">
              <div className="column is-half box">
                <div className="polaroid">  
                  <figure className="image">
                    <img src={ strMealThumb } alt={strMeal} />
                  </figure>
                  <div className="content">
                    <h1>{strMeal}</h1>
                    <h3>{strArea}</h3>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <img className="round-btn" onClick={this.getData} src={require('../../assets/cross3.png')} alt="like button"/>
                <Link to={`/dinder/${idMeal}`}>
                  <img className="round-btn" src={require('../../assets/heart2.png')} alt="like button"/>
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