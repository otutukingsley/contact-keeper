import React, { useState, useReducer, useEffect } from 'react'
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
    user: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  //Load User
  //Register User
  //Login User
  //Logout
  //Clear errors

  return (
    <authContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        loading: state.loading,
        error: state.error,
        user: state.user,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

export default AuthState;
