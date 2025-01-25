import React from 'react';
import Helmet from 'react-helmet';  // Import Helmet to manage meta tags
import Banner from './Banner';
import Companies from '../../components/clients/Clients';
import Services from './Services';
import Contact from '../../components/contact/Contact';
import Header from '../../components/header/Header';

function ContentCreation() {
    const data = [
        {
          title: "SEO Blog Writing Services",
          description: "Engaging, SEO-friendly blog content tailored to your industry, helping to drive traffic and improve your search engine ranking.",
          icon: "bi bi-pencil-square"
        },
        {
          title: "Creative Social Media Content",
          description: "Visually appealing social media posts designed to enhance your brand's online presence and drive user engagement.",
          icon: "bi bi-share"
        },
        {
          title: "Professional Video Production",
          description: "High-quality video production that captivates your audience, effectively communicates your message, and boosts brand awareness.",
          icon: "bi bi-camera-video"
        },
        {
          title: "Custom Graphic Design Services",
          description: "Custom graphics and infographics that enhance your content, providing visual appeal and improving audience engagement.",
          icon: "bi bi-image"
        },
        {
          title: "E-Book Creation for Lead Generation",
          description: "Comprehensive and well-designed e-books that showcase your expertise, provide value to your audience, and generate leads.",
          icon: "bi bi-journal-bookmark"
        },
        {
          title: "Professional Copywriting Services",
          description: "Persuasive and impactful copywriting for websites, ads, and marketing campaigns that drives conversions and enhances brand voice.",
          icon: "bi bi-file-earmark-text"
        }
      ];

  return (
    <section className='dark2'>
      <Helmet>
        <title>Content Creation Services | Rocketshots | SEO, Social Media, Video Production</title>
        <meta 
          name="description" 
          content="Enhance your brand's online presence with our content creation services including SEO blog writing, social media posts, video production, and more."
        />
        <meta 
          name="keywords" 
          content="content creation, SEO blog writing, video production, social media content, copywriting, branding, graphic design, e-book creation"
        />
        <meta name="author" content="Rocketshots"/>
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Content Creation Services | Rocketshots | SEO, Social Media, Video Production"/>
        <meta 
          property="og:description" 
          content="Rocketshots offers expert content creation services to boost your brand visibility through SEO-friendly blogs, video production, social media content, and more."
        />
        <meta property="og:image" content="https://img.freepik.com/free-photo/view-female-figurine-with-megaphone-womens-day-celebration_23-2151257632.jpg?t=st=1735659772~exp=1735663372~hmac=13aac40b8789554ca6aeac417939446b84a6d5dc70ecd5891ca5fa1075d74530&w=1060"/>
        <meta property="og:url" content="https://www.rocketshots.in/content/creation"/>

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Content Creation Services | Rocketshots"/>
        <meta 
          name="twitter:description" 
          content="Boost your brand’s online presence with expert content creation services from Rocketshots, including SEO blog writing, video production, and more."
        />
        <meta name="twitter:image" content="https://img.freepik.com/free-photo/view-female-figurine-with-megaphone-womens-day-celebration_23-2151257632.jpg?t=st=1735659772~exp=1735663372~hmac=13aac40b8789554ca6aeac417939446b84a6d5dc70ecd5891ca5fa1075d74530&w=1060"/>
        <meta property="og:url" content="https://www.rocketshots.in/content/creation" />
        <link rel="canonical" href="https://www.rocketshots.in/content/creation" />
      </Helmet>

      <Header />
      <Banner 
        title="Content Creation Services – Enhance Your Brand's Presence" 
        subtitle="Engage Your Audience with Creative and Tailored Content Solutions" 
        image="https://img.freepik.com/free-photo/view-female-figurine-with-megaphone-womens-day-celebration_23-2151257632.jpg?t=st=1735659772~exp=1735663372~hmac=13aac40b8789554ca6aeac417939446b84a6d5dc70ecd5891ca5fa1075d74530&w=1060"
        alt="Content Creation Services for Branding"
      />
      <Services data={data} title="Content Creation Services"/>
      <Companies/>
      <Contact/>
    </section>
  );
}

export default ContentCreation;
