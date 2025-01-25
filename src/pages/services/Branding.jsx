import React from 'react';
import Helmet from 'react-helmet'; // Import Helmet
import Banner from './Banner';
import Services from './Services';
import Companies from '../../components/clients/Clients';
import Contact from '../../components/contact/Contact';
import Header from '../../components/header/Header';
import Affliated from './Affliated';
import Collabrations from './Collabrations';
import action_cut_logo from './action_cut_logo.png';
import Part from './Part';
import ServiceIcons from './ServiceIcons';

function Branding() {
    const data = [
        {
          title: "Brand Identity Development in Bangalore",
          description: "We create a unique and memorable brand identity, including logos, taglines, and visual elements that reflect your business's core values.",
          icon: "bi bi-palette"
        },
        {
          title: "Social Media Campaigns for Maximum Brand Visibility",
          description: "Boost your brand's online presence with strategic social media marketing campaigns tailored to engage your target audience.",
          icon: "bi bi-megaphone"
        },
        {
          title: "Print and Digital Advertising Solutions",
          description: "We design high-quality advertisements for both print and digital platforms to engage your audience and build brand recognition.",
          icon: "bi bi-printer"
        },
        {
          title: "Content Marketing for Stronger Brand Messaging",
          description: "Develop compelling content that communicates your brand's value and resonates with your audience, enhancing brand loyalty.",
          icon: "bi bi-file-text"
        },
        {
          title: "Influencer Marketing to Expand Your Brand Reach",
          description: "Collaborate with influencers to amplify your brand reach and engagement on various social platforms.",
          icon: "bi bi-people"
        },
        {
          title: "Market Research and Analysis for Branding Success",
          description: "Gain valuable insights into your target audience and competitors, helping you design effective branding strategies.",
          icon: "bi bi-graph-up-arrow"
        }
    ];

  return (
    <div>
      <Helmet>
        <title>Branding Services in Bangalore - Rocketshots</title>
        <meta name="description" content="Rocketshots offers expert branding and advertising services in Bangalore, including brand identity development, social media marketing, influencer marketing, and more." />
       
        <meta name="keywords" content="Rocketshots Bangalore, branding agency Bangalore, content creation services, digital marketing Bangalore, SEO services, advertising agency, web development, UI/UX design, product photography, event management, creative agency, Rocketshots branding, digital advertising, creative content, social media marketing, SEO agency, product shoots Bangalore, portfolio shooting, branding services, digital agency, advertising agency Bangalore, graphic design services, web design, e-commerce solutions, mobile app development, online marketing, creative solutions, photography services, branding strategies, video production, content marketing, paid search campaigns, SEM, PPC advertising, social media advertising, search engine optimization, brand design, print advertising, logo design, brochure design, flyer design, email marketing, influencer marketing, brand awareness, website redesign, SEO copywriting, local SEO, marketing strategy, business growth, digital presence, content strategy, video marketing, photography agency, event photographers, Google ads, Facebook ads, Instagram ads, YouTube marketing, brand identity, marketing solutions, content creators, photography studios, brand reputation, content optimization, digital strategies, creative branding, website development services, custom web design, brand consistency, product photography Bangalore, user experience, mobile user interface design, website design Bangalore, UI design, graphic design, digital media, web development agency, website redesign services, creative studios, business branding, website content, multimedia content, brand positioning, influencer campaigns, interactive design, social media management, business marketing, email marketing campaigns, marketing research, online presence, online advertising, brand recognition, custom branding, customer engagement, responsive design, visual communication, content management, marketing tactics, online branding, content creation experts, media management, video production services, SEO marketing, brand storytelling, SEO experts, website SEO, mobile optimization, business website design, digital marketing agency, visual design, photo shoot services, product shoot, social media strategy, social content, branding campaigns, SEO content creation, brand guidelines, digital content creation, brand marketing Bangalore, search engine marketing, pay per click ads, design services, interactive design services, custom logo design, search engine ranking, marketing tactics, video content marketing, paid search advertising, Google marketing, creative campaigns, advertising campaign Bangalore, business growth Bangalore, social media influencers, audience engagement, digital branding, digital design, online advertising services, high-quality photography, portfolio photography, marketing tools, web-based marketing solutions, product promotion, search engine rankings, digital advertising strategies, creative development, mobile app design Bangalore, branding experts, creative strategy agency, creative team Bangalore, campaign management, mobile application design, content optimization services, visual storytelling, ad design, business branding solutions, content marketing Bangalore, website branding services, UI development, SEO services Bangalore, social marketing services, online media strategies, photography for websites, video creation for websites, social media content creation, campaign effectiveness, brand campaigns Bangalore, creative photography, creative consultants, ad agency Bangalore, marketing agency Bangalore, social media consultants, visual identity creation, marketing creatives, SEO agency Bangalore, web branding, SEO audits, photo and video shoots, marketing performance, digital content, paid media campaigns, audience targeting, creative direction, SEO techniques, business solutions, professional branding services, UX/UI design, creative consultants Bangalore, SEO consulting, web services Bangalore, user-centered design, digital content creators, mobile marketing strategies, brand creative, social media video marketing, business digital presence, full-service creative agency, digital branding experts, ad creatives, social media design services, audience engagement strategies, creative content creation, ad management, digital design solutions, conversion optimization, digital transformation agency, creative consultants Bangalore, event marketing, experiential marketing, creative advertising strategies" />
        <meta property="og:title" content="Branding and Advertising Experts - Rocketshots Bangalore" />
        <meta property="og:description" content="Expert branding services in Bangalore by Rocketshots, including brand development, marketing strategies, and influencer collaboration." />
        <meta property="og:image" content="https://img.freepik.com/premium-photo/digital-revolution-honoring-social-media-day_1007543-15180.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid" />
        <meta property="og:url" content="https://rocketshots.in/branding" />
        <meta name="twitter:title" content="Branding and Advertising Services - Rocketshots Bangalore" />
        <meta name="twitter:description" content="Unlock your brand's potential with professional branding and marketing strategies by Rocketshots in Bangalore." />
        <meta name="twitter:image" content="https://img.freepik.com/premium-photo/digital-revolution-honoring-social-media-day_1007543-15180.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://www.rocketshots.in/branding" />
        <link rel="canonical" href="https://www.rocketshots.in/branding" />

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
      
      <Header/>
      <Banner 
        title="Welcome to Rocketshots – Your Branding and Media Experts in Bangalore" 
        subtitle="Building Strong Brands and Captivating Audiences with Impactful Advertising" 
        image="https://img.freepik.com/premium-photo/digital-revolution-honoring-social-media-day_1007543-15180.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid"
        alt="Branding and Media Experts in Bangalore"
      />
      
      <section className='dark2 p-3 p-md-5'>
        <div className="row text-white bg-dark p-3 p-md-5 rounded-4 shadow">
            <div className="col-md-12 m-auto">
                <h1 className="fs-3 fw-bold text-center d-flex flex-wrap align-items-center gap-3">
                    <span>In Affiliation with <span className="text-aqua">Action Cut Creation</span></span>
                    <img src={action_cut_logo} alt="Action Cut Creation Logo" style={{width:'50px'}} />
                </h1>
                <div className="line"></div>
                <p className="fs-5">
                    - <span className="text-aqua">Rocketshots</span> develops comprehensive brand strategies that align with the client's vision and target market.
                </p>
                <p className="fs-5">
                    - We craft compelling brand identities, including logos, taglines, and visual elements that reflect the essence of the brand.
                </p>
                <p className="fs-5">
                    - Leveraging various marketing channels, we design integrated campaigns for maximum brand exposure and engagement.
                </p>
            </div>
        </div>
      </section>

      <ServiceIcons/>
      <Collabrations/>
      <Part/>
      <Services data={data} title="Expert Branding and Advertising Services in Bangalore"/>
      <Affliated/>
      <Companies/>
      <Contact/>
    </div>
  );
}

export default Branding;
