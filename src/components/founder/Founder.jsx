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
                  <a href='/portfolio/ranav' className="fs-3 text-aqua fw-bold">RANAV KSHIRSAGR </a>
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
                  <span className="text-aqua">Ranav kshirsagr</span> is a remarkable individual with a diverse range of talents and a strong determination to follow his passions. Despite starting his journey with a career in Mechanical Engineering and even securing a position in the Indian Navy as a UES pilot, he chose to change his path to pursue his true passion for cinema. This bold decision to follow his heart and leave behind a secure career showcases his dedication to his dreams.
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
                    <h1 className="fs-3 fw-bold text-aqua">Experience</h1>
                    <div className="line"></div>
                    <p className="fs-6 text-white">
                    His involvement in the film industry has been extensive and impressive. Working as an Associate Director for well-known names like Sadhukokila and Nandakishore has given him valuable experience and insight into the industry. 
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