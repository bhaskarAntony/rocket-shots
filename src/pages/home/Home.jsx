import React from 'react'
import Hero from '../../components/hero/Hero'
import Aboutus from '../../components/aboutus/Aboutus'
import Services from '../../components/services/Services'
import Companies from '../../components/clients/Clients'
import Works from '../../components/works/Works'
import Steps from '../../components/Steps/Steps'
import Contact from '../../components/contact/Contact'

function Home() {
  return (
    <div>
        <Hero/>
        {/* <div className="reel">

        </div> */}
        <Aboutus/>
        <Services/>
        <Companies/>
        <Steps/>
        <Works/>
        <Contact/>
        {/* <FaqsSection/>   */}
    </div>
  )
}

export default Home