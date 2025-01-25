import React from 'react';
import Helmet from 'react-helmet'; // Import Helmet
import './style.css';
import Banner from './Banner';
import Companies from '../../components/clients/Clients';
import Contact from '../../components/contact/Contact';
import Services from './Services';
import Header from '../../components/header/Header';
import i1 from './SPORTI - Senior Police Officers Research and Training Institute - Google Chrome 14-10-2024 16_39_16.png';
import i2 from './SPORTI Services - Accommodation, Conference Halls, Dining - Google Chrome 23-01-2025 11_12_41.png';
import i3 from './SPORTI Services - Accommodation, Conference Halls, Dining - Google Chrome 23-01-2025 11_13_03.png';

function Development() {
  const data = [
    {
      title: "Custom Website Development",
      description: "Build scalable, responsive, and feature-rich websites tailored to your business needs.",
      icon: "bi bi-code-slash"
    },
    {
      title: "E-Commerce Solutions",
      description: "Robust online stores with secure payment integrations and user-friendly interfaces.",
      icon: "bi bi-cart-check"
    },
    {
      title: "Content Management Systems",
      description: "Easy-to-use CMS platforms for seamless content updates and management.",
      icon: "bi bi-file-earmark-code"
    },
    {
      title: "Web Application Development",
      description: "Dynamic web applications designed for performance, scalability, and security.",
      icon: "bi bi-window-stack"
    },
    {
      title: "Website Maintenance & Support",
      description: "Ongoing support to ensure your website remains secure, updated, and optimized.",
      icon: "bi bi-tools"
    },
    {
      title: "SEO Optimization",
      description: "Optimize your website for search engines to improve visibility and drive traffic.",
      icon: "bi bi-bar-chart"
    }
  ];

  const idata = [i1, i2];

  return (
    <section className='dark2'>
      <Helmet>
        <title>Web Development Services in Bangalore - Rocketshots</title>
        <meta name="description" content="Rocketshots offers top-tier web development services, including custom websites, e-commerce solutions, CMS, and SEO optimization to enhance your online presence in Bangalore." />
        <meta name="keywords" content="Web Development, Custom Websites, E-Commerce Solutions, CMS Development, SEO Optimization, Web Applications, Website Maintenance Bangalore" />
        <meta property="og:title" content="Web Development Experts - Rocketshots Bangalore" />
        <meta property="og:description" content="Explore Rocketshots' web development services in Bangalore. We offer custom websites, e-commerce platforms, CMS, and SEO solutions to grow your online presence." />
        <meta property="og:image" content="https://img.freepik.com/free-photo/man-using-laptop-night-top-view-web-banner-with-copy-space_169016-53607.jpg?t=st=1735660274~exp=1735663874~hmac=c87ff6901e47c3a2da90fdd1c58a026629064d96c721698a9c68936191939856&w=1060" />
        <meta property="og:url" content="https://rocketshots.in/web/development" />
        <meta name="twitter:title" content="Web Development Services - Rocketshots Bangalore" />
        <meta name="twitter:description" content="Boost your business with professional web development services by Rocketshots, including custom websites, e-commerce, and SEO optimization in Bangalore." />
        <meta name="twitter:image" content="https://img.freepik.com/free-photo/man-using-laptop-night-top-view-web-banner-with-copy-space_169016-53607.jpg?t=st=1735660274~exp=1735663874~hmac=c87ff6901e47c3a2da90fdd1c58a026629064d96c721698a9c68936191939856&w=1060" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://www.rocketshots.in/web/development" />
        <link rel="canonical" href="https://www.rocketshots.in/web/development" />
      </Helmet>

      <Header />
      <Banner 
        title="Top Web Development Services in Bangalore" 
        subtitle="Expert Web Development Solutions to Elevate Your Online Presence with Custom Websites, E-Commerce Platforms, and SEO-Optimized Websites in Bangalore"
        image="https://img.freepik.com/free-photo/man-using-laptop-night-top-view-web-banner-with-copy-space_169016-53607.jpg?t=st=1735660274~exp=1735663874~hmac=c87ff6901e47c3a2da90fdd1c58a026629064d96c721698a9c68936191939856&w=1060"
        alt="Web Development in Bangalore"
      />
      <Services data={data} title="Professional Web Development Services" />
      
      {/* Gallery Section */}
      <section className="p-3 p-md-5">
        <h1 className="text-center text-white fw-bold">Our Works</h1>
        <div className="line"></div>
        <div className="row">
          {idata.map((item, index) => (
            <div className="col-md-6 mb-3" key={index}>
              <img src={item} alt={`Web Development Project ${index + 1}`} className="w-100" />
            </div>
          ))}
        </div>
      </section>

      <Companies />
      <Contact />
    </section>
  );
}

export default Development;
