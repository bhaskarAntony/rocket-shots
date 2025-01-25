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

        <script type="application/ld+json">
      {
        `
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Rocketshots",
        "url": "https://www.rocketshots.in",
        "logo": "https://www.rocketshots.in/static/media/logo.4cf713867c4bf18024cb.png",
        "sameAs": [
          "https://www.instagram.com/rocketshots",
          "https://www.facebook.com/rocketshots",
          "https://www.linkedin.com/company/rocketshots-in",
          "https://twitter.com/rocketshots_in",
          "https://www.youtube.com/@rocketshotsentertainment"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 9740007832",
          "contactType": "Customer Service",
          "areaServed": "IN",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Level 15, UB City, Concorde Towers, 1, Vittal Mallya Rd, KG Halli, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560001",
          "addressCountry": "IN"
        },
        "description": "Rocketshots is a leading agency specializing in content creation, branding, advertising, digital marketing, and event management services in Bangalore, Karnataka. We help businesses grow their digital presence and achieve outstanding results."
        `
      }
      </script>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.rocketshots.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://www.rocketshots.in/about-us"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Content Creation",
                "item": "https://www.rocketshots.in/content/creation"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Web Development",
                "item": "https://www.rocketshots.in/web/development"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Branding",
                "item": "https://www.rocketshots.in/branding"
              },
              {
                "@type": "ListItem",
                "position": 6,
                "name": "Graphic Designing",
                "item": "https://www.rocketshots.in/graphic-designing"
              },
              {
                "@type": "ListItem",
                "position": 7,
                "name": "Marketing",
                "item": "https://www.rocketshots.in/marketing"
              },
              {
                "@type": "ListItem",
                "position": 8,
                "name": "UI/UX Design",
                "item": "https://www.rocketshots.in/ui-ux"
              },
              {
                "@type": "ListItem",
                "position": 9,
                "name": "Contact Us",
                "item": "https://www.rocketshots.in/contact-us"
              },
              {
                "@type": "ListItem",
                "position": 10,
                "name": "Gallery",
                "item": "https://www.rocketshots.in/gallery"
              },
              {
                "@type": "ListItem",
                "position": 11,
                "name": "Facebook",
                "item": "https://www.rocketshots.in/facebook"
              },
              {
                "@type": "ListItem",
                "position": 12,
                "name": "WhatsApp",
                "item": "https://www.rocketshots.in/whatsapp"
              },
              {
                "@type": "ListItem",
                "position": 13,
                "name": "Instagram",
                "item": "https://www.rocketshots.in/instagram"
              },
              {
                "@type": "ListItem",
                "position": 14,
                "name": "Social",
                "item": "https://www.rocketshots.in/social"
              },
              {
                "@type": "ListItem",
                "position": 15,
                "name": "Engagement",
                "item": "https://www.rocketshots.in/engagement"
              },
              {
                "@type": "ListItem",
                "position": 16,
                "name": "Portfolio - Ranav",
                "item": "https://www.rocketshots.in/portfolio/ranav"
              },
              {
                "@type": "ListItem",
                "position": 17,
                "name": "Portfolio - Likith",
                "item": "https://www.rocketshots.in/portfolio/likith"
              },
              {
                "@type": "ListItem",
                "position": 18,
                "name": "Portfolio - Vikas",
                "item": "https://www.rocketshots.in/portfolio/vikas"
              },
              {
                "@type": "ListItem",
                "position": 19,
                "name": "Portfolio - Shashank",
                "item": "https://www.rocketshots.in/portfolio/shashank"
              },
              {
                "@type": "ListItem",
                "position": 20,
                "name": "Portfolio - Abhishek",
                "item": "https://www.rocketshots.in/portfolio/abhishek"
              },
              {
                "@type": "ListItem",
                "position": 21,
                "name": "Portfolio - Govindhraj",
                "item": "https://www.rocketshots.in/portfolio/govindhraj"
              },
              {
                "@type": "ListItem",
                "position": 22,
                "name": "Portfolio - Sumanth",
                "item": "https://www.rocketshots.in/portfolio/sumanth"
              },
              {
                "@type": "ListItem",
                "position": 23,
                "name": "Portfolio - Ajay",
                "item": "https://www.rocketshots.in/portfolio/ajay"
              },
              {
                "@type": "ListItem",
                "position": 24,
                "name": "Stills",
                "item": "https://www.rocketshots.in/stills"
              }
            ]
          }
        `}
      </script>
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
