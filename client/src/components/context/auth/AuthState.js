import React, { useReducer  } from 'react'
import axios from 'axios'
import setAuthToken from '../../../utils/setAuthToken'
import authContext from './authContext'
import authReducer from './authReducer'
import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOGOUT,
  LOGIN_FAILURE,
  USER_LOADED,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  AUTH_ERROR,
} from '../types.js'

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuth: null,
    loading: true,
    error: null,
    user: null,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  //Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }

    try {
      const res = await axios.get('/api/auth')
      dispatch({ type: USER_LOADED, payload: res.data })
    } catch (err) {
      dispatch({ type: AUTH_ERROR })
    }
  }
  //Register User
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/api/users', formData, config)

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })

      loadUser()
    } catch (err) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: err.response.data.message,
      })
    }
  }
  //Login User
  const login = async (loginData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/api/auth', loginData, config)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })

      loadUser()
    } catch (err) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response.data.message,
      })
    }
  }
  //Logout
  const logout = () => {
    dispatch({ type: LOGOUT })
  }
  //Clear errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS })
  }

  return (
    <authContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        loading: state.loading,
        error: state.error,
        user: state.user,
        register,
        loadUser,
        logout,
        login,
        clearErrors,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthState
