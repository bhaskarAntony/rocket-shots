import React from 'react'
import Banner from './Banner'
import Services from './Services';
import Companies from '../../components/clients/Clients';
import Contact from '../../components/contact/Contact';

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
     <Banner title='Branding & Advartisment' subtitle='Building Strong Brands and Captivating Audiences with Impactful Advertising' image='https://img.freepik.com/free-photo/disposable-paper-cup-notepad-trendy-color-viva-magenta_169016-52257.jpg?t=st=1735660904~exp=1735664504~hmac=423be60412e3d7670d2fcf67ffec292f3ce86be732a3aa7728968d2a8ec21985&w=1060'/>
    <Services data={data} title='Branding and Advartising'/>
    <Companies/>
    <Contact/>
   </div>
  )
}

export default Branding