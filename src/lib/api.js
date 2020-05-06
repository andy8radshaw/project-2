import axios from 'axios'

const baseUrl = `https://www.themealdb.com/api/json/v1/${process.env.REACT_APP_MY_SECRET_KEY}`

const baseUrlAddId = `https://www.themealdb.com/api/json/v1/${process.env.REACT_APP_MY_SECRET_KEY}/lookup.php?i=`

const baseUrlAddIngredient = `https://www.themealdb.com/api/json/v1/${process.env.REACT_APP_MY_SECRET_KEY}/filter.php?i=`

export const getRandomMeal = () => {
  return axios.get(`${baseUrl}/random.php`)
}

export const getMealById = id => {
  return axios.get(`${baseUrlAddId}${id}`)
}

export const getMealWithIngredient = ingredient => {
  console.log(ingredient.ingredient)
  return axios.get(`${baseUrlAddIngredient}${ingredient.ingredient}`)
}