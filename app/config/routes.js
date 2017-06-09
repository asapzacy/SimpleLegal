import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { MainContainer, NotFoundContainer, InvoicesContainer } from 'containers'
import { Home, Invoices } from 'components'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Home} />
      <Route path='invoices'>
        <IndexRoute component={InvoicesContainer} />
        {/* <Route path='/:id' component={InvoicesContainer} /> */}
      </Route>
      <Route path='*' component={NotFoundContainer} />
    </Route>
  </Router>
)

export default routes
