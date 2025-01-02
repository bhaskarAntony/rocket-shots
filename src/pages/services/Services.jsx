import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Services = ({data, title}) => {
  return (
    <div className="container-fluid p-3 p-md-5">
        <h1 className="display-3 text-center text-white my-5 fw-bold">Our <span className="text-aqua">{title}</span> Expertise</h1>
        <div className="line"></div>
        <br />
        <Row>
      {data.map((service, index) => (
       <div className="col-md-4 mb-4">
         <div className="service-card-page step-card text-center h-100">
          <div className="content h-100 p-3 text-white">
          <div className="step-icon">
                <i className={`${service.icon} fs-1`}></i>
            </div>
            <h1 className="fs-3">{service.title}</h1>
            <p className="fs-5">{service.description}</p>
          </div>
        </div>
       </div>
      ))}
    </Row>
    </div>
  );
};

export default Services;
