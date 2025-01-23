import React from 'react'
import image1 from  './product/1.jpg'
import image2 from  './product/2.jpg'
import image3 from  './product/3.jpg'
import image4 from  './product/4.jpg'
import image5 from  './product/5.jpg'
import image6 from  './product/6.jpg'
import image7 from  './product/7.jpg'
import image8 from './product/8.jpg'
import image9 from  './product/9.jpg'
import image10 from  './product/10.jpg'
import image11 from  './product/11.jpg'
import image12 from  './product/12.jpg'
import image13 from  './product/13.jpg'
import image14 from  './product/14.jpg'
import image15 from  './product/15.jpg'
import image16 from  './product/16.jpg'
import image17 from  './product/17.jpg'
import  image18 from './product/18.jpg'
import image19 from  './product/19.jpg'
import image20 from  './product/20.jpg'

import i1 from './shoot/1.jpg';
import i2 from './shoot/2.jpg';
import i3 from './shoot/3.jpg';
import i4 from './shoot/4.jpg';
import i5 from './shoot/5.jpg';
import i6 from './shoot/6.jpg';
import i7 from './shoot/7.jpg';
import i8 from './shoot/8.jpg';
import i9 from './shoot/9.jpg';
import i10 from './shoot/10.jpg';
import i11 from './shoot/11.jpg';
import i12 from './shoot/12.jpg';
import i13 from './shoot/13.jpg';
import i14 from './shoot/14.jpg';
import i15 from './shoot/15.jpg';
import i16 from './shoot/16.jpg';
import i17 from './shoot/17.jpg';
import i18 from './shoot/18.jpg';
import i19 from './shoot/19.jpg';
import i20 from './shoot/20.jpg';
import i21 from './shoot/23.jpg';
import i22 from './shoot/22.jpg';
import i23 from './shoot/23.jpg';
import i24 from './shoot/24.jpg';
import i25 from './shoot/25.jpg';
import i26 from './shoot/26.jpg';
import i27 from './shoot/27.jpg';
import i28 from './shoot/28.jpg';
import i29 from './shoot/29.jpg';
import i30 from './shoot/30.jpg';
import i31 from './shoot/31.jpg';
import i32 from './shoot/32.jpg';
import i33 from './shoot/33.jpg';
import i34 from './shoot/34.jpg';
import i35 from './shoot/35.jpg';
import i36 from './shoot/36.jpg';
import i37 from './shoot/37.jpg';
import i38 from './shoot/38.jpg';
import i39 from './shoot/39.jpg';
import i40 from './shoot/40.jpg';
import i41 from './shoot/41.jpg';
import i42 from './shoot/42.jpg';
import Banner from '../services/Banner'
import Header from '../../components/header/Header'



function Stills() {
    const productData = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,

    ]
    
    const alldata = [
        i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20, 
        i21, i22, i23, i24, i25, i26, i27, i28, i29, i30, i31, i32, i33, i34, i35, i36, i37, i38, i39, 
        i40, i41, i42
      ];
  return (
  <div>
    <Header/>
      <Banner title='Portfolio & Product shoots'  image='https://img.freepik.com/premium-photo/video-production-scenes-making-tv-commercial-movie-that-film-crew-team-lightman_258335-1455.jpg?ga=GA1.1.1538238808.1729515699&semt=ais_incoming'/>
   <section className="container-fluid p-3 p-md-5 bg-dark">
     <div>
   <h1 className="fs-1 text-center text-white fw-bold mb-3">Portfolio</h1>
   <div className="line"></div>
    <div className="row">
        {
                alldata.map((item, index)=>(
                    <div className="col-md-3 mb-3">
                        <div className="image-card mb-4 h-100 bg-black">
                        <img src={item} alt="" className="w-100" style={{minHeight:'200px', background:'#ccc', objectFit:'cover'}}/>
                      </div>
                    </div>
                ))
        }
    </div>
   </div>
   
   <div>
   <h1 className="fs-1 text-center text-white fw-bold mb-3">Product shoot</h1>
   <div className="line"></div>
   <div className="row">
            {
                productData.map((item, index)=>(
                    <div className="col-md-3 mb-3">
                        <div className="image-card mb-4 bg-black">
                        <img src={item} alt="" className="w-100" style={{minHeight:'300px', background:'#ccc', objectFit:'cover'}} />
                      </div>
                    </div>
                ))
            }
       
    </div>
   </div>
  
   </section>
  </div>
  )
}

export default Stills