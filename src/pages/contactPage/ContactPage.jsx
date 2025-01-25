import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../services/Banner';
import Contact from '../../components/contact/Contact';
import Header from '../../components/header/Header';

function ContactPage() {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Rocketshots | Branding, Digital Marketing, Web Development, UI/UX Design & Content Creation Services</title>
        <meta name="description" content="Reach out to Rocketshots for branding, digital marketing, web development, UI/UX design, content creation, and advertising services. Let's build your brand and grow your business online!" />
        <meta name="keywords" content="contact us, branding services, digital marketing, web development, UI/UX design, content creation, advertising, SEO, PPC campaigns, social media marketing, email marketing, mobile app development, website design, graphic design, logo design, content strategy, business growth" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Us - Rocketshots | Branding, Digital Marketing, Web Development, UI/UX Design & Content Creation Services" />
        <meta property="og:description" content="Connect with Rocketshots for top-notch branding, digital marketing, web development, UI/UX design, and content creation services. Our team is ready to help you succeed online!" />
        <meta property="og:image" content="https://img.freepik.com/free-photo/lifestyle-technology-concept-portrait-cheerful-happy-ginger-red-hair-girl-with-joyful-exc_1258-123883.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid" />
        <meta property="og:url" content="https://www.rocketshots.in/contact-us" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://www.rocketshots.in/contact-us" />
      </Helmet>

      <Header />
      <Banner 
        title="Contact Us - Rocketshots | Branding, Digital Marketing, Web Development, UI/UX Design & Content Creation Services" 
        subtitle="Get in touch with Rocketshots for all your branding, advertising, web development, and digital marketing needs." 
        image="https://img.freepik.com/free-photo/lifestyle-technology-concept-portrait-cheerful-happy-ginger-red-hair-girl-with-joyful-exc_1258-123883.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid"
        alt="Contact Rocketshots for branding, web development, content creation, advertising, and digital marketing services" 
      />
      <Contact />
    </div>
  );
}

export default ContactPage;
