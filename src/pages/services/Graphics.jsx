import React from 'react'
import { Helmet } from 'react-helmet'
import Banner from './Banner'
import Services from './Services';
import Companies from '../../components/clients/Clients';
import Contact from '../../components/contact/Contact';
import Header from '../../components/header/Header';

function Graphics() {
  const data = [
    {
      title: "Logo Design",
      description: "Craft unique and professional logos that reflect your brand identity.",
      icon: "bi bi-vector-pen"
    },
    {
      title: "Brochure & Flyer Design",
      description: "Create captivating brochures and flyers to communicate your brand message.",
      icon: "bi bi-file-earmark-richtext"
    },
    {
      title: "UI/UX Design",
      description: "Design intuitive user interfaces and experiences for web and mobile applications.",
      icon: "bi bi-phone-landscape"
    },
    {
      title: "Illustrations & Infographics",
      description: "Design eye-catching illustrations and infographics to convey information visually.",
      icon: "bi bi-bar-chart-steps"
    },
    {
      title: "Packaging Design",
      description: "Develop creative and impactful packaging designs to make your products stand out.",
      icon: "bi bi-box"
    },
    {
      title: "Social Media Graphics",
      description: "Design engaging visuals tailored for social media platforms to boost engagement.",
      icon: "bi bi-images"
    }
  ];

  return (
    <section className='dark2'>
      <Helmet>
        <title>Professional Graphics Designing Services in Bangalore - Logos, UI/UX, Social Media & Packaging Design</title>
        <meta name="description" content="Transform your ideas into visually captivating designs with our expert graphics designing services in Bangalore. Offering logo design, UI/UX, packaging design, and social media graphics." />
        <meta name="keywords" content="graphics designing, logo design, UI/UX design, packaging design, brochure design, social media graphics, graphic design Bangalore, professional graphic design services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Professional Graphics Designing Services in Bangalore - Logos, UI/UX, Social Media & Packaging Design" />
        <meta property="og:description" content="Transform your ideas into stunning visual designs with our graphics designing services in Bangalore. Specializing in logo, packaging, and UI/UX design, social media graphics, and more." />
        <meta property="og:image" content="https://img.freepik.com/premium-photo/graphic-designer-working-colorful-design_1284577-928.jpg?w=1060" />
        <meta property="og:url" content="https://www.rocketshots.in/graphic-designing" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.rocketshots.in/graphic-designing" />
      </Helmet>

      <Header />
      <Banner 
        title="Professional Graphics Designing Services in Bangalore" 
        subtitle="Creative Graphic Design Solutions in Bangalore to Transform Your Ideas into Stunning Visuals - Logos, UI/UX, Social Media Graphics, and More."
        image="https://img.freepik.com/premium-photo/graphic-designer-working-colorful-design_1284577-928.jpg?w=1060"
        alt="Graphic Designer working on logo and branding designs in Bangalore"
      />
      <Services data={data} title="Graphics Designing" />
      <Companies />
      <Contact />
    </section>
  )
}

export default Graphics
