import React from 'react'
import Banner from './Banner'
import Companies from '../../components/clients/Clients'
import Services from './Services'
import Contact from '../../components/contact/Contact';

function ContentCreation() {
    const data = [
        {
          title: "Blog Writing",
          description: "Engaging, SEO-friendly blog content tailored to your industry and audience.",
          icon: "bi bi-pencil-square"
        },
        {
          title: "Social Media Content",
          description: "Creative and visually appealing posts designed to enhance your brand's online presence.",
          icon: "bi bi-share"
        },
        {
          title: "Video Production",
          description: "Professional video content that captivates your audience and communicates your message effectively.",
          icon: "bi bi-camera-video"
        },
        {
          title: "Graphic Design",
          description: "Custom graphics and infographics that make your content stand out.",
          icon: "bi bi-image"
        },
        {
          title: "E-Book Creation",
          description: "Comprehensive and well-designed e-books to showcase your expertise and value.",
          icon: "bi bi-journal-bookmark"
        },
        {
          title: "Copywriting",
          description: "Persuasive and impactful copywriting for websites, ads, and marketing campaigns.",
          icon: "bi bi-file-earmark-text"
        }
      ];
      
  return (
    <section className='dark2'>
        <Banner title='Content Creation' subtitle='Engage Your Audience with Creative and Tailored Content Solutions' image='https://img.freepik.com/free-photo/view-female-figurine-with-megaphone-womens-day-celebration_23-2151257632.jpg?t=st=1735659772~exp=1735663372~hmac=13aac40b8789554ca6aeac417939446b84a6d5dc70ecd5891ca5fa1075d74530&w=1060'/>
        <Services data={data} title='Content Creation'/>
        <Companies/>
        <Contact/>
    </section>
  )
}

export default ContentCreation