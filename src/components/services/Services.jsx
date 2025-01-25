import React from 'react'
import './style.css'

function Services() {
    const data = [
        {
            icon: '',
            title: 'Content Creation Services in Bangalore',
            description: 'Compelling content is essential for successful online marketing. We craft tailored content that resonates with your target audience.',
            image: 'https://img.freepik.com/free-photo/closeup-computer-laptop-screen-showing-ideas-wooden-table_53876-16088.jpg?ga=GA1.1.1538238808.1729515699&semt=ais_hybrid',
            link: '/content/creation',
            alt: 'Content Creation for Digital Marketing'
        },
        {
            icon: '',
            title: 'Branding and Advertising Solutions',
            description: 'Build a strong brand identity with our expert branding and advertising strategies, designed to help you stand out in a competitive marketplace.',
            image: 'https://img.freepik.com/free-photo/graphic-designer-laptop-with-paint-materials_23-2147652938.jpg?ga=GA1.1.1538238808.1729515699&semt=ais_hybrid',
            link: '/branding',
            alt: 'Branding and Advertising Services in Bangalore'
        },
        {
            icon: '',
            title: 'UI/UX Design for Exceptional User Experience',
            description: 'Our UI/UX design services focus on creating visually stunning, user-friendly interfaces that drive engagement and enhance customer satisfaction.',
            image: 'https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg?ga=GA1.1.1538238808.1729515699&semt=ais_hybrid',
            link: '/ui-ux',
            alt: 'UI UX Design for Websites and Apps'
        },
        {
            icon: '',
            title: 'Graphic Design for Impactful Visuals',
            description: 'Our talented graphic designers create visually compelling designs that communicate your brand’s message and make a lasting impact.',
            image: 'https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg?ga=GA1.1.1538238808.1729515699&semt=ais_hybrid',
            link: '/graphic-designing',
            alt: 'Creative Graphic Design Services'
        },
        {
            icon: '',
            title: 'Digital Marketing Services for Business Growth',
            description: 'Stay ahead in the digital world with our comprehensive digital marketing strategies, including SEO, social media marketing, and more.',
            image: 'https://img.freepik.com/free-photo/map-lying-wooden-table_53876-105723.jpg?ga=GA1.1.1538238808.1729515699&semt=ais_hybrid',
            link: '/marketing',
            alt: 'Digital Marketing Strategies for Business'
        },
        {
            icon: '',
            title: 'Event Management for Seamless Experiences',
            description: 'We offer end-to-end event management services, ensuring flawless execution and memorable experiences for every event.',
            image: 'https://img.freepik.com/free-photo/decorated-banquet-hall-with-flowers_8353-10058.jpg?ga=GA1.1.1538238808.1729515699&semt=ais_hybrid',
            link: '/',
            alt: 'Event Management and Planning Services'
        }
    ];
    
  return (
    <section className="services p-3 p-md-5 container-fluid dark2">
        <div className="text-center">
            <h5 className="fs-6 text-aqua text-length text-upper" data-aos="fade-up">Services</h5>
            <h1 className="banner-headeing text-shadow display-1 fw-bold text-white" data-aos="fade-up">Transform Your Brand with Our Professional Services</h1>
            <div className="row mt-5">
                {
                    data.map((item, index)=>(
                        <div className="col-md-4 mb-4">
                            <div className="service-card h-100 text-light text-start" data-aos="zoom-in-down">
                            <img src={item.image} alt={item.alt} className='w-100' />
                               <div className="content p-4 p-md-3">
                               <h1 className="fs-3">{item.title}</h1>
                               <p className="fs-6 text-justify">{item.description}</p>
                               {/* <button href="" className='btn btn-light w-auto' style={{width:'fit-content !imp[ortant'}}>View more</button> */}
                               </div>
                               <div className="hover-content">
                                    <a href={item.link} className='btn btn-light px-4 rounded-pill text-aqua'>Know more</a>
                               </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services