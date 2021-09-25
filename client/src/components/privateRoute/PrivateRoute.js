import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import authContext from '../context/auth/authContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const context = useContext(authContext)
  const { isAuth, loading } = context

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PrivateRoute
