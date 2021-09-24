import React, { useContext, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import contactContext from '../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
  const context = useContext(contactContext)

  const { contacts, filtered } = context

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((eachContact) => (
              <CSSTransition
                key={eachContact.id}
                timeout={500}
                classNames="item"
              >
                <ContactItem contact={eachContact} />
              </CSSTransition>
            ))
          : contacts.map((eachContact) => (
              <CSSTransition
                key={eachContact.id}
                timeout={400}
                classNames="item"
              >
                <ContactItem contact={eachContact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  )
}

export default Contacts
