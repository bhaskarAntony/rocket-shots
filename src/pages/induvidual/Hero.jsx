import React from 'react'
import Header from '../../components/header/Header'

function Hero({title, subtitle, image}) {
  return (
   <section className="container-fluid">
    <Header/>
        <div className="row align-items-center p-3 p-md-5 pt-5 pb-0 dark2">
            <div className="col-md-6">
                <h1 className="text-aqua fs-1 fw-bold">{title}</h1>
                <p className="fs-5 text-white">{subtitle}</p>
                <div className="d-flex flex-wrap gap-3">
                <a href='/' className="btn btn-light p-2 rounded-pill">Check Our Services</a>
                <a href='/about-us' className="btn btn-outline-light p-2 rounded-pill">About us</a>
                </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <img src={image} alt="" className="w-75" />
            </div>
        </div>
   </section>
  )
}

export default Hero