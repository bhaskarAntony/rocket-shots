import React from 'react'
import Hero from '../../components/hero/Hero'
import Aboutus from '../../components/aboutus/Aboutus'
import Services from '../../components/services/Services'
import Companies from '../../components/clients/Clients'
import Works from '../../components/works/Works'
import Steps from '../../components/Steps/Steps'
import Contact from '../../components/contact/Contact'
import Founder from '../../components/founder/Founder'
import Team from '../../components/founder/Team'
import Part from '../services/Part'
import Slider from '../../components/slider/Slider'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <div>
        <Helmet>
        <title>Rocketshots - Expert Branding, Advertising, and Media Solutions in Bangalore</title>
        <meta name="description" content="Rocketshots is a leading creative agency in Bangalore, providing exceptional content creation, branding, advertising, event management, product photography, web development, SEO, UI/UX design, digital marketing, and portfolio shooting services across Karnataka. Let us help elevate your brand with innovative strategies and cutting-edge designs." />
        <meta name="keywords" content="Rocketshots Bangalore, branding agency Bangalore, content creation services, digital marketing Bangalore, SEO services, advertising agency, web development, UI/UX design, product photography, event management, creative agency, Rocketshots branding, digital advertising, creative content, social media marketing, SEO agency, product shoots Bangalore, portfolio shooting, branding services, digital agency, advertising agency Bangalore, graphic design services, web design, e-commerce solutions, mobile app development, online marketing, creative solutions, photography services, branding strategies, video production, content marketing, paid search campaigns, SEM, PPC advertising, social media advertising, search engine optimization, brand design, print advertising, logo design, brochure design, flyer design, email marketing, influencer marketing, brand awareness, website redesign, SEO copywriting, local SEO, marketing strategy, business growth, digital presence, content strategy, video marketing, photography agency, event photographers, Google ads, Facebook ads, Instagram ads, YouTube marketing, brand identity, marketing solutions, content creators, photography studios, brand reputation, content optimization, digital strategies, creative branding, website development services, custom web design, brand consistency, product photography Bangalore, user experience, mobile user interface design, website design Bangalore, UI design, graphic design, digital media, web development agency, website redesign services, creative studios, business branding, website content, multimedia content, brand positioning, influencer campaigns, interactive design, social media management, business marketing, email marketing campaigns, marketing research, online presence, online advertising, brand recognition, custom branding, customer engagement, responsive design, visual communication, content management, marketing tactics, online branding, content creation experts, media management, video production services, SEO marketing, brand storytelling, SEO experts, website SEO, mobile optimization, business website design, digital marketing agency, visual design, photo shoot services, product shoot, social media strategy, social content, branding campaigns, SEO content creation, brand guidelines, digital content creation, brand marketing Bangalore, search engine marketing, pay per click ads, design services, interactive design services, custom logo design, search engine ranking, marketing tactics, video content marketing, paid search advertising, Google marketing, creative campaigns, advertising campaign Bangalore, business growth Bangalore, social media influencers, audience engagement, digital branding, digital design, online advertising services, high-quality photography, portfolio photography, marketing tools, web-based marketing solutions, product promotion, search engine rankings, digital advertising strategies, creative development, mobile app design Bangalore, branding experts, creative strategy agency, creative team Bangalore, campaign management, mobile application design, content optimization services, visual storytelling, ad design, business branding solutions, content marketing Bangalore, website branding services, UI development, SEO services Bangalore, social marketing services, online media strategies, photography for websites, video creation for websites, social media content creation, campaign effectiveness, brand campaigns Bangalore, creative photography, creative consultants, ad agency Bangalore, marketing agency Bangalore, social media consultants, visual identity creation, marketing creatives, SEO agency Bangalore, web branding, SEO audits, photo and video shoots, marketing performance, digital content, paid media campaigns, audience targeting, creative direction, SEO techniques, business solutions, professional branding services, UX/UI design, creative consultants Bangalore, SEO consulting, web services Bangalore, user-centered design, digital content creators, mobile marketing strategies, brand creative, social media video marketing, business digital presence, full-service creative agency, digital branding experts, ad creatives, social media design services, audience engagement strategies, creative content creation, ad management, digital design solutions, conversion optimization, digital transformation agency, creative consultants Bangalore, event marketing, experiential marketing, creative advertising strategies" />
        <meta name="author" content="Rocketshots Creative Agency, Bangalore" />

        <meta property="og:title" content="Rocketshots | Branding, Web Development, Digital Marketing & UI/UX Agency in Bangalore" />
        <meta property="og:description" content="Rocketshots is a leading creative agency in Bangalore offering top-notch services in branding, web development, UI/UX design, digital marketing, content creation, and SEO to help your business succeed online." />
        <meta property="og:image" content="https://www.rocketshots.in/static/media/logo.4cf713867c4bf18024cb.png" />
        <meta property="og:url" content="https://www.rocketshots.in" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Rocketshots | Top Creative Agency in Bangalore" />
        <meta name="twitter:description" content="Expert digital solutions from Rocketshots, your branding, web development, UI/UX, SEO, and marketing agency in Bangalore." />
        <meta name="twitter:image" content="https://www.rocketshots.in/static/media/logo.4cf713867c4bf18024cb.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:site_name" content="Rocketshots" />
        <meta property="og:instagram" content="https://www.instagram.com/rocketshots" /> 
        <meta property="og:video" content="https://www.youtube.com/@rocketshotsentertainment" />
        <meta property="og:video:type" content="video/mp4" /> 
        <link rel="canonical" href="https://www.rocketshots.in" />
      </Helmet>
        <Hero/>
        {/* <div className="reel">

        </div> */}
        <Aboutus/>
        <Services/>
        <Companies/>
        <Part/>
        <Works/>
        <Steps/>
        <Founder/>
        <Slider/>
        {/* <Slider3D/> */}
        {/* <Team/> */}
        <Contact/>
        {/* <FaqsSection/>   */}
    </div>
  )
}

export default Home