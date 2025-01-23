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

      const sections = [
        {
          title: 'Social Media Marketing',
          description:
            'Harness the power of social media to elevate your brand’s presence and engage with a wider audience. Benefits include increased brand recognition, enhanced customer engagement, cost-effective marketing, improved customer insights, and higher conversion rates.',
        },
        {
          title: 'Email Marketing',
          description:
            'Personalized email marketing re-engages clients by offering tailored messages, exclusive incentives, and stronger connections, driving growth and engagement.',
        },
        {
          title: 'Analysis & Reports',
          description:
            'Monthly Instagram performance reports including top-performing content, audience demographics, engagement metrics, growth trends, hashtag performance, and ad performance.',
        },
        {
          title: 'SEO',
          description:
            'Optimize your website for search engines with services like keyword research, on-page SEO, technical SEO, backlink strategy, and performance tracking for organic growth.',
        },
      ];
      
  return (
    <section className='dark2'>
      <Header/>
    <Banner title='Digital Marketing' subtitle='Driving Growth and Engagement Through Strategic Digital Marketing Solutions' image='https://img.freepik.com/premium-photo/man-holding-phone-with-digital-marketing-screen_218381-4205.jpg?w=1060'/>
    <div className="text-center text-white p-3 p-md-5 ">
        <h1 className='fs-1 fw-bold'><span className="text-aqua">Rocketshots</span> Digital Marketing</h1>
        <p>We offer tailored solutions to enhance your online presence and drive business growth.</p>
      </div>

      <div className="cards-container p-3 p-md-5">
        <div className="row">
        {sections.map((section, index) => (
         <div className="col-md-4 mb-4">
           <div className="service-card-page step-card text-center h-100">
          <div className="content h-100 p-3 text-white">
          <div className="step-icon">
            </div>
            <h1 className="fs-3">{section.title}</h1>
            <p className="fs-5">{section.description}</p>
          </div>
        </div>
         </div>
        ))}
        </div>
      </div>
    <Services data={data} title='Digital Marketing'/>
    </section>
  )
}

export default Marketing