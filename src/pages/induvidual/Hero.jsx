import React from 'react'
import Header from '../../components/header/Header'

function Hero({title, subtitle, image}) {
  return (
   <section className="container-fluid p-0">
    <Header/>
        <div className="row align-items-center p-3 p-md-5 pt-5 bg-black p-0 overflow-hidden ">
            <div className="col-md-6 mt-5">
                <h1 className="text-aqua fs-1 fw-bold">{title}</h1>
                <p className="fs-6 text-white">{subtitle}</p>
                <div className="d-flex flex-wrap gap-3">
                <a href='/' className="btn btn-light p-2 rounded-pill px-4">Check Our Services</a>
                <a href='/about-us' className="btn btn-outline-light p-2 rounded-pill px-4">About us</a>
                </div>
            </div>
            <div className="m1 mt-4 col-md-6 d-flex align-items-center justify-content-end p-0 h-100 flex-column">
            <div className="blur"></div>

                <img src={image} alt="" className="w-50 mb-0" style={{transform:'translateY(75px)'}}/>
                d
            </div>
        </div>
   </section>
  )
}

export default Hero