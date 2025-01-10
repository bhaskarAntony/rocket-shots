import React from 'react'
import image1 from '../../assets/Branding/Picsart_23-04-25_23-46-14-006.png'
import image2 from '../../assets/Branding/Screenshot 2025-01-09 135011.png'
import image3 from '../../assets/Branding/tv19_logo final.png'
import image4 from '../../assets/Branding/IMG_0218.png'
import image5 from '../../assets/Branding/IMG_1862.png'

import i1 from '../../assets/Branding/affliated.png'
import i2 from '../../assets/Branding/affliated1.png'
import i3 from '../../assets/Branding/affliated2.png'

function Affliated() {
    const data = [
        {
            image:image1,
            title:'KFI INSIDER'
        },
        {
            image:image2,
            title:'Namma Karnataka Memes'
        },
        {
            image:image3,
            title:'Tv9 Kannada'
        },
        {
            image:image4,
            title:'Filmology'
        },
        {
            image:image5,
            title:'First Day First Show'
        }
    ]
  return (
   <section className="container-fluid p-3 p-md-5">
    <div className="row text-white bg-dark p-3 p-md-5">
        <div className="col-md-8 m-auto">
            <p className="fs-5">
                -<span className="text-aqua">Rocketshots</span> develops comprehensive brand strategies that align with the client's vision and target market.
            </p>
            <p className="fs-5">
            -We craft compelling brand identities, including logos, taglines, and visual elements, that reflect the essence of the brand.
            </p>
            <p className="fs-5">
            -Leveraging various marketing channels, we design integrated campaigns for maximum brand exposure.
            </p>
        </div>
    </div>
    <div className="row dark2 mt-4">
        <h1 className="fs-1 fw-bold text-center text-white mb-4">Our <span className="text-aqua">Brands</span></h1>
        <div className="line"></div>
        {
            data.map((item, index)=>(
                <div className="col-md-3 mb-4">
                    <div className="companies p-3">
                        <img src={item.image} alt="" className="w-100" style={{height:'200px', objectFit:'contain'}} />
                    </div>
                </div>
            ))
        }
    </div>

    <h1 className="fs-1 fw-bold text-center text-white mb-4">Affliated <span className="text-aqua">Marketing</span></h1>
    <div className="line"></div>
    <div className="row">
        <div className="col-md-4 instagram d-flex align-items-center justify-content-center">
            <h1 className='fs-1 text-white fw-bold'>Affliated Marketing</h1>
        </div>
        <div className="col-md-8">
            <img src={i1} alt="" className="w-100" />
        </div>
    </div>

    <div className="row mt-5">
       
        <div className="col-md-8">
            <img src={i2} alt="" className="w-100" />
        </div>

        <div className="col-md-4 facebook d-flex align-items-center justify-content-center">
            <h1 className='fs-1 text-white fw-bold'>Affliated Marketing</h1>
        </div>
    </div>

    <div className="row mt-5">
       
     
       <div className="col-md-4 whatsapp d-flex align-items-center justify-content-center">
           <h1 className='fs-1 text-white fw-bold'>Affliated Marketing</h1>
       </div>
       <div className="col-md-8">
           <img src={i3} alt="" className="w-100" />
       </div>

   </div>
    
   </section>
  )
}

export default Affliated