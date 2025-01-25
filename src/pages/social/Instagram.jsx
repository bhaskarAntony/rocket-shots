import React from 'react'
import poster1 from '../../assets/Instagram/Dr.Rajkumar instagram look .png'
import poster2 from '../../assets/Instagram/SMS instagram look .png'
import poster3 from '../../assets/Instagram/Sangeetha Mobile Instagram look .png'
import './style.css'

function Instagram() {
    const data = [
      {
        image:poster2,
        heading:'Instagram Look for Shree Mahalakshmi sweets',
        link:'https://www.instagram.com/shreemahalakshmi_sweets?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
      image:poster3,
      heading:'Instagram Look for Sangeetha Mobile',
      link:'https://www.instagram.com/sangeetha.mobiles?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
  },
     {
            image:poster1,
            heading:'Instagram Look for Dr.Rajkumar Academy',
            link:'https://www.instagram.com/drrajkumaracademy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
        }
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
                            <div className="col-md-4 instagram p-3 p-md-5">
                              <h1 className='fs-1 fw-bold text-white'>{item.heading}</h1>
                              <a href={item.link} target='_blank' className='btn btn-light p-2 fs-5 px-4 rounded-pill mt-3'>View Profile</a>
                          </div>
                          <div className="col-md-8 p-3" style={{background:`url(${item.image})`, backgroundSize:'cover'}}>
                            <div className="row">
                              <div className="col-md-12 m-auto">
                              <img src={item.image} alt="rocketshots bangalore" className="w-100" />
                              </div>
                            </div>
                          </div>
                         
                        </div>
                        ):(
                            <div className="row" data-aos="fade-right">
                                 <div className="col-md-8 p-3" style={{background:`url(${item.image})`, backgroundSize:'cover'}}>
                            <div className="row">
                              <div className="col-md-12 m-auto">
                              <img src={item.image} alt="rocketshots bangalore" className="w-100" />
                              </div>
                            </div>
                          </div>

                            <div className="col-md-4 instagram p-3 p-md-5">
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

export default Instagram