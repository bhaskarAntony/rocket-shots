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
        <meta name="keywords" content="Branding, Advertising, Brand Identity, Social Media Campaigns, Marketing, Bangalore, Digital Advertising, Influencer Marketing" />
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
