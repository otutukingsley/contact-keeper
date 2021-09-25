import React, { useContext, useEffect } from 'react'
import ContactFilter from '../contacts/ContactFilter'
import ContactForm from '../contacts/ContactForm'
import Contacts from '../contacts/Contacts'
import authContext from '../context/auth/authContext'

const Home = () => {
  const context = useContext(authContext)
  const { loadUser } = context

  useEffect(() => {
    loadUser()
    //eslint-disable-next-line
  }, [])
  return (
    <div className="grid-2">
      <div className="">
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  )
}
export default Home
