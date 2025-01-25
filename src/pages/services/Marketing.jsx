import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from './Banner';
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
      <Helmet>
        <title>Digital Marketing Services in Bangalore - SEO, PPC, Social Media, Email Marketing, & Analytics</title>
        <meta name="description" content="Get the best digital marketing services in Bangalore. Boost your business with SEO, PPC, social media marketing, email campaigns, content creation, and analytics." />
        <meta name="keywords" content="digital marketing, SEO services, PPC advertising, social media marketing, email marketing, content marketing, analytics and reporting, marketing services Bangalore, digital marketing agency" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Digital Marketing Services in Bangalore - SEO, PPC, Social Media, Email Marketing, & Analytics" />
        <meta property="og:description" content="Boost your online presence and drive business growth with tailored digital marketing strategies including SEO, PPC, content marketing, email campaigns, and detailed analytics." />
        <meta property="og:image" content="https://img.freepik.com/premium-photo/man-holding-phone-with-digital-marketing-screen_218381-4205.jpg?w=1060" />
        <meta property="og:url" content="https://www.rocketshots.in/marketing" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.rocketshots.in/marketing" />
      </Helmet>

      <Header />
      <Banner 
        title="Digital Marketing Services in Bangalore - SEO, PPC, Social Media, Email Marketing, & Analytics" 
        subtitle="Boost Your Online Presence and Drive Business Growth with Rocketshots’ Expert Digital Marketing Solutions - SEO, PPC, Social Media, Content Marketing, and More."
        image="https://img.freepik.com/premium-photo/man-holding-phone-with-digital-marketing-screen_218381-4205.jpg?w=1060"
        alt="Digital marketing services, SEO, PPC, social media marketing on a smartphone screen"
      />
      <div className="text-center text-white p-3 p-md-5">
        <h1 className='fs-1 fw-bold'><span className="text-aqua">Rocketshots</span> Digital Marketing</h1>
        <p>We offer tailored solutions to enhance your online presence and drive business growth.</p>
      </div>

      <div className="cards-container p-3 p-md-5">
        <div className="row">
          {sections.map((section, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="service-card-page step-card text-center h-100">
                <div className="content h-100 p-3 text-white">
                  <div className="step-icon"></div>
                  <h1 className="fs-3">{section.title}</h1>
                  <p className="fs-5">{section.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Services data={data} title='Digital Marketing' />
    </section>
  )
}

export default Marketing;
