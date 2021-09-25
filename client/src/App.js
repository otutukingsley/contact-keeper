import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Navbar from './components/layouts/Navbar'
import ContactState from './components/context/contact/ContactState'
import AuthState from './components/context/auth/AuthState'
import AlertState from './components/context/alert/AlertState'
import Register from './components/AuthComponents/Register'
import Login from './components/AuthComponents/Login'
import setAuthToken from './utils/setAuthToken'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import './App.css'
import Alert from './components/layouts/Alert'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alert />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  )
}

export default App
