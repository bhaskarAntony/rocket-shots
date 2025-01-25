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
       <meta name="keywords" content="Rocketshots Bangalore, branding agency Bangalore, content creation services, digital marketing Bangalore, SEO services, advertising agency, web development, UI/UX design, product photography, event management, creative agency, Rocketshots branding, digital advertising, creative content, social media marketing, SEO agency, product shoots Bangalore, portfolio shooting, branding services, digital agency, advertising agency Bangalore, graphic design services, web design, e-commerce solutions, mobile app development, online marketing, creative solutions, photography services, branding strategies, video production, content marketing, paid search campaigns, SEM, PPC advertising, social media advertising, search engine optimization, brand design, print advertising, logo design, brochure design, flyer design, email marketing, influencer marketing, brand awareness, website redesign, SEO copywriting, local SEO, marketing strategy, business growth, digital presence, content strategy, video marketing, photography agency, event photographers, Google ads, Facebook ads, Instagram ads, YouTube marketing, brand identity, marketing solutions, content creators, photography studios, brand reputation, content optimization, digital strategies, creative branding, website development services, custom web design, brand consistency, product photography Bangalore, user experience, mobile user interface design, website design Bangalore, UI design, graphic design, digital media, web development agency, website redesign services, creative studios, business branding, website content, multimedia content, brand positioning, influencer campaigns, interactive design, social media management, business marketing, email marketing campaigns, marketing research, online presence, online advertising, brand recognition, custom branding, customer engagement, responsive design, visual communication, content management, marketing tactics, online branding, content creation experts, media management, video production services, SEO marketing, brand storytelling, SEO experts, website SEO, mobile optimization, business website design, digital marketing agency, visual design, photo shoot services, product shoot, social media strategy, social content, branding campaigns, SEO content creation, brand guidelines, digital content creation, brand marketing Bangalore, search engine marketing, pay per click ads, design services, interactive design services, custom logo design, search engine ranking, marketing tactics, video content marketing, paid search advertising, Google marketing, creative campaigns, advertising campaign Bangalore, business growth Bangalore, social media influencers, audience engagement, digital branding, digital design, online advertising services, high-quality photography, portfolio photography, marketing tools, web-based marketing solutions, product promotion, search engine rankings, digital advertising strategies, creative development, mobile app design Bangalore, branding experts, creative strategy agency, creative team Bangalore, campaign management, mobile application design, content optimization services, visual storytelling, ad design, business branding solutions, content marketing Bangalore, website branding services, UI development, SEO services Bangalore, social marketing services, online media strategies, photography for websites, video creation for websites, social media content creation, campaign effectiveness, brand campaigns Bangalore, creative photography, creative consultants, ad agency Bangalore, marketing agency Bangalore, social media consultants, visual identity creation, marketing creatives, SEO agency Bangalore, web branding, SEO audits, photo and video shoots, marketing performance, digital content, paid media campaigns, audience targeting, creative direction, SEO techniques, business solutions, professional branding services, UX/UI design, creative consultants Bangalore, SEO consulting, web services Bangalore, user-centered design, digital content creators, mobile marketing strategies, brand creative, social media video marketing, business digital presence, full-service creative agency, digital branding experts, ad creatives, social media design services, audience engagement strategies, creative content creation, ad management, digital design solutions, conversion optimization, digital transformation agency, creative consultants Bangalore, event marketing, experiential marketing, creative advertising strategies" />
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
