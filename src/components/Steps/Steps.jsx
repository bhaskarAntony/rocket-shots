import React, { useEffect } from 'react'
import './style.css'
import Aos from 'aos';

function Steps() {
    const data = [
        {
            title:'Project / Plan Creation',
            description:'We understand your requirment and need to uplift and market your Products '
        },
        {
            title:'Research & Implement',
            description:'We plan according to your Highest selling product and the Least selling product  to be sold in the market , By targeting the look alike audience for your product '
        },
        {
            title:'Launch & Success',
            description:' ⁠We  execute the plan in such a way that ROI is 10X time of your investments'
        }
    ]
   
  return (
   <section className="steps contyainer-fluid p-3 p-md-5 text-white bg-dark">
    <div className="text-center">
        <p className="fs-5 text-aqua" data-aos="fade-up">STEPS WE FOLLOW</p>
        <h1 className="display-3 fw-bold" data-aos="fade-up">Simple Steps We Follow</h1>
        <p className="fs-5" data-aos="fade-up">We follow a clear process: understand client needs, plan thoroughly, execute <br/> with precision, ensure quality, and deliver exceptional results.</p>
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