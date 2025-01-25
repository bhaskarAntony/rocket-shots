import React from 'react'

function About({p1, p2, p3, p4}) {
  return (
  <section className="container-fluid p-3 p-md-5">
    <div className="row align-items-center bg-dark p-3 p-md-5 rounded-2">
        <div className="col-md-4">
            <img src="https://img.freepik.com/free-vector/retinal-biometric-scan-cyber-security-technology-blue-tone_53876-119535.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid" alt="rocketshots bangalore" className="w-100 rounded-4" />
        </div>
        <div className="col-md-7">
            <h1 className="fs-1 text-aqua">About</h1>
            <div className="line"></div>
            <p className="fs-5 text-white">{p1}</p>
            <br />
        </div>
    </div>
    <div className="line"></div>
    <p className="fs-6 text-white mt-5">{p2}</p>
    <p className="fs-6 text-white mt-5">{p3}</p>
    <p className="fs-6 text-white mt-5">{p4}</p>
  </section>
  )
}

export default About