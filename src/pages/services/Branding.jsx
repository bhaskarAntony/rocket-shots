import React from 'react'
import Banner from './Banner'
import Services from './Services';
import Companies from '../../components/clients/Clients';
import Contact from '../../components/contact/Contact';
import Header from '../../components/header/Header';
import Affliated from './Affliated';
import Collabrations from './Collabrations';
import action_cut_logo from './action_cut_logo.png'
import Part from './Part';
import ServiceIcons from './ServiceIcons';

function Branding() {
    const data = [
        {
          title: "Brand Identity Development",
          description: "Create a unique and memorable brand identity, including logos, taglines, and more.",
          icon: "bi bi-palette"
        },
        {
          title: "Social Media Campaigns",
          description: "Boost your brand visibility with strategic social media marketing campaigns.",
          icon: "bi bi-megaphone"
        },
        {
          title: "Print and Digital Advertising",
          description: "High-quality advertisements for print and digital platforms to engage your audience.",
          icon: "bi bi-printer"
        },
        {
          title: "Content Marketing",
          description: "Develop compelling content to communicate your brand's value and message.",
          icon: "bi bi-file-text"
        },
        {
          title: "Influencer Marketing",
          description: "Collaborate with influencers to amplify your brand reach and engagement.",
          icon: "bi bi-people"
        },
        {
          title: "Market Research and Analysis",
          description: "Gain insights into your target audience and competitors for effective branding strategies.",
          icon: "bi bi-graph-up-arrow"
        }
      ];
      
  return (
   <div>
    <Header/>
     <Banner title='Branding and Advertising' subtitle='Building Strong Brands and Captivating Audiences with Impactful Advertising' image='https://img.freepik.com/premium-photo/digital-revolution-honoring-social-media-day_1007543-15180.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid'/>
   <section className='dark2 p-3 p-md-5'>
   <div className="row text-white bg-dark p-3 p-md-5 rounded-4 shadow">
        <div className="col-md-12 m-auto">
            <h1 className="fs-3 fw-bold text-center d-flex flex-wrap align-items-center gap-3"><span>
            In Affliation with <span className="text-aqua">Action Cut Creation</span></span>   <img src={action_cut_logo} alt=""style={{width:'50px'}}/></h1>
            <div className="line"></div>
            <p className="fs-5">
                -<span className="text-aqua">Rocketshots</span> develops comprehensive brand strategies that align with the client's vision and target market.
            </p>
            <p className="fs-5">
            -We craft compelling brand identities, including logos, taglines, and visual elements, that reflect the essence of the brand.
            </p>
            <p className="fs-5">
            -Leveraging various marketing channels, we design integrated campaigns for maximum brand exposure.
            </p>
        </div>
    </div>
   </section>
     <Collabrations/>
     <Part/>
     <Services data={data} title='Branding and Advertising'/>
     <Affliated/>
     
  
    <Companies/>
    <ServiceIcons/>
    <Contact/>
   </div>
  )
}

export default Branding