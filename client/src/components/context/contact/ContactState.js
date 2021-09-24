import React, { useReducer } from 'react'
import { v1 as uuid } from 'uuid'
import contactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from '../types.js'


const ContactState = ({ children }) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'John Doe',
        email: 'jdoe25@gmail.com',
        phone: '121-212-3131',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'harrywit@gmail.com',
        phone: '444-555-6666',
        type: 'personal',
      },
    ],
    current: null,
    filtered: null,
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  //Add Contact
  const addContact = (contact) => {
    contact.id = uuid()
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    })
  }
  //Delete Contact
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    })
  }
  //Set Current contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }
  //Clear Current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }
  //update contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact })
  }
  // Filter contact
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text })
  }

  // Clear Filter
  const clearFilterContacts = () => {
    dispatch({ type: CLEAR_FILTER})
  }

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilterContacts,
      }}
    >
      {children}
    </contactContext.Provider>
  )
}

export default ContactState
