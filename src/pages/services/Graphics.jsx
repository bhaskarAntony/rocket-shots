import React from 'react'
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
      <Header/>
    <Banner title='Graphics Designing' subtitle='Transforming Ideas into Visual Masterpieces with Creative Graphic Design' image='https://img.freepik.com/premium-photo/graphic-designer-working-colorful-design_1284577-928.jpg?w=1060'/>
    <Services data={data} title="Graphics Designing"/>
    <Companies/>
    <Contact/>
    </section>
  )
}

export default Graphics