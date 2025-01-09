import React from 'react'
import Banner from './Banner'
import Services from './Services';
import Companies from '../../components/clients/Clients';
import Contact from '../../components/contact/Contact';
import Header from '../../components/header/Header';

function UIUX() {
    const data = [
        {
          title: "User Research",
          description: "Understand user needs and behaviors through detailed research and analysis.",
          icon: "bi bi-search"
        },
        {
          title: "Wireframing & Prototyping",
          description: "Create interactive wireframes and prototypes to visualize designs before development.",
          icon: "bi bi-diagram-2"
        },
        {
          title: "Responsive Web Design",
          description: "Design web interfaces that adapt seamlessly across all devices and screen sizes.",
          icon: "bi bi-display"
        },
        {
          title: "Mobile App Design",
          description: "Develop user-friendly and visually appealing designs for mobile applications.",
          icon: "bi bi-phone"
        },
        {
          title: "Usability Testing",
          description: "Identify and resolve design issues with in-depth usability testing.",
          icon: "bi bi-check2-circle"
        },
        {
          title: "Interaction Design",
          description: "Design engaging and intuitive interactions to enhance user experiences.",
          icon: "bi bi-mouse2"
        }
      ];
      
  return (
    <section className='dark2'>
      <Header/>
    <Banner title='UI UX Designing' subtitle='Designing Intuitive and Engaging User Experiences for Seamless Interaction' image='https://img.freepik.com/premium-photo/panorama-banner-startup-company-employee-planning-user-interface-prototype-mobile-application-website-office-ux-ui-designer-brainstorm-user-friendly-interface-plan-synergic_31965-255237.jpg?w=1060'/>
    <Services data={data} title='UI UX'/>
    <Companies/>
    <Contact/>
    </section>
  )
}

export default UIUX