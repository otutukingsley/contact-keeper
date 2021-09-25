import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import alertContext from '../context/alert/alertContext'
import authContext from '../context/auth/authContext'

const Register = () => {
  const history = useHistory()
  const context = useContext(alertContext)
  const authenticationContext = useContext(authContext)

  const { setAlert } = context
  const { register, error, clearErrors, isAuth } = authenticationContext

  useEffect(() => {
    if (isAuth) {
      history.push('/')
    }

    if (error === 'User Already Exits') {
      setAlert(error, 'danger')
      clearErrors()
    }

    //eslint-disable-next-line
  }, [error, isAuth, history])

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { name, email, password, confirmPassword } = user

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (name === '' || email === '' || password === '') {
      setAlert('Please fill all fields', 'danger')
    } else if (password !== confirmPassword) {
      setAlert('Passwords do not match', 'danger')
    } else {
      register({
        name,
        email,
        password,
      })
    }
  }

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name..."
            value={name}
            onChange={onChange}
            required
          />
        </div>
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
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  )
}

export default Register
