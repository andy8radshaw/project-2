import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import DinderRandom from './components/dinder/DinderRandom'
import DinderMatch from './components/dinder/DinderMatch'
// import Modal from './components/common/Modal'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route path="/dinder/:id" component={DinderMatch} />
        <Route path="/dinder" component={DinderRandom} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
