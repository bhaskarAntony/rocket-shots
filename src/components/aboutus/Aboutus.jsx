import React from 'react';
import './style.css';

function Aboutus() {
    const data = [
        {
            icon:'lightning-charge',
            title:'PIXEL PERFECT',
        },
        {
            icon:'paint-bucket',
            title:'CREATIVE SOLUTIONS',
        },
        {
            icon:'patch-check',
            title:'HIGH PERFORMANCE',
        }
    ]
  return (
    <div className='p-3 p-md-5 bg-dark'>
        <div className="row align-items-center">
            <div className="col-md-6 h-100 mb-4">
                <div className="row align-items-center mt-4">
                    <div className="col-6">
                    <img src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid" alt="" className='w-75 mb-3 rounded-4' />
                        <img src="https://img.freepik.com/free-photo/student-writing-notebook-desk_23-2148721245.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid" alt="" className="w-100 rounded-4 mb-3" />
                    </div>
                    <div className="col-6">
                        <img src="https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063134.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid" alt="" className='w-100 mb-3 rounded-4' />
                        <img src="https://img.freepik.com/free-photo/young-businessman-using-laptop-credit-card-while-buying-internet-night-office_637285-2610.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid" alt="" className='w-75 mb-3 rounded-4' />
                    </div>
                </div>
            </div>
            <div className="col-md-6 text-white">
                <a href="/about-us" className="fs-3 mb-3 about-text nav-link" data-aos="fade-up">About Us</a>
                <h1 className=" display-5 fw-bold text-aqua mb-3" data-aos="fade-up">We are more than just <br />
                a digital agency.</h1>
                <p className="fs-6" data-aos="fade-down">Rocketshots was instantiated on  5th Aug  2022 by Ranav kshirsagr and  Likith Raj experienced pioneers of the digital world. We at  Rocket shots provide world-class quality to our client content and uplift their Digital paradigm by bringing the best in class talents to work together and deliver engaging content to transforming your ideas into reality
                </p>
                <div className="about-cards">
                    <div className="row">
                        {
                            data.map((item, index)=>(
                               <div className="col-md-4 mb-3 p-2">
                                 <div data-aos="zoom-in"  className="about-card p-3 rounded text-center d-flex flex-column justify-content-center align-items-center h-100 dark2 text-white gap-3">
                                    <i className={`bi bi-${item.icon} fs-1 text-aqua`}></i>
                                    <h4 className="fs-6">{item.title}</h4>
                                </div>
                               </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus