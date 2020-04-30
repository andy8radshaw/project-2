import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Error from './components/common/Error'
import DinderRandom from './components/dinder/DinderRandom'
import DinderMatch from './components/dinder/DinderMatch'
import DinderIngredientRandom from './components/dinder/DinderIngredientRandom'

// import Modal from './components/common/Modal'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route path="/dinder/ingredient" component={DinderIngredientRandom} />
        <Route path="/dinder/:id" component={DinderMatch} />
        <Route path="/dinder" component={DinderRandom} />
        <Route path="/*" component={Error} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
