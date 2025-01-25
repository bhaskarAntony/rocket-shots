import React from 'react';
import './style.css';

function Banner({title, subtitle, image}) {
  return (
   <section className="banner p-3 p-md-5 text-white" style={{background:`linear-gradient(#000000b3,  #000000eb), url(${image}) no-repeat center`, backgroundSize:'cover !important'}}>
        <h1 className="display-5 fw-bold mt-5">{title}</h1>
        <p className="fs-5">{subtitle}</p>
   </section>
  )
}

export default Banner