import React from 'react'
import './style.css'
function ServiceIcons() {
    const services = [
        { icon: "bi-film", title: "Film Promotions - Print & Digital" },
        { icon: "bi-star", title: "Celebrity Endorsements" },
        { icon: "bi-megaphone", title: "Political Campaigns & Events" },
        { icon: "bi-person", title: "Personal Branding" },
        { icon: "bi-pencil", title: "Branding & Rebranding Process" },
        { icon: "bi-camera-video", title: "Shoot & Model Management" },
        // { icon: "bi-laptop", title: "Website" },
        { icon: "bi-google", title: "Paid Media Ads" },
        { icon: "bi-people", title: "All Kinds of Outdoor Campaigns & Promotions" },
        { icon: "bi-music-note", title: "FM" },
        { icon: "bi-tv", title: "TV" }
      ];
  return (
    <div className="container my-5">
        <h1 className="fs-1 fw-bold text-center my-5 text-white">Branding & advertising <span className="text-aqua">Services</span></h1>
        <div className="line"></div>
      <div className="row text-center">
        {services.map((service, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="p-3 icon-card h-100 d-flex align-items-center justify-content-center flex-column">
              <i className={`bi ${service.icon} display-4 text-aqua`}></i>
              <h5 className="mt-3 text-white">{service.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceIcons