import React, { useContext, useRef, useEffect } from 'react'
import contactContext from '../context/contact/contactContext'

const ContactFilter = () => {
  const context = useContext(contactContext)
  const { filterContacts, clearFilterContacts, filtered } = context
  const text = useRef('')

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value)
    } else {
      clearFilterContacts()
    }
  }

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  )
}

export default ContactFilter
