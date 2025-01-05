import React from 'react'
import insta1 from '../../assets/videos/insta1.mp4'
import insta2 from '../../assets/videos/insta2.mp4'
import insta3 from '../../assets/videos/insta3.mp4'
import insta4 from '../../assets/videos/insta4.mp4'
import insta5 from '../../assets/videos/insta5.mp4'
import insta6 from '../../assets/videos/insta6.mp4'
import './style.css';
import v5 from '../../pages/Gallery/v5.mp4'

function Works() {
  return (
    <section className="container-fluid p-3 p-md-5 dark2 text-white works">
        <p className="fs-5 text-aqua" data-aos="fade-down">LATEST WORKS</p>
        <h1 className="display-3 fw-bold" data-aos="fade-up">Our Recent  Works</h1>
                <div class="row mt-5">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
       
       <div className="video">
       <video src={v5} className="w-100 v1" autoPlay loop muted controls 
        data-aos="zoom-in-right"></video>
        <div className="popup">

        </div>
       </div>
         <video src={insta3} className="w-100 v3" autoPlay loop muted controls data-aos="zoom-in"></video>
        

           
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
        <video src={insta2} className="w-100 v2" autoPlay loop muted controls data-aos="zoom-in"></video>
      
      
        <video src='https://firebasestorage.googleapis.com/v0/b/sporti-2e307.appspot.com/o/sporti%20videos%2Fsporti_1%20(1).mp4?alt=media&token=65f28e6b-12a2-4f0b-b028-503adc534f0a' className="w-100 v1" autoPlay loop muted controls data-aos="zoom-in-left"></video>
        

      
      
           
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
        <video src={insta1} className="w-100 v1" autoPlay loop muted controls data-aos="zoom-in-right"></video>
        <video src={insta6} className="w-100 v2" autoPlay loop muted controls data-aos="zoom-in-left"></video>
        {/* <video src='https://firebasestorage.googleapis.com/v0/b/sporti-2e307.appspot.com/o/sporti%20videos%2Fsporti_1%20(1).mp4?alt=media&token=65f28e6b-12a2-4f0b-b028-503adc534f0a' className="w-100 v1" autoPlay loop muted controls data-aos="zoom-in-left"></video> */}
        </div>
        </div>
        <center className="mt-4">
          <a href="/gallery" className="btn btn-light p-2 px-4 rounded-pill text-aqua">View more</a>
        </center>
    </section>
  )
}

export default Works