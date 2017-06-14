import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { MainContainer, InvoicesContainer } from 'containers'
import { Home, Other, NotFound } from 'components'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Home} />
      <Route path='dashboard' component={Other} />
      <Route path='invoices' component={InvoicesContainer}>
        <Route path=':id' component={InvoicesContainer} />
      </Route>
      <Route path='reports' component={Other} />
      <Route path='vendors' component={Other} />
      <Route path='my-company' component={Other} />
      <Route path='log-out' component={Other} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)

export default routes
