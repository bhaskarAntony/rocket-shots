import React from 'react'
import logo from '../../assets/images/logo.png'
import './style.css'

function Contact() {
    const data = [
        {
            title:'Address',
            subtitle:'901 N Pitt Str., Suite 170 Alexandria, USA',
            icon:'geo-alt'
        },
        {
            title:'Phone number',
            subtitle:'+919606729320',
            icon:'telephone'
        },
        {
            title:'Email',
            subtitle:'test@gmail.com',
            icon:'envelope'
        }
    ]
  return (
    <section className="contact-section p-3 p-md-5 bg-dark text-white">
        <div className="contact-card dark2 p-3 rounded-4" data-aos="fade-up">
            <div className="row">
                <div className="col-md-3">
                    <img src={logo} alt="logo" className='logo' data-aos="zoom-in"/>
                </div>
                <div className="col-md-9">
                    <div className="row align-items-center">
                        {
                            data.map((item, index)=>(
                                <div className="col-md-4">
                                  <div className="info d-flex align-items-center gap-3">
                                    <div className="icon">
                                        <i className={`bi bi-${item.icon} fs-3`} data-aos="zoom-in"></i>
                                    </div>
                                    <div>
                                    <h4 className="fs-5 text-aqua" data-aos="fade-up">{item.title}</h4>
                                    <p className="fs-6" data-aos="fade-up">{item.subtitle}</p>
                                    </div>
                                  </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact