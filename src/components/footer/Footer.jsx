import React from 'react'
import './style.css'

function Footer() {
  return (
   <footer className="container-fluid p-3 p-md-5 dark2 text-white">
        <div className="row">
            <div className="col-md-3 mb-3">
                <h4 className="fs-4 fw-bold">About Our Company</h4>
                <p className="fs-6" style={{textAlign:'justify'}}>
                Rocketshots was instantiated on 5th Aug 2022 by Rakshit ksheersagar and Likith Raj experienced pioneers of the digital world.
                </p>
            </div>
            <div className="col-md-3 mb-3">
                <h4 className="fs-4 fw-bold">Quick Links</h4>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Contact us</a></li>
                    {/* <li><a href="">About us</a></li> */}
                </ul>
            </div>

            <div className="col-md-3 mb-3">
                <h4 className="fs-4 fw-bold">Opening Hours</h4>
                <p className="fs-6">Voluptatem delectus facilisi, eiusm accusamus euismod ex hac.</p>
                <ul>
                    <li>Sun - Thu : <span className="text-aqua">09:00 - 05:00</span></li>
                    <li>Friday :  <span className="text-aqua">09:00 - 03:00</span></li> 
                    <li>Saturday : <span className="text-aqua"> Holiday(Closed)</span> </li>
                </ul>
            </div>
            <div className="col-md-3 mb-3">
                <h4 className="fs-4 fw-bold">Our Services</h4>
                <ul>
                    <li><a href="">Digital Marketing</a></li>
                    <li><a href="">Content Creation</a></li>
                    <li><a href="">Graphic Designing</a></li>
                    <li><a href="">Website Development</a></li>
                </ul>
            </div>
        </div>
        <div className="line"></div>
        <div className="row">
            <div className="col-md-6 mb-3">
                <p className="fs-6">Copyright © 2024 Agenoz. All right reserved.</p>
            </div>
            <div className="col-md-6">
                <div className="fs-4 d-flex justify-content-end gap-3">
                    <i className='bi bi-facebook'></i>
                    <i className='bi bi-instagram'></i>
                    <i className='bi bi-youtube'></i>
                    <i className='bi bi-linkedin'></i>
                </div>
            </div>
        </div>
   </footer>
  )
}

export default Footer