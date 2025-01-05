import React from 'react'
import './style.css'

function Services() {
    const data = [
        {
            icon:'',
            title:'Digital Marketing',
            description:'In the ever-evolving digital landscape, we help your business stay ahead with our comprehensive digital marketing strategies.',
            image:'https://img.freepik.com/free-photo/map-lying-wooden-table_53876-105723.jpg?ga=GA1.1.1538238808.1729515699&semt=ais_hybrid',
            link:'/marketing'
        },
        // {
        //     icon:'',
        //     title:'Web & App Development',
        //     description:'Tempore corrupti temporibus fuga earum asperiores fugit laudantium.'
        // },
        {
            icon:'',
            title:'Graphic Design',
            description:'Our talented graphic designers transform your ideas into compelling visuals that make a lasting impact.',
            image:'https://img.freepik.com/free-vector/graphic-design-colorful-geometrical-lettering_52683-34588.jpg?ga=GA1.1.1538238808.1729515699&semt=ais_hybrid',
            link:'/graphic-designing'
        },
        {
            icon:'',
            title:'Content creation ',
            description:'Compelling content is the cornerstone of successful online marketing.',
            image:'https://img.freepik.com/free-photo/closeup-computer-laptop-screen-showing-ideas-wooden-table_53876-16088.jpg?ga=GA1.1.1538238808.1729515699&semt=ais_hybrid',
            link:'/content/creation'
        },
        {
            icon:'',
            title:'Branding and Advertising',
            description:'A strong brand identity is essential for standing out in a crowded marketplace.',
            image:'https://img.freepik.com/free-photo/graphic-designer-laptop-with-paint-materials_23-2147652938.jpg?ga=GA1.1.1538238808.1729515699&semt=ais_hybrid',
            link:'/branding'
        },
        {
            icon:'',
            title:'UI/UX',
            description:'Our UI/UX design services focus on creating visually stunning and user-friendly interfaces.',
            image:'https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg?ga=GA1.1.1538238808.1729515699&semt=ais_hybrid',
            link:'/ui-ux'
        },
        {
            icon:'',
            title:'Event management ',
            description:'our services encompass a wide range of activities and responsibilities, all of which are geared toward the successful execution of the event.',
            image:'https://img.freepik.com/free-photo/decorated-banquet-hall-with-flowers_8353-10058.jpg?ga=GA1.1.1538238808.1729515699&semt=ais_hybrid',
            link:'/'
        }
    ]
  return (
    <section className="services p-3 p-md-5 container-fluid dark2">
        <div className="text-center">
            <h5 className="fs-6 text-aqua text-length text-upper" data-aos="fade-up">Best Features</h5>
            <h1 className="banner-headeing text-shadow display-1 fw-bold text-white" data-aos="fade-up">SERVICES</h1>
            <div className="row mt-5">
                {
                    data.map((item, index)=>(
                        <div className="col-md-4 mb-4">
                            <div className="service-card h-100 text-light text-start" data-aos="zoom-in-down">
                            <img src={item.image} alt="" className='w-100' />
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