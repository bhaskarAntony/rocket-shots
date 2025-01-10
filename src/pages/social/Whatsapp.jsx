import React from 'react'
import poster1 from '../../assets/Whatsapp/Friends Carzone whatsapp look .jpg'
import poster2 from '../../assets/Whatsapp/Q and A whatsapp look .jpg'
import poster3 from '../../assets/Whatsapp/Azaleos Whatsapp look .jpg'
import './style.css'

function WhatsApp() {
    const data = [
      {
        image:poster3,
        heading:'Whatsapp Look for Azaleos'
    },
        {
            image:poster1,
            heading:'Whatsapp Look for Friends Carzone'
        },
        {
            image:poster2,
            heading:'Whatsapp Look for Q and A'
        },
       
    ]
  return (
    <section className='container-fluid p-3 p-md-5'>
        <div className="media-section">
            <div className="row">
                {
                    data.map((item, index)=>(
                      <div className='card-social'>
                      {
                        index%2 == 0?(
                            <div className="row" data-aos="fade-left">
                            <div className="col-md-4 whatsapp p-3 p-md-5">
                              <h1 className='fs-1 fw-bold text-white'>{item.heading}</h1>
                              <a href="" className='btn btn-light p-2 fs-5 px-4 rounded-pill mt-3'>View Profile</a>
                          </div>
                          <div className="col-md-8 p-3" style={{background:`url(${item.image})`, backgroundSize:'cover'}}>
                            <div className="row">
                              <div className="col-md-5 m-auto">
                              <img src={item.image} alt="" className="w-100" style={{height:'300px', objectFit:'contain'}}/>
                              </div>
                            </div>
                          </div>
                         
                        </div>
                        ):(
                            <div className="row" data-aos="fade-right">
                                 <div className="col-md-8 p-3" style={{background:`url(${item.image})`, backgroundSize:'cover'}}>
                            <div className="row">
                              <div className="col-md-5 m-auto">
                              <img src={item.image} alt="" className="w-100" style={{height:'300px', objectFit:'contain'}}/>
                              </div>
                            </div>
                          </div>

                            <div className="col-md-4 whatsapp p-3 p-md-5">
                              <h1 className='fs-1 text-white fw-bold'>{item.heading}</h1>
                            <a href="" className='btn btn-light p-2 fs-5 px-4 rounded-pill mt-3'>View Profile</a>
                          </div>
                         
                         
                        </div>
                        )
                      }
                      {/* <div className="line"></div> */}
                      </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default WhatsApp