import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import authContext from '../context/auth/authContext'
import alertContext from '../context/alert/alertContext'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const authenticationContext = useContext(authContext)
  const alertNotifContext = useContext(alertContext)
  const history = useHistory()

  const { email, password } = user
  const { login, isAuth, error, clearErrors } = authenticationContext
  const { setAlert } = alertNotifContext

  useEffect(() => {
    if (isAuth) {
      history.push('/')
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, isAuth, history])

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    login({
      email,
      password,
    })
  }

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter email..."
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  )
}

export default Login
