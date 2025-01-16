import React from 'react'
import poster1 from '../../assets/facebook/sms.png'
import poster2 from '../../assets/facebook/sangeetha.png'
import poster3 from '../../assets/facebook/rajkumar.png'
import './style.css'

function Facebbok() {
    const data = [
        {
            image:poster1,
            heading:' Shree Mahalakshmi sweets',
            link:'https://www.facebook.com/share/17tJ9r8kcV/?mibextid=wwXIfr'
        },
       
        {
            image:poster2,
            heading:'Sangeetha mobiles',
            link:'https://www.facebook.com/share/12DELkMiXQM/'
        },
        {
            image:poster3,
            heading:'Dr. Rajkumar Academy',
            link:'https://www.facebook.com/share/15n17jvCN8/'
        },
       
    ]
  return (
    <section className='container-fluid'>
        <div className="media-section bg-dark  p-3 p-md-5">
        <div className="row">
                {
                    data.map((item, index)=>(
                      <div className='card-social'>
                      {
                        index%2 == 0?(
                            <div className="row" data-aos="fade-left">
                            <div className="col-md-4 facebook p-3 p-md-5">
                              <h1 className='fs-1 fw-bold text-white'>{item.heading}</h1>
                              <a href={item.link} target='_blank' className='btn btn-light p-2 fs-5 px-4 rounded-pill mt-3'>View Profile</a>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <div className="col-md-12 m-auto">
                              <img src={item.image} alt="" className="w-100" />
                              </div>
                            </div>
                          </div>
                         
                        </div>
                        ):(
                            <div className="row" data-aos="fade-right">
                                 <div className="col-md-8" >
                            <div className="row">
                              <div className="col-md-12 m-auto">
                              <img src={item.image} alt="" className="w-100" />
                              </div>
                            </div>
                          </div>

                            <div className="col-md-4 facebook p-3 p-md-5">
                              <h1 className='fs-1 text-white fw-bold'>{item.heading}</h1>
                            <a href={item.link} target='_blank' className='btn btn-light p-2 fs-5 px-4 rounded-pill mt-3'>View Profile</a>
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

export default Facebbok