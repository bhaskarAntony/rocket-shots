import React from 'react'
import video from '../../assets/videos/websitevideo1.mp4'
import './style.css'

function Hero() {
  return (
    <section className="hero">
      <video src={video} autoPlay muted loop className='w-100'></video>
      <div className="content text-center">
        <h1 className='display-1 fw-bold heading'>Rocket <span className="text-danger stroke">Shots</span></h1>
        <p className="fs-6 text-white">Rocketshots was instantiated on 5th Aug 2022 by Rakshit <br /> ksheersagar and Likith Raj experienced pioneers of the digital world. </p>
        <br />
        <button className="btn btn-danger p-3 px-5 rounded-pill">Contact Now</button>
      </div>
    </section>
  )
}

export default Hero