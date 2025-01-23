import React from 'react'
import './style.css'
import Banner from './Banner'
import Companies from '../../components/clients/Clients';
import Contact from '../../components/contact/Contact';
import Services from './Services';
import Header from '../../components/header/Header';
import WebDevelopmentServices from './WebDevelopmentServices';
import i1 from './SPORTI - Senior Police Officers Research and Training Institute - Google Chrome 14-10-2024 16_39_16.png'
import i2 from './SPORTI Services - Accommodation, Conference Halls, Dining - Google Chrome 23-01-2025 11_12_41.png'
import i3 from './SPORTI Services - Accommodation, Conference Halls, Dining - Google Chrome 23-01-2025 11_13_03.png'

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
      const idata = [
        i1, i2, i3
      ]
      
  return (
    <section className='dark2'>
      <Header/>
    <Banner title='Web Development' subtitle='Crafting Innovative Websites That Elevate Your Online Presence' image='https://img.freepik.com/free-photo/man-using-laptop-night-top-view-web-banner-with-copy-space_169016-53607.jpg?t=st=1735660274~exp=1735663874~hmac=c87ff6901e47c3a2da90fdd1c58a026629064d96c721698a9c68936191939856&w=1060'/>
    <Services data={data} title='Web Development'/>
    {/* <WebDevelopmentServices/> */}
    <section className="p-3 p-md-5">
      <h1 className="text-center text-white fw-bold">Our Works</h1>
      <div className="line"></div>
      <div className="row">
        {
          idata.map((item, index)=>(
            <div className="col-md-6 mb-3">
              <img src={item} alt="" className="w-100" />
            </div>
          ))
        }
      </div>
    </section>
    <Companies/>
    <Contact/>
</section>
  )
}

export default Development