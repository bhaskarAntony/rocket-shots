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
        <meta name="description" content="Reach out to Rocketshots, providing exceptional content creation, branding, advertising, event management, product photography, web development, SEO, UI/UX design, digital marketing, and portfolio shooting services across Karnataka. Let us help elevate your brand with innovative strategies and cutting-edge designs." />
    <meta name="keywords" content="Rocketshots Bangalore, branding agency Bangalore, content creation services, digital marketing Bangalore, SEO services, advertising agency, web development, UI/UX design, product photography, event management, creative agency, Rocketshots branding, digital advertising, creative content, social media marketing, SEO agency, product shoots Bangalore, portfolio shooting, branding services, digital agency, advertising agency Bangalore, graphic design services, web design, e-commerce solutions, mobile app development, online marketing, creative solutions, photography services, branding strategies, video production, content marketing, paid search campaigns, SEM, PPC advertising, social media advertising, search engine optimization, brand design, print advertising, logo design, brochure design, flyer design, email marketing, influencer marketing, brand awareness, website redesign, SEO copywriting, local SEO, marketing strategy, business growth, digital presence, content strategy, video marketing, photography agency, event photographers, Google ads, Facebook ads, Instagram ads, YouTube marketing, brand identity, marketing solutions, content creators, photography studios, brand reputation, content optimization, digital strategies, creative branding, website development services, custom web design, brand consistency, product photography Bangalore, user experience, mobile user interface design, website design Bangalore, UI design, graphic design, digital media, web development agency, website redesign services, creative studios, business branding, website content, multimedia content, brand positioning, influencer campaigns, interactive design, social media management, business marketing, email marketing campaigns, marketing research, online presence, online advertising, brand recognition, custom branding, customer engagement, responsive design, visual communication, content management, marketing tactics, online branding, content creation experts, media management, video production services, SEO marketing, brand storytelling, SEO experts, website SEO, mobile optimization, business website design, digital marketing agency, visual design, photo shoot services, product shoot, social media strategy, social content, branding campaigns, SEO content creation, brand guidelines, digital content creation, brand marketing Bangalore, search engine marketing, pay per click ads, design services, interactive design services, custom logo design, search engine ranking, marketing tactics, video content marketing, paid search advertising, Google marketing, creative campaigns, advertising campaign Bangalore, business growth Bangalore, social media influencers, audience engagement, digital branding, digital design, online advertising services, high-quality photography, portfolio photography, marketing tools, web-based marketing solutions, product promotion, search engine rankings, digital advertising strategies, creative development, mobile app design Bangalore, branding experts, creative strategy agency, creative team Bangalore, campaign management, mobile application design, content optimization services, visual storytelling, ad design, business branding solutions, content marketing Bangalore, website branding services, UI development, SEO services Bangalore, social marketing services, online media strategies, photography for websites, video creation for websites, social media content creation, campaign effectiveness, brand campaigns Bangalore, creative photography, creative consultants, ad agency Bangalore, marketing agency Bangalore, social media consultants, visual identity creation, marketing creatives, SEO agency Bangalore, web branding, SEO audits, photo and video shoots, marketing performance, digital content, paid media campaigns, audience targeting, creative direction, SEO techniques, business solutions, professional branding services, UX/UI design, creative consultants Bangalore, SEO consulting, web services Bangalore, user-centered design, digital content creators, mobile marketing strategies, brand creative, social media video marketing, business digital presence, full-service creative agency, digital branding experts, ad creatives, social media design services, audience engagement strategies, creative content creation, ad management, digital design solutions, conversion optimization, digital transformation agency, creative consultants Bangalore, event marketing, experiential marketing, creative advertising strategies" />
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
