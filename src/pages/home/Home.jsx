import React from 'react'
import Hero from '../../components/hero/Hero'
import Aboutus from '../../components/aboutus/Aboutus'
import Services from '../../components/services/Services'
import Companies from '../../components/clients/Clients'
import Works from '../../components/works/Works'
import Steps from '../../components/Steps/Steps'
import Contact from '../../components/contact/Contact'
import Founder from '../../components/founder/Founder'
import Team from '../../components/founder/Team'
import Part from '../services/Part'
import Slider from '../../components/slider/Slider'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <div>
        <Helmet>
        <meta name="description" content="Rocketshots is a top creative agency in Bangalore specializing in branding, web development, digital marketing, UI/UX design, content creation, and SEO services. We help businesses thrive online with innovative solutions and cutting-edge designs." />
        <meta name="keywords" content="Rocketshots, branding agency Bangalore, web development, content creation, SEO services Bangalore, digital marketing, UI UX design, graphic design, mobile app development, social media marketing, creative agency, online branding, digital advertising" />
        <meta name="author" content="Rocketshots Creative Agency, Bangalore" />

        <meta property="og:title" content="Rocketshots | Branding, Web Development, Digital Marketing & UI/UX Agency in Bangalore" />
        <meta property="og:description" content="Rocketshots is a leading creative agency in Bangalore offering top-notch services in branding, web development, UI/UX design, digital marketing, content creation, and SEO to help your business succeed online." />
        <meta property="og:image" content="https://www.rocketshots.in/static/media/logo.4cf713867c4bf18024cb.png" />
        <meta property="og:url" content="https://www.rocketshots.in" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Rocketshots | Top Creative Agency in Bangalore" />
        <meta name="twitter:description" content="Expert digital solutions from Rocketshots, your branding, web development, UI/UX, SEO, and marketing agency in Bangalore." />
        <meta name="twitter:image" content="https://www.rocketshots.in/static/media/logo.4cf713867c4bf18024cb.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <link rel="canonical" href="https://www.rocketshots.in" />
      </Helmet>
        <Hero/>
        {/* <div className="reel">

        </div> */}
        <Aboutus/>
        <Services/>
        <Companies/>
        <Part/>
        <Works/>
        <Steps/>
        <Founder/>
        <Slider/>
        {/* <Slider3D/> */}
        {/* <Team/> */}
        <Contact/>
        {/* <FaqsSection/>   */}
    </div>
  )
}

export default Home