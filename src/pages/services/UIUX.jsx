import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from './Banner';
import Services from './Services';
import Companies from '../../components/clients/Clients';
import Contact from '../../components/contact/Contact';
import Header from '../../components/header/Header';

function UIUX() {
  const data = [
    {
      title: "User Research",
      description: "Understand user needs and behaviors through detailed research and analysis to create user-centered designs.",
      icon: "bi bi-search"
    },
    {
      title: "Wireframing & Prototyping",
      description: "Create interactive wireframes and prototypes to visualize designs before development, ensuring user-centric outcomes.",
      icon: "bi bi-diagram-2"
    },
    {
      title: "Responsive Web Design",
      description: "Design web interfaces that adapt seamlessly across all devices and screen sizes to provide a consistent user experience.",
      icon: "bi bi-display"
    },
    {
      title: "Mobile App Design",
      description: "Develop user-friendly and visually appealing designs for mobile applications that enhance user interaction and satisfaction.",
      icon: "bi bi-phone"
    },
    {
      title: "Usability Testing",
      description: "Identify and resolve design issues with in-depth usability testing to ensure a seamless user experience and improved interaction.",
      icon: "bi bi-check2-circle"
    },
    {
      title: "Interaction Design",
      description: "Design engaging and intuitive interactions to enhance user experiences and create memorable digital products.",
      icon: "bi bi-mouse2"
    }
  ];

  return (
    <section className='dark2'>
      <Helmet>
        <title>UI/UX Design Services in Bangalore - User Research, Prototyping, Responsive Web & Mobile App Design</title>
        <meta name="description" content="Enhance user experience with our UI/UX design services. We provide user research, prototyping, responsive web & mobile app design, and usability testing." />
        <meta name="keywords" content="UI/UX design, user experience, web design, mobile app design, responsive design, usability testing, interaction design, prototyping, user research, UI/UX services Bangalore" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="UI/UX Design Services in Bangalore - User Research, Prototyping, Responsive Web & Mobile App Design" />
        <meta property="og:description" content="Transform your digital product with our UI/UX design services. Our expertise in user research, wireframing, prototyping, and usability testing delivers seamless user experiences." />
        <meta property="og:image" content="https://img.freepik.com/premium-photo/panorama-banner-startup-company-employee-planning-user-interface-prototype-mobile-application-website-office-ux-ui-designer-brainstorm-user-friendly-interface-plan-synergic_31965-255237.jpg?w=1060" />
        <meta property="og:url" content="https://www.rocketshots.in/ui-ux" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.rocketshots.in/ui-ux" />
      </Helmet>

      <Header />
      <Banner 
        title="UI/UX Design Services in Bangalore" 
        subtitle="Transform Your Digital Products with Expert UI/UX Design Services - User Research, Wireframing, Responsive Web & Mobile App Design, and Usability Testing."
        image="https://img.freepik.com/premium-photo/panorama-banner-startup-company-employee-planning-user-interface-prototype-mobile-application-website-office-ux-ui-designer-brainstorm-user-friendly-interface-plan-synergic_31965-255237.jpg?w=1060"
        alt="UI/UX design process, wireframing, prototyping for mobile app and web interface"
      />
      <Services data={data} title='UI/UX Design Services' />
      <Companies />
      <Contact />
    </section>
  );
}

export default UIUX;
