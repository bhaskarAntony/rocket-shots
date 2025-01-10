import React from 'react'
import Banner from './Banner'
import Services from './Services';
import Companies from '../../components/clients/Clients';
import Contact from '../../components/contact/Contact';
import Header from '../../components/header/Header';

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
    <Services data={data} title='Branding and Advertising'/>
    <Companies/>
    <Contact/>
   </div>
  )
}

export default Branding