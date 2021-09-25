import React, { useContext, Fragment, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import contactContext from '../context/contact/contactContext'
import ContactItem from './ContactItem'
import Spinner from '../layouts/Spinner'

const Contacts = () => {
  const context = useContext(contactContext)

  const { contacts, filtered, getContact, loading } = context

  useEffect(() => {
    getContact()
    //eslint-disable-next-line
  }, [])

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((eachContact) => (
                <CSSTransition
                  key={eachContact._id}
                  timeout={500}
                  classNames="item"
                >
                  <ContactItem contact={eachContact} />
                </CSSTransition>
              )) 
            : contacts.map((eachContact) => (
                <CSSTransition
                  key={eachContact._id}
                  timeout={400}
                  classNames="item"
                >
                  <ContactItem contact={eachContact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  )
}

export default Contacts
