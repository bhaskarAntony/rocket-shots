import React, { useEffect } from 'react'
import './style.css'
import Aos from 'aos';

function Steps() {
    const data = [
        {
            title:'Project / Plan Creation',
            description:'Mollit est inceptos ipsam class nihil dicta primis illum ad laoreet parturient.'
        },
        {
            title:'Research & Implement',
            description:'Mollit est inceptos ipsam class nihil dicta primis illum ad laoreet parturient.'
        },
        {
            title:'Launch & Success',
            description:'Mollit est inceptos ipsam class nihil dicta primis illum ad laoreet parturient.'
        }
    ]
   
  return (
   <section className="steps contyainer-fluid p-3 p-md-5 text-white bg-dark">
    <div className="text-center">
        <p className="fs-5 text-aqua" data-aos="fade-up">STEPS WE FOLLOW</p>
        <h1 className="display-3 fw-bold" data-aos="fade-up">Simple Steps We Follow</h1>
        <p className="fs-6" data-aos="fade-up">Veniam commodo magni mollis justo, saepe magnam! <br /> Eius sint atque. Beatae unde cras dictum natoque lectus perspiciat explicabo euismod.</p>
    </div>
    <div className="row mt-5">
        {
            data.map((item, index)=>(
                <div className="col-md-4 mb-3">
                    <div className="step-card text-center h-100" data-aos="zoom-out">
                        <div className="content p-3 py-5 h-100">
                        <div className="step-icon">
                            <h1 className="display-2 fw-bold">{index+1}</h1>
                        </div>
                       <div>
                       <h3 className="fs-3">{item.title}</h3>
                       <p className="fs-6">{item.description}</p>
                       </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
   </section>
  )
}

export default Steps