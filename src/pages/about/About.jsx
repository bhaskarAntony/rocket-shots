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
        <meta name="description" content="Rocketshots is a leading creative agency in Bangalore, providing exceptional content creation, branding, advertising, event management, product photography, web development, SEO, UI/UX design, digital marketing, and portfolio shooting services across Karnataka. Let us help elevate your brand with innovative strategies and cutting-edge designs." />
    <meta name="keywords" content="Rocketshots Bangalore, branding agency Bangalore, content creation services, digital marketing Bangalore, SEO services, advertising agency, web development, UI/UX design, product photography, event management, creative agency, Rocketshots branding, digital advertising, creative content, social media marketing, SEO agency, product shoots Bangalore, portfolio shooting, branding services, digital agency, advertising agency Bangalore, graphic design services, web design, e-commerce solutions, mobile app development, online marketing, creative solutions, photography services, branding strategies, video production, content marketing, paid search campaigns, SEM, PPC advertising, social media advertising, search engine optimization, brand design, print advertising, logo design, brochure design, flyer design, email marketing, influencer marketing, brand awareness, website redesign, SEO copywriting, local SEO, marketing strategy, business growth, digital presence, content strategy, video marketing, photography agency, event photographers, Google ads, Facebook ads, Instagram ads, YouTube marketing, brand identity, marketing solutions, content creators, photography studios, brand reputation, content optimization, digital strategies, creative branding, website development services, custom web design, brand consistency, product photography Bangalore, user experience, mobile user interface design, website design Bangalore, UI design, graphic design, digital media, web development agency, website redesign services, creative studios, business branding, website content, multimedia content, brand positioning, influencer campaigns, interactive design, social media management, business marketing, email marketing campaigns, marketing research, online presence, online advertising, brand recognition, custom branding, customer engagement, responsive design, visual communication, content management, marketing tactics, online branding, content creation experts, media management, video production services, SEO marketing, brand storytelling, SEO experts, website SEO, mobile optimization, business website design, digital marketing agency, visual design, photo shoot services, product shoot, social media strategy, social content, branding campaigns, SEO content creation, brand guidelines, digital content creation, brand marketing Bangalore, search engine marketing, pay per click ads, design services, interactive design services, custom logo design, search engine ranking, marketing tactics, video content marketing, paid search advertising, Google marketing, creative campaigns, advertising campaign Bangalore, business growth Bangalore, social media influencers, audience engagement, digital branding, digital design, online advertising services, high-quality photography, portfolio photography, marketing tools, web-based marketing solutions, product promotion, search engine rankings, digital advertising strategies, creative development, mobile app design Bangalore, branding experts, creative strategy agency, creative team Bangalore, campaign management, mobile application design, content optimization services, visual storytelling, ad design, business branding solutions, content marketing Bangalore, website branding services, UI development, SEO services Bangalore, social marketing services, online media strategies, photography for websites, video creation for websites, social media content creation, campaign effectiveness, brand campaigns Bangalore, creative photography, creative consultants, ad agency Bangalore, marketing agency Bangalore, social media consultants, visual identity creation, marketing creatives, SEO agency Bangalore, web branding, SEO audits, photo and video shoots, marketing performance, digital content, paid media campaigns, audience targeting, creative direction, SEO techniques, business solutions, professional branding services, UX/UI design, creative consultants Bangalore, SEO consulting, web services Bangalore, user-centered design, digital content creators, mobile marketing strategies, brand creative, social media video marketing, business digital presence, full-service creative agency, digital branding experts, ad creatives, social media design services, audience engagement strategies, creative content creation, ad management, digital design solutions, conversion optimization, digital transformation agency, creative consultants Bangalore, event marketing, experiential marketing, creative advertising strategies" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us - Rocketshots | Digital Marketing, Web Development, and UI/UX Design Experts" />
        <meta property="og:description" content="Learn about Rocketshots, a full-service digital agency offering expert digital marketing, web development, and UI/UX design services to help your business grow." />
        <meta property="og:image" content="https://img.freepik.com/free-photo/front-view-people-meeting-cup-coffee_23-2148817096.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid" />
        <meta property="og:url" content="https://www.rocketshots.in/about-us" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.rocketshots.in/about-us" />

        <script type="application/ld+json">
      {
        `
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Rocketshots",
        "url": "https://www.rocketshots.in",
        "logo": "https://www.rocketshots.in/static/media/logo.4cf713867c4bf18024cb.png",
        "sameAs": [
          "https://www.instagram.com/rocketshots",
          "https://www.facebook.com/rocketshots",
          "https://www.linkedin.com/company/rocketshots-in",
          "https://twitter.com/rocketshots_in",
          "https://www.youtube.com/@rocketshotsentertainment"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 9740007832",
          "contactType": "Customer Service",
          "areaServed": "IN",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Level 15, UB City, Concorde Towers, 1, Vittal Mallya Rd, KG Halli, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560001",
          "addressCountry": "IN"
        },
        "description": "Rocketshots is a leading agency specializing in content creation, branding, advertising, digital marketing, and event management services in Bangalore, Karnataka. We help businesses grow their digital presence and achieve outstanding results."
        `
      }
      </script>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.rocketshots.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://www.rocketshots.in/about-us"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Content Creation",
                "item": "https://www.rocketshots.in/content/creation"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Web Development",
                "item": "https://www.rocketshots.in/web/development"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Branding",
                "item": "https://www.rocketshots.in/branding"
              },
              {
                "@type": "ListItem",
                "position": 6,
                "name": "Graphic Designing",
                "item": "https://www.rocketshots.in/graphic-designing"
              },
              {
                "@type": "ListItem",
                "position": 7,
                "name": "Marketing",
                "item": "https://www.rocketshots.in/marketing"
              },
              {
                "@type": "ListItem",
                "position": 8,
                "name": "UI/UX Design",
                "item": "https://www.rocketshots.in/ui-ux"
              },
              {
                "@type": "ListItem",
                "position": 9,
                "name": "Contact Us",
                "item": "https://www.rocketshots.in/contact-us"
              },
              {
                "@type": "ListItem",
                "position": 10,
                "name": "Gallery",
                "item": "https://www.rocketshots.in/gallery"
              },
              {
                "@type": "ListItem",
                "position": 11,
                "name": "Facebook",
                "item": "https://www.rocketshots.in/facebook"
              },
              {
                "@type": "ListItem",
                "position": 12,
                "name": "WhatsApp",
                "item": "https://www.rocketshots.in/whatsapp"
              },
              {
                "@type": "ListItem",
                "position": 13,
                "name": "Instagram",
                "item": "https://www.rocketshots.in/instagram"
              },
              {
                "@type": "ListItem",
                "position": 14,
                "name": "Social",
                "item": "https://www.rocketshots.in/social"
              },
              {
                "@type": "ListItem",
                "position": 15,
                "name": "Engagement",
                "item": "https://www.rocketshots.in/engagement"
              },
              {
                "@type": "ListItem",
                "position": 16,
                "name": "Portfolio - Ranav",
                "item": "https://www.rocketshots.in/portfolio/ranav"
              },
              {
                "@type": "ListItem",
                "position": 17,
                "name": "Portfolio - Likith",
                "item": "https://www.rocketshots.in/portfolio/likith"
              },
              {
                "@type": "ListItem",
                "position": 18,
                "name": "Portfolio - Vikas",
                "item": "https://www.rocketshots.in/portfolio/vikas"
              },
              {
                "@type": "ListItem",
                "position": 19,
                "name": "Portfolio - Shashank",
                "item": "https://www.rocketshots.in/portfolio/shashank"
              },
              {
                "@type": "ListItem",
                "position": 20,
                "name": "Portfolio - Abhishek",
                "item": "https://www.rocketshots.in/portfolio/abhishek"
              },
              {
                "@type": "ListItem",
                "position": 21,
                "name": "Portfolio - Govindhraj",
                "item": "https://www.rocketshots.in/portfolio/govindhraj"
              },
              {
                "@type": "ListItem",
                "position": 22,
                "name": "Portfolio - Sumanth",
                "item": "https://www.rocketshots.in/portfolio/sumanth"
              },
              {
                "@type": "ListItem",
                "position": 23,
                "name": "Portfolio - Ajay",
                "item": "https://www.rocketshots.in/portfolio/ajay"
              },
              {
                "@type": "ListItem",
                "position": 24,
                "name": "Stills",
                "item": "https://www.rocketshots.in/stills"
              }
            ]
          }
        `}
      </script>

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