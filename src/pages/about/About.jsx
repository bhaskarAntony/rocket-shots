import React from 'react'
import Aboutus from '../../components/aboutus/Aboutus'
import Services from '../../components/services/Services'
import Banner from '../services/Banner'
import Works from '../../components/works/Works'
import Companies from '../../components/clients/Clients'
import Header from '../../components/header/Header'
import Team_Members from './Team_Members'

import c1 from '../../assets/images/1.png'
import c2 from '../../assets/images/10.png'
import c3 from '../../assets/images/11.png'
import c4 from '../../assets/images/12.png'
// import c5 from '../../assets/images/1ROCKET SHOTS LOGO COLOUR.png'
import c6 from '../../assets/images/2.png'
import c7 from '../../assets/images/3.png'
import c8 from '../../assets/images/4.png'
import c9 from '../../assets/images/5.png'
import c10 from '../../assets/images/6.png'
import c11 from '../../assets/images/6klogo-01.png'
import c12 from '../../assets/images/7.png'
import c13 from '../../assets/images/8.png'
import c14 from '../../assets/images/9.png'
import c15 from '../../assets/images/A shot logo final Opposite color PNG.webp'
import c16 from '../../assets/images/Bhartiya Jalpan Logo.png'
import c17 from '../../assets/images/Donne Biryani logo (1).png'
// import c18 from '../../assets/images/Firewater_Horizontal Logo.png'
import c19 from '../../assets/images/Firewater_Horizontal Logo_white.png'
import c20 from '../../assets/images/Four-Seasons-Logo.png'
import c21 from '../../assets/images/Green Theory Logo Files-11.png'
import c22 from '../../assets/images/Ground up coffee Logo 2-1.png'
import c23 from '../../assets/images/Herbalife-Nutrition-Logo.png'
import c24 from '../../assets/images/Hongal project.png'
import c25 from '../../assets/images/Hyperrider.png'
import c26 from '../../assets/images/LAAA.png'
import c27 from '../../assets/images/Logo PDF-1.png'
import c28 from '../../assets/images/Logo Set_6KIOM_og.png'
import c29 from '../../assets/images/PP Logo_w.png'
import c30 from '../../assets/images/Plogo.png'
import c31 from '../../assets/images/Roja Incorp Logo.png'
import c32 from '../../assets/images/SMS LOGO1 (7)-1.png'
import c33 from '../../assets/images/Sanchez UB City.png'
import c34 from '../../assets/images/Sriracha UB City.png'
import c35 from '../../assets/images/WhatsApp Image 2024-02-14 at 4.00.10 PM.jpeg'
// import c36 from '../../assets/images/WhatsApp Image 2024-08-07 at 1.13.40 PM.jpeg'
// import c37 from '../../assets/images/WhatsApp Image 2024-08-07 at 1.13.40 PM.jpeg'
import c38 from '../../assets/images/WhatsApp Image 2024-08-07 at 1.13.41 PM.jpeg'
// import c39 from '../../assets/images/WhiteBigSticker.png'
import c40 from '../../assets/images/YellowBigSticker.png'
import c41 from '../../assets/images/Zest-Logo-2023-Round.png'
import c42 from '../../assets/images/green theory.00_03_08_14.Still002.png'
import c43 from '../../assets/images/groove green logo.png'
import c44 from '../../assets/images/kajavarnamLogo.png'
import c45 from '../../assets/images/karnataka_govt_logo.png'
import c46 from '../../assets/images/khivraj logo.png'
import c47 from '../../assets/images/magnon logo.png'
import c48 from '../../assets/images/pr logo.png'
// import c49 from '../../assets/images/sag.png'
import c50 from '../../assets/images/stepinterior.png'
import c51 from '../../assets/images/teatreesuites.png'
import sms from '../../assets/images/mahalakshmi_sweets.png'
import sangeetha from '../../assets/images/sangeetha.png'
import dewars from '../../assets/images/dewars.png'
import skimnner from '../../assets/images/Skinner logo.jpg'
import friendCarZone from '../../assets/images/fonts car zon.jpg'
import axaleos from '../../assets/images/azaleos.png'
import athletic from '../../assets/images/Main-Logo-Color.png'
import Who from './Who'
import Why from './Why'
import { Helmet } from 'react-helmet'


   

function About() {
  const companyData = [
    // c1,
    sms,
    sangeetha,
    c7,
    c45,
    c2,
    c3,
    c4,
    c6,
    friendCarZone,
    skimnner,
    c8,
    c9,
    c10,
    c11,
    c12,
    axaleos,
    c13,
    c14,
    c15,
    c16,
    c17,
    c19,
    c20,
    c21,
    c22,
    c23,
    c24,
    athletic,
    c25,
    c26,
    c27,
    c28,
    c29,
    c30,
    c31,
    // c32,
    c33,
    c34,
    c35,
    c38,
    c40,
    c41,
    c42,
    c43,
    c44,
   
   
    // c20,
    dewars,
    c33,
    // c14,
    c46,
    c47,
    c48,
    c50,
    c51,
];
  return (
    <section>
       <Helmet>
        <title>About Us - Rocketshots | Digital Marketing, Web Development, and UI/UX Design Experts</title>
        <meta name="description" content="Discover Rocketshots, a leading digital agency providing top-notch digital marketing, web development, graphics designing and UI/UX design services. Learn about our mission, vision, and expertise." />
        <meta name="keywords" content="about us, digital marketing,  web development, graphics designing, UI/UX design, branding, digital agency, design solutions, innovative marketing" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us - Rocketshots | Digital Marketing, Web Development, and UI/UX Design Experts" />
        <meta property="og:description" content="Learn about Rocketshots, a full-service digital agency offering expert digital marketing, web development, and UI/UX design services to help your business grow." />
        <meta property="og:image" content="https://img.freepik.com/free-photo/front-view-people-meeting-cup-coffee_23-2148817096.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid" />
        <meta property="og:url" content="https://www.rocketshots.in/about-us" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.rocketshots.in/about-us" />
      </Helmet>
      <Header/>
      <Banner title="About Us - Rocketshots" subtitle="Learn More About Rocketshots: A Digital Agency Focused on Helping You Achieve Success in the Digital World with Innovative Marketing, Web Development, and Design Solutions" image="https://img.freepik.com/free-photo/front-view-people-meeting-cup-coffee_23-2148817096.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid" />
        {/* <Aboutus/> */}
        <Who/>
        <Why/>
        <div className="container bg-dark p-4 p-md-3 rounded mb-4">
        <p className="fs-5 text-aqua">
          We are dedicated to providing our clients with the highest quality digital marketing, web development, and UI/UX design services to help them reach their digital goals. Our mission is to make your digital presence a success through innovation and expertise.
        </p>
      </div>
        <section className="container-fluid p-3 p-md-5 bg-dark">
          <h1 className="fs-1 fw-bold my-4 text-white text-center">Our <span className="text-aqua">Brands</span></h1>
          <div className="line"></div>
            <div className="row company-images">
              {
                companyData.map((item, index)=>(
                  <div className="col-md-2 col-4">
                    <div className="company-slide">
                      <img src={item} alt="" className="w-100" />
                    </div>
                  </div>
                ))
              }
            </div>
        </section>
        <Team_Members/>
        {/* <Services/> */}
        {/* <Works/> */}
        {/* <Companies/> */}
    
    </section>
  )
}

export default About