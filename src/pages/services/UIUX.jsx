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
       <meta name="keywords" content="Rocketshots Bangalore, branding agency Bangalore, content creation services, digital marketing Bangalore, SEO services, advertising agency, web development, UI/UX design, product photography, event management, creative agency, Rocketshots branding, digital advertising, creative content, social media marketing, SEO agency, product shoots Bangalore, portfolio shooting, branding services, digital agency, advertising agency Bangalore, graphic design services, web design, e-commerce solutions, mobile app development, online marketing, creative solutions, photography services, branding strategies, video production, content marketing, paid search campaigns, SEM, PPC advertising, social media advertising, search engine optimization, brand design, print advertising, logo design, brochure design, flyer design, email marketing, influencer marketing, brand awareness, website redesign, SEO copywriting, local SEO, marketing strategy, business growth, digital presence, content strategy, video marketing, photography agency, event photographers, Google ads, Facebook ads, Instagram ads, YouTube marketing, brand identity, marketing solutions, content creators, photography studios, brand reputation, content optimization, digital strategies, creative branding, website development services, custom web design, brand consistency, product photography Bangalore, user experience, mobile user interface design, website design Bangalore, UI design, graphic design, digital media, web development agency, website redesign services, creative studios, business branding, website content, multimedia content, brand positioning, influencer campaigns, interactive design, social media management, business marketing, email marketing campaigns, marketing research, online presence, online advertising, brand recognition, custom branding, customer engagement, responsive design, visual communication, content management, marketing tactics, online branding, content creation experts, media management, video production services, SEO marketing, brand storytelling, SEO experts, website SEO, mobile optimization, business website design, digital marketing agency, visual design, photo shoot services, product shoot, social media strategy, social content, branding campaigns, SEO content creation, brand guidelines, digital content creation, brand marketing Bangalore, search engine marketing, pay per click ads, design services, interactive design services, custom logo design, search engine ranking, marketing tactics, video content marketing, paid search advertising, Google marketing, creative campaigns, advertising campaign Bangalore, business growth Bangalore, social media influencers, audience engagement, digital branding, digital design, online advertising services, high-quality photography, portfolio photography, marketing tools, web-based marketing solutions, product promotion, search engine rankings, digital advertising strategies, creative development, mobile app design Bangalore, branding experts, creative strategy agency, creative team Bangalore, campaign management, mobile application design, content optimization services, visual storytelling, ad design, business branding solutions, content marketing Bangalore, website branding services, UI development, SEO services Bangalore, social marketing services, online media strategies, photography for websites, video creation for websites, social media content creation, campaign effectiveness, brand campaigns Bangalore, creative photography, creative consultants, ad agency Bangalore, marketing agency Bangalore, social media consultants, visual identity creation, marketing creatives, SEO agency Bangalore, web branding, SEO audits, photo and video shoots, marketing performance, digital content, paid media campaigns, audience targeting, creative direction, SEO techniques, business solutions, professional branding services, UX/UI design, creative consultants Bangalore, SEO consulting, web services Bangalore, user-centered design, digital content creators, mobile marketing strategies, brand creative, social media video marketing, business digital presence, full-service creative agency, digital branding experts, ad creatives, social media design services, audience engagement strategies, creative content creation, ad management, digital design solutions, conversion optimization, digital transformation agency, creative consultants Bangalore, event marketing, experiential marketing, creative advertising strategies" />
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
