import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function WebDevelopmentServices() {
  const services = [
    {
      icon: 'bi bi-code-slash',
      title: 'Custom Web Development',
      content: 'We create tailored web solutions to meet your unique business needs, ensuring scalability and performance.',
    },
    {
      icon: 'bi bi-cart-check',
      title: 'E-commerce Development',
      content: 'Our team builds high-performing online stores with secure payment gateways and a seamless user experience.',
    },
    {
      icon: 'bi bi-layers',
      title: 'CMS Development',
      content: 'Get a fully functional, easy-to-manage CMS-based website using platforms like WordPress, Drupal, and Joomla.',
    },
    {
      icon: 'bi bi-speedometer2',
      title: 'Web Application Development',
      content: 'We specialize in building fast, reliable, and scalable web applications using modern frameworks.',
    },
  ];

  return (
    <section className="container my-5">
      <h1 className="text-center mb-4">Our Web Development Services</h1>
      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className={`${service.icon} text-primary fs-1 mb-3`}></i>
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text">{service.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WebDevelopmentServices;
