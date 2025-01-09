import React from 'react'
import Banner from '../services/Banner'
import Contact from '../../components/contact/Contact'
import Header from '../../components/header/Header'

function ContactPage() {
  return (
    <div>
      <Header/>
         <Banner title='Contact Us' subtitle='' image='https://img.freepik.com/free-photo/lifestyle-technology-concept-portrait-cheerful-happy-ginger-red-hair-girl-with-joyful-exc_1258-123883.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid'/>
         <Contact/>
    </div>
  )
}

export default ContactPage