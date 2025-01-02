import React from 'react'
import Aboutus from '../../components/aboutus/Aboutus'
import Services from '../../components/services/Services'
import Banner from '../services/Banner'
import Works from '../../components/works/Works'
import Companies from '../../components/clients/Clients'

function About() {
  return (
    <section>
        <Banner title='About Us' subtitle='' image='https://img.freepik.com/free-photo/front-view-people-meeting-cup-coffee_23-2148817096.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid'/>
        <Aboutus/>
        <Services/>
        <Works/>
        <Companies/>
    </section>
  )
}

export default About