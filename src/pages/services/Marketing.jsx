import React from 'react'
import Banner from './Banner'
import Services from './Services';
import Companies from '../../components/clients/Clients';
import Contact from '../../components/contact/Contact';
import Header from '../../components/header/Header';

function Marketing() {
    const data = [
        {
          title: "Search Engine Optimization (SEO)",
          description: "Optimize your website to rank higher on search engines and drive organic traffic.",
          icon: "bi bi-bar-chart"
        },
        {
          title: "Pay-Per-Click (PPC) Advertising",
          description: "Maximize your ROI with targeted and cost-effective PPC campaigns.",
          icon: "bi bi-cash-coin"
        },
        {
          title: "Social Media Marketing",
          description: "Enhance your online presence with tailored social media strategies.",
          icon: "bi bi-facebook"
        },
        {
          title: "Email Marketing",
          description: "Engage and retain customers with personalized email campaigns.",
          icon: "bi bi-envelope"
        },
        {
          title: "Content Marketing",
          description: "Create and distribute valuable content to attract and engage your target audience.",
          icon: "bi bi-journal-text"
        },
        {
          title: "Analytics & Reporting",
          description: "Measure and analyze campaign performance with detailed analytics and reports.",
          icon: "bi bi-graph-up"
        }
      ];
      
  return (
    <section className='dark2'>
      <Header/>
    <Banner title='Digital Marketing' subtitle='Driving Growth and Engagement Through Strategic Digital Marketing Solutions' image='https://img.freepik.com/premium-photo/man-holding-phone-with-digital-marketing-screen_218381-4205.jpg?w=1060'/>
    
    <Services data={data} title='Digital Marketing'/>
    </section>
  )
}

export default Marketing