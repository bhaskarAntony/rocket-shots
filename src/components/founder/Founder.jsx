import React from 'react'
import image from './raks.png'
import './style.css'
import { TypeAnimation } from 'react-type-animation'
function Founder() {
  return (
    <section className="container-fluid bg-black">
        <div className="row">
            <div className="col-md-3">
                <div className="founder-left p-3 py-5">
                  <h1 className="fs-3 text-aqua fw-bold">Ranav kshirsagr</h1>
                  <div className="line"></div>
                  <p className="fs-4 text-aqua">Founder</p>
                 
                  {/* <h1 className="fs-4 text-white fw-bold">
                  <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'We Are Giving Content Creation Services',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'We Are Giving Web Development Services',
                    1000,
                    'We Are Giving Branding and Advartising Services',
                    1000,
                    'We Are Giving Digital Marketing Services',
                    1000
                  ]}
                  // wrapper="span"
                  speed={50}
                
                  repeat={Infinity}
                />
                  </h1> */}
                  <p className="fs-6 text-white">
                  Ranav kshirsagr, the founder of Rocketshots, is a multifaceted professional passionate about transforming ideas into impactful realities. From crafting stunning digital experiences to empowering brands with innovative strategies, he leads Rocketshots to deliver excellence in every project.
                  </p>
                  <div className="line"></div>
                   {/* <p className="fs-6 text-white">
                  A visionary leader and the driving force behind Rocketshots, Ranav Ksheersagar combines creativity, innovation, and strategy to redefine how businesses connect with their audience. With years of experience in the digital and creative space, Ranav has helped numerous brands achieve their full potential. His passion lies in crafting impactful solutions that leave a lasting impression.
                  </p> */}
                </div>
            </div>
            <div className="middle col-md-6 d-flex justify-content-end flex-column align-items-center pt-5">
                <img src={image} alt="" className='mt-5 d-block' style={{width:'65%'}} />
                <div className="line"></div>
                <div className="blur"></div>
                {/* <h1 className='text-white'>dd</h1> */}
            </div>
            <div className="col-md-3">
                  <div className="founder-right p-3 py-5  ">
                    <h1 className="fs-3 fw-bold text-aqua">The Vision</h1>
                    <div className="line"></div>
                    <p className="fs-6 text-white">
                    Rocketshots isn’t just about services—it’s about building partnerships that drive success. Ranav’s vision is to empower businesses with cutting-edge solutions that fuel growth and innovation.
                    </p>
                    <div className="line"></div>
                    <br />
                    <p className="fs-6 text-white">
                    “At Rocketshots, we don’t just complete projects; we create milestones. My team and I are committed to transforming your ideas into extraordinary outcomes. Together, let’s shoot for the stars!”
                    </p>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default Founder