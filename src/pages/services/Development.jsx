import React from 'react';
import Helmet from 'react-helmet'; // Import Helmet
import './style.css';
import Banner from './Banner';
import Companies from '../../components/clients/Clients';
import Contact from '../../components/contact/Contact';
import Services from './Services';
import Header from '../../components/header/Header';
import i1 from './SPORTI - Senior Police Officers Research and Training Institute - Google Chrome 14-10-2024 16_39_16.png';
import i2 from './SPORTI Services - Accommodation, Conference Halls, Dining - Google Chrome 23-01-2025 11_12_41.png';
import i3 from './SPORTI Services - Accommodation, Conference Halls, Dining - Google Chrome 23-01-2025 11_13_03.png';

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

  const idata = [i1, i2];

  return (
    <section className='dark2'>
      <Helmet>
        <title>Web Development Services in Bangalore - Rocketshots</title>
        <meta name="description" content="Rocketshots offers top-tier web development services, including custom websites, e-commerce solutions, CMS, and SEO optimization to enhance your online presence in Bangalore." />
        <meta name="keywords" content="Rocketshots Bangalore, branding agency Bangalore, content creation services, digital marketing Bangalore, SEO services, advertising agency, web development, UI/UX design, product photography, event management, creative agency, Rocketshots branding, digital advertising, creative content, social media marketing, SEO agency, product shoots Bangalore, portfolio shooting, branding services, digital agency, advertising agency Bangalore, graphic design services, web design, e-commerce solutions, mobile app development, online marketing, creative solutions, photography services, branding strategies, video production, content marketing, paid search campaigns, SEM, PPC advertising, social media advertising, search engine optimization, brand design, print advertising, logo design, brochure design, flyer design, email marketing, influencer marketing, brand awareness, website redesign, SEO copywriting, local SEO, marketing strategy, business growth, digital presence, content strategy, video marketing, photography agency, event photographers, Google ads, Facebook ads, Instagram ads, YouTube marketing, brand identity, marketing solutions, content creators, photography studios, brand reputation, content optimization, digital strategies, creative branding, website development services, custom web design, brand consistency, product photography Bangalore, user experience, mobile user interface design, website design Bangalore, UI design, graphic design, digital media, web development agency, website redesign services, creative studios, business branding, website content, multimedia content, brand positioning, influencer campaigns, interactive design, social media management, business marketing, email marketing campaigns, marketing research, online presence, online advertising, brand recognition, custom branding, customer engagement, responsive design, visual communication, content management, marketing tactics, online branding, content creation experts, media management, video production services, SEO marketing, brand storytelling, SEO experts, website SEO, mobile optimization, business website design, digital marketing agency, visual design, photo shoot services, product shoot, social media strategy, social content, branding campaigns, SEO content creation, brand guidelines, digital content creation, brand marketing Bangalore, search engine marketing, pay per click ads, design services, interactive design services, custom logo design, search engine ranking, marketing tactics, video content marketing, paid search advertising, Google marketing, creative campaigns, advertising campaign Bangalore, business growth Bangalore, social media influencers, audience engagement, digital branding, digital design, online advertising services, high-quality photography, portfolio photography, marketing tools, web-based marketing solutions, product promotion, search engine rankings, digital advertising strategies, creative development, mobile app design Bangalore, branding experts, creative strategy agency, creative team Bangalore, campaign management, mobile application design, content optimization services, visual storytelling, ad design, business branding solutions, content marketing Bangalore, website branding services, UI development, SEO services Bangalore, social marketing services, online media strategies, photography for websites, video creation for websites, social media content creation, campaign effectiveness, brand campaigns Bangalore, creative photography, creative consultants, ad agency Bangalore, marketing agency Bangalore, social media consultants, visual identity creation, marketing creatives, SEO agency Bangalore, web branding, SEO audits, photo and video shoots, marketing performance, digital content, paid media campaigns, audience targeting, creative direction, SEO techniques, business solutions, professional branding services, UX/UI design, creative consultants Bangalore, SEO consulting, web services Bangalore, user-centered design, digital content creators, mobile marketing strategies, brand creative, social media video marketing, business digital presence, full-service creative agency, digital branding experts, ad creatives, social media design services, audience engagement strategies, creative content creation, ad management, digital design solutions, conversion optimization, digital transformation agency, creative consultants Bangalore, event marketing, experiential marketing, creative advertising strategies" />
        <meta property="og:title" content="Web Development Experts - Rocketshots Bangalore" />
        <meta property="og:description" content="Explore Rocketshots' web development services in Bangalore. We offer custom websites, e-commerce platforms, CMS, and SEO solutions to grow your online presence." />
        <meta property="og:image" content="https://img.freepik.com/free-photo/man-using-laptop-night-top-view-web-banner-with-copy-space_169016-53607.jpg?t=st=1735660274~exp=1735663874~hmac=c87ff6901e47c3a2da90fdd1c58a026629064d96c721698a9c68936191939856&w=1060" />
        <meta property="og:url" content="https://rocketshots.in/web/development" />
        <meta name="twitter:title" content="Web Development Services - Rocketshots Bangalore" />
        <meta name="twitter:description" content="Boost your business with professional web development services by Rocketshots, including custom websites, e-commerce, and SEO optimization in Bangalore." />
        <meta name="twitter:image" content="https://img.freepik.com/free-photo/man-using-laptop-night-top-view-web-banner-with-copy-space_169016-53607.jpg?t=st=1735660274~exp=1735663874~hmac=c87ff6901e47c3a2da90fdd1c58a026629064d96c721698a9c68936191939856&w=1060" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://www.rocketshots.in/web/development" />
        <link rel="canonical" href="https://www.rocketshots.in/web/development" />
      </Helmet>

      <Header />
      <Banner 
        title="Top Web Development Services in Bangalore" 
        subtitle="Expert Web Development Solutions to Elevate Your Online Presence with Custom Websites, E-Commerce Platforms, and SEO-Optimized Websites in Bangalore"
        image="https://img.freepik.com/free-photo/man-using-laptop-night-top-view-web-banner-with-copy-space_169016-53607.jpg?t=st=1735660274~exp=1735663874~hmac=c87ff6901e47c3a2da90fdd1c58a026629064d96c721698a9c68936191939856&w=1060"
        alt="Web Development in Bangalore"
      />
      <Services data={data} title="Professional Web Development Services" />
      
      {/* Gallery Section */}
      <section className="p-3 p-md-5">
        <h1 className="text-center text-white fw-bold">Our Works</h1>
        <div className="line"></div>
        <div className="row">
          {idata.map((item, index) => (
            <div className="col-md-6 mb-3" key={index}>
              <img src={item} alt={`Web Development Project ${index + 1}`} className="w-100" />
            </div>
          ))}
        </div>
      </section>

      <Companies />
      <Contact />
    </section>
  );
}

export default Development;
