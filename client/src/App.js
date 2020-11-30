import React from 'react'
import { Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './screens/Landing'
import Dashboard from './screens/Dashboard'
import Peek from './screens/Peek'
import NotFound from './screens/NotFound'

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/' component={Landing} />

        <Route exact path='/dashboard' component={Dashboard} />

        <Route path='/account/'>
          <Container>
            <Peek />
            <Footer />
          </Container>
        </Route>

        <Route path='/peek/:id/:secret' component={Peek} />

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
