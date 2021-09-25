import React, { useReducer } from 'react'
import alertContext from './alertContext'
import alertReducer from './alertReducer'
import { v1 as uuid } from 'uuid'
import { SET_ALERT, REMOVE_ALERT } from '../types.js'

const AlertState = ({ children }) => {
  const initialState = []

  const [state, dispatch] = useReducer(alertReducer, initialState)

  //Set Alert
  const setAlert = (message, type, timeout = 3000) => {
    const id = uuid()
    dispatch({
      type: SET_ALERT,
      payload: { message, type, id },
    })

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: id })
    }, timeout)
  }

  return (
    <alertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {children}
    </alertContext.Provider>
  )
}

export default AlertState
