import React from 'react'
import './style.css'
import Banner from './Banner'
import Companies from '../../components/clients/Clients';
import Contact from '../../components/contact/Contact';
import Services from './Services';
import Header from '../../components/header/Header';

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
      
  return (
    <section className='dark2'>
      <Header/>
    <Banner title='Web Development' subtitle='Crafting Innovative Websites That Elevate Your Online Presence' image='https://img.freepik.com/free-photo/man-using-laptop-night-top-view-web-banner-with-copy-space_169016-53607.jpg?t=st=1735660274~exp=1735663874~hmac=c87ff6901e47c3a2da90fdd1c58a026629064d96c721698a9c68936191939856&w=1060'/>
    <Services data={data} title='Web Development'/>
    <Companies/>
    <Contact/>
</section>
  )
}

export default Development