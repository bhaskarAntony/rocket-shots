import React from 'react'
import v1 from "./v1.mp4"
import v2 from "./v2.mp4"
import v3 from "./v3.mp4"
import v4 from "./v4.mp4"
import v5 from "./v5.mp4"
import v6 from "./v6.mp4"
import v7 from "./v7.mp4"
import v8 from "./v8.mp4"
import v9 from "./v9.mp4"
import v10 from "./v10.mp4"
import v11 from "./v11.mp4"
import Banner from '../services/Banner'
import Contact from '../../components/contact/Contact'
import Header from '../../components/header/Header'

function Gallery() {
  return (
    <div className='works'>
      <Header/>
         <Banner title='Gallery' subtitle='' image='https://img.freepik.com/premium-photo/quotphotographers-presenting-gallery-exhibitionquot_1168612-171394.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid'/>
        <section className="container-fluid p-3 p-md-5">
        <div class="row mt-5">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
               
                <video src={v1} className="w-100 v1" autoPlay loop muted controls 
                data-aos="zoom-in-right"></video>
                 <video src={v2} className="w-100 v3" autoPlay loop muted controls data-aos="zoom-in"></video>
                   
                </div>
        
                <div class="col-lg-4 mb-4 mb-lg-0">
                <video src={v3} className="w-100 v3" autoPlay loop muted controls data-aos="zoom-in-left"></video>
                <video src={v4} className="w-100 v1" autoPlay loop muted controls data-aos="zoom-in-right"></video>  
                </div>
        
                <div class="col-lg-4 mb-4 mb-lg-0">
                <video src={v5} className="w-100 v1" autoPlay loop muted controls data-aos="zoom-in"></video>
                  
                <video src={v6} className="w-100 v3" autoPlay loop muted controls data-aos="zoom-in-left"></video>
                </div>

              <div class="col-lg-4 mb-4 mb-lg-0">
                <video src={v7} className="w-100 v3" autoPlay loop muted controls data-aos="zoom-in"></video>
                  
                <video src={v8} className="w-100 v1" autoPlay loop muted controls data-aos="zoom-in-left"></video>
                </div>
                <div class="col-lg-4 mb-4 mb-lg-0">
                <video src={v9} className="w-100 v1" autoPlay loop muted controls data-aos="zoom-in"></video>
                  
                <video src={v10} className="w-100 v3" autoPlay loop muted controls data-aos="zoom-in-left"></video>
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                <video src={v11} className="w-100 v3" autoPlay loop muted controls data-aos="zoom-in-left"></video>
                <video src={v3} className="w-100 v1" autoPlay loop muted controls data-aos="zoom-in-right"></video>  
                </div>
                </div>
        </section>
        <Contact/>

    </div>
  )
}

export default Gallery