import React from 'react'
import { render } from 'react-dom'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

function Index() {
  return <h2>Homeasdeee</h2>
}

function About() {
  return <h2>Aboutt</h2>
}

function Users() {
  return <h2>404</h2>
}
const renderApp = () =>
  render(
    <Router>
      <Switch>
        <Route exact path="/" exact component={Index} />
        <Route exact path="/about/:token" component={About} />
        <Route exact path="*" component={Users} />
      </Switch>
    </Router>,
    document.getElementById('app')
  )

if (module.hot) {
  module.hot.accept('./', () => {
    renderApp()
  })
}

renderApp()
