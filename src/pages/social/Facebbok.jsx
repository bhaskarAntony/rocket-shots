import React from 'react'
import poster1 from '../../assets/facebook/Dr.Rajkumar Academi FB Look .jpg'
import poster2 from '../../assets/facebook/Sangeetha mobiles FB Look .jpg'
import poster3 from '../../assets/facebook/Shree Mahalakshmi sweets FB look .jpg'
import './style.css'

function Facebbok() {
    const data = [
        {
            image:poster3,
            heading:' Shree Mahalakshmi sweets',
            link:'https://www.facebook.com/share/1HKYnc4ZGm/'
        },
       
        {
            image:poster2,
            heading:'Sangeetha mobiles',
            link:'https://www.facebook.com/share/12DELkMiXQM/'
        },
        {
            image:poster1,
            heading:'Dr. Rajkumar Academi',
            link:'https://www.facebook.com/share/15n17jvCN8/'
        },
       
    ]
  return (
    <section className='container-fluid'>
        <div className="media-section bg-dark  p-3 p-md-5">
        <div className="row align-items-center" data-aos="fade-left">
                            <div className="col-md-4 facebook p-3 p-md-5">
                              <h1 className="fs-3 fw-bold text-warning">
                                Facebook Look For  <br /> <hr />
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
                                     <img src={item.image} alt="" className="w-100" style={{height:'400px', objectFit:'contain'}}/>
                                     <br />
                                     <a href={item.link} className="btn btn-primary w-100 d-block mt-3 rounded-pill">View Profile</a>
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

export default Facebbok