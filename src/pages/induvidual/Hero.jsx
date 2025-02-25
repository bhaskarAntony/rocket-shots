import React from 'react'
import Header from '../../components/header/Header'
import video from './v.mp4'

function Hero({title, subtitle, image}) {
  return (
   <section className="container-fluid p-0">
    <Header/>
        <div className="row align-items-center p-3 p-md-5 pt-5 bg-black p-0 overflow-hidden ">
            <div className="col-md-6 mt-5">
                <h5 className="fs-5 text-white">About</h5>
                <h1 className="text-aqua fs-1 fw-bold">{title}</h1>
                <div className="line"></div>
                <p className="fs-6 text-white">{subtitle}</p>
                <div className="d-flex flex-wrap gap-3">
             {
                title=='RANAV KSHIRSAGR'?(
                    <video src={video} width="100%" autoPlay muted loop></video>
                ):(null)
             }
                </div>
            </div>
            <div className="m1 mt-4 col-md-6 d-flex align-items-center justify-content-end p-0 h-100 flex-column">
            <div className="blur"></div>

                <img src={image} alt="rocketshots bangalore" className="w-75 mb-0" style={{transform:'translateY(75px)'}}/>
                
            </div>
        </div>
   </section>
  )
}

export default Hero