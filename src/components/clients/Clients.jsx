import React from 'react'
import './style.css'
import Slider from 'react-slick/lib/slider';
import c1 from '../../assets/images/1.png'
import c2 from '../../assets/images/10.png'
import c3 from '../../assets/images/11.png'
import c4 from '../../assets/images/12.png'
// import c5 from '../../assets/images/1ROCKET SHOTS LOGO COLOUR.png'
import c6 from '../../assets/images/2.png'
import c7 from '../../assets/images/3.png'
import c8 from '../../assets/images/4.png'
import c9 from '../../assets/images/5.png'
import c10 from '../../assets/images/6.png'
import c11 from '../../assets/images/6klogo-01.png'
import c12 from '../../assets/images/7.png'
import c13 from '../../assets/images/8.png'
import c14 from '../../assets/images/9.png'
import c15 from '../../assets/images/A shot logo final Opposite color PNG.webp'
import c16 from '../../assets/images/Bhartiya Jalpan Logo.png'
import c17 from '../../assets/images/Donne Biryani logo (1).png'
// import c18 from '../../assets/images/Firewater_Horizontal Logo.png'
import c19 from '../../assets/images/Firewater_Horizontal Logo_white.png'
import c20 from '../../assets/images/Four-Seasons-Logo.png'
import c21 from '../../assets/images/Green Theory Logo Files-11.png'
import c22 from '../../assets/images/Ground up coffee Logo 2-1.png'
import c23 from '../../assets/images/Herbalife-Nutrition-Logo.png'
import c24 from '../../assets/images/Hongal project.png'
import c25 from '../../assets/images/Hyperrider.png'
import c26 from '../../assets/images/LAAA.png'
import c27 from '../../assets/images/Logo PDF-1.png'
import c28 from '../../assets/images/Logo Set_6KIOM_og.png'
import c29 from '../../assets/images/PP Logo_w.png'
import c30 from '../../assets/images/Plogo.png'
import c31 from '../../assets/images/Roja Incorp Logo.png'
import c32 from '../../assets/images/SMS LOGO1 (7)-1.png'
import c33 from '../../assets/images/Sanchez UB City.png'
import c34 from '../../assets/images/Sriracha UB City.png'
import c35 from '../../assets/images/WhatsApp Image 2024-02-14 at 4.00.10 PM.jpeg'
// import c36 from '../../assets/images/WhatsApp Image 2024-08-07 at 1.13.40 PM.jpeg'
// import c37 from '../../assets/images/WhatsApp Image 2024-08-07 at 1.13.40 PM.jpeg'
import c38 from '../../assets/images/WhatsApp Image 2024-08-07 at 1.13.41 PM.jpeg'
// import c39 from '../../assets/images/WhiteBigSticker.png'
import c40 from '../../assets/images/YellowBigSticker.png'
import c41 from '../../assets/images/Zest-Logo-2023-Round.png'
import c42 from '../../assets/images/green theory.00_03_08_14.Still002.png'
import c43 from '../../assets/images/groove green logo.png'
import c44 from '../../assets/images/kajavarnamLogo.png'
import c45 from '../../assets/images/karnataka_govt_logo.png'
import c46 from '../../assets/images/khivraj logo.png'
import c47 from '../../assets/images/magnon logo.png'
import c48 from '../../assets/images/pr logo.png'
// import c49 from '../../assets/images/sag.png'
import c50 from '../../assets/images/stepinterior.png'
import c51 from '../../assets/images/teatreesuites.png'
import sms from '../../assets/images/mahalakshmi_sweets.png'
import sangeetha from '../../assets/images/sangeetha.png'
import dewars from '../../assets/images/dewars.png'
import skimnner from '../../assets/images/Skinner logo.jpg'
import friendCarZone from '../../assets/images/fonts car zon.jpg'
import axaleos from '../../assets/images/azaleos.png'
import athletic from '../../assets/images/Main-Logo-Color.png'


function Companies({click}) {
    const companyData = [
        // c1,
        c2,
        c3,
        // c4,
        // c5,
        // c6,
        c7,
        friendCarZone,
        skimnner,
        c8,
        c9,
        c10,
        c11,
        c12,
        axaleos,
        c13,
        // c14,
        c15,
        c16,
        c17,
        // c18,
        c19,
        // c20,
        c21,
        c22,
        c23,
        c24,
        athletic,
        c25,
        c26,
        c27,
        c28,
        c29,
        c30,
        c31,
        // c32,
        // c33,
        c34,
        c35,
        // c36,
        // c37,
        c38,
        // c39,
        c40,
        c41,
        c42,
        c43,
        c44,
        // c45,
        c46,
        c47,
        c48,
        // c49,
        c50,
        c51,
    ];

  
    const staticData = [
            c45,
            sms,
            sangeetha,
            c20,
            dewars,
            c33,
            c14,
            c6,


    ]
    
    const settings = {
        dots: false, // Display dots below the carousel
        infinite: true, // Infinite looping
        speed: 1000, // Transition speed
        slidesToShow: 4, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000, // Autoplay speed
        responsive: [
            {
                breakpoint: 1024, // Screen width breakpoint
                settings: {
                    slidesToShow: 6, // Show 2 slides on medium screens
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600, // Smaller screen width breakpoint
                settings: {
                    slidesToShow: 3, // Show 1 slide on smaller screens
                    slidesToScroll: 1,
                },
            },
        ],
    };
  return (
    <section className='companies p-3 p-md-5 bg-dark' id='clients'>
        

        <div className="row align-items-center">
            <div className="col-md-6">
            <div className="company-images">
          
           <div className="row">
           {staticData.map((company, index) => (
                 <div className="col-md-3 col-4 p-2">
                   <div key={index} className="company-slide">
                      <img src={company} alt='loading' />
                  </div>
                 </div>
              ))}
           </div>

          {/* <Slider {...settings}>
              {companyData2.reverse().map((company, index) => (
                 <div className="col-md-2 col-4 p-2" >
                   <div key={index} className="company-slide">
                      <img src={company} alt='loading'  />
                  </div>
                 </div>
              ))}
          </Slider> */}
          <Slider {...settings}>
              {companyData.map((company, index) => (
                 <div className="col-md-2 col-4 p-2">
                   <div key={index} className="company-slide">
                      <img src={company} alt='loading' />
                  </div>
                 </div>
              ))}
          </Slider>

         
      </div>
            </div>
            <div className="col-md-6 text-white">
                <h5 className="fs-5 text-aqua" data-aos="fade-left">PARTNERS & SPONSERS</h5>
                <h1 className="display-3 fw-bold" data-aos="fade-left">Best Trusted Clients & Partners</h1>
                <p className="fs-6" data-aos="fade-up">We take immense pride in collaborating with some of the most reputed organizations across industries. Our clients and partners have always been at the heart of our success, driving innovation and trust. With their continued confidence, we strive to deliver exceptional service and sustainable solutions, strengthening our bond with every engagement.</p>
            </div>
        </div>
       
    </section>
  )
}

export default Companies