import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { MainContainer, HomeContainer, NotFoundContainer } from 'containers'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path='*' component={NotFoundContainer} />
    </Route>
  </Router>
)

export default routes
