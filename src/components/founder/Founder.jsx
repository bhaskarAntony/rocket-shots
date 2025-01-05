import React from 'react'
import image from './raks.png'
import './style.css'
function Founder() {
  return (
    <section className="container-fluid bg-black">
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="middle col-md-6 d-flex justify-content-center flex-column align-items-center pt-5">
                <img src={image} alt="" className='mt-5 d-block' style={{width:'65%'}} />
                <div className="blur"></div>
                {/* <h1 className='text-white'>dd</h1> */}
            </div>
            <div className="col-md-3">

            </div>
        </div>
    </section>
  )
}

export default Founder