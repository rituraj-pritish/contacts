import React, {useContext,useEffect} from 'react'

import AuthContext from '../../contexts/auth/AuthContext'
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import FilterContacts from '../contacts/ContactFilter'

const Home = () => {
  const authContext = useContext(AuthContext);
  const {loadUser} = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  },[])

  return (
    <div className='grid-2'>
      <div>
        <ContactForm/>
      </div>
      <div>
        <FilterContacts/>
        <Contacts/>
      </div>
    </div>
  )
}

export default Home
