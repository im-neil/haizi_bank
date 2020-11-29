import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './screens/Landing'
import Dashboard from './screens/Dashboard'
import ChildView from './screens/ChildView'
import NotFound from './screens/NotFound'

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/' component={Landing} />

        <Route exact path='/dashboard' component={Dashboard} />

        <Route path='/account/:id'>
          <Container>
            <ChildView />
            <Footer />
          </Container>
        </Route>

        <Route>
          <Container>
            <NotFound />
          </Container>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
