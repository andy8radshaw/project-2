# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) GA London React Template

`yarn start` to run the development server

`yarn build` to create a build directory


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dinder requirements

### Pages

Home Page - front end URL - '/'

DinderRandom - Front end URL - '/dinder'
             - Back end - GET RANDOM RECIPE

DinderMatch - Front end URL - '/dinder/:id
            - Back end URL - GET SINGLE RECIPE BY ID

Options - (navbar burger style with form on open) - This has Category option & main ingredient option which then filters the get random page by this data inputted by the user

Error - when a user navigates to an incorrect page

## Nice to haves:
Log in page - 
Favourites page - for logged in user
Categories Drop-down
Animation for swiping
change tab logo include dinder logo

### Dependancies
react-router-dom
Bulma
axios

## to do:
nav bar:
- logo
- burger location

home:
- home page start button

random:
- style polaroid
  - font
  - layered pictures fx
  - onload, hover and press buttons animation
  - polaroid swipe animation

match page:
- styling