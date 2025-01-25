import React from 'react'
import poster1 from '../../assets/Whatsapp/Friends Carzone whatsapp look .jpg'
import poster2 from '../../assets/Whatsapp/Q and A whatsapp look .jpg'
import poster3 from '../../assets/Whatsapp/Azaleos Whatsapp look .jpg'
import './style.css'

function WhatsApp() {
    const data = [
      {
        image:poster3,
        heading:'Azaleos'
    },
        {
            image:poster1,
            heading:'Friends Carzone'
        },
        {
            image:poster2,
            heading:'Q and A'
        },
       
    ]
  return (
    <section className='container-fluid'>
        <div className="media-section bg-dark  p-3 p-md-5">
        <div className="row align-items-center" data-aos="fade-left">
                            <div className="col-md-4 whatsapp p-3 p-md-5">
                              <h1 className="fs-2 fw-bold text-warning">
                                Whatsapp Look For  <br /> <hr />
                              {
                                data.map((item,index)=>(
                                 <span> <span className='text-white'> {item.heading}</span> <br /> <hr /></span>
                                ))
                              }
                              
                              </h1>
                             
                          </div>
                          <div className="col-md-8 p-3" >
                            <div className="row">
                              {
                                data.map((item, index)=>(
                                  <div className="col-md-4">
                                     <img src={item.image} alt="rocketshots bangalore" className="w-100" style={{height:'400px', objectFit:'contain'}}/>
                                  </div>
                                ))
                              }
                            
                            </div>
                          </div>
                         
                        </div>
        </div>
    </section>
  )
}

export default WhatsApp