import React from 'react'

import Banner from '../services/Banner'
import Header from '../../components/header/Header'
import productVertical from './VerticalImages'
import productLandscape from './landscapeImages'



function Stills() {
  return (
  <div>
    <Header/>
      <Banner title='Portfolio & Product shoots'  image='https://img.freepik.com/premium-photo/video-production-scenes-making-tv-commercial-movie-that-film-crew-team-lightman_258335-1455.jpg?ga=GA1.1.1538238808.1729515699&semt=ais_incoming'/>
   <section className="container-fluid p-3 p-md-5 bg-dark">
     <div>
   <h1 className="fs-1 text-center text-white fw-bold mb-3">Products Shoot</h1>
   <div className="line"></div>
    <div className="row">
        {
                productVertical.map((item, index)=>(
                    <div className="col-md-3 mb-3">
                        <div className="image-card mb-4">
                        <img src={item} alt="" className="w-100 rounded-4" style={{height:'400px', background:'#ccc', objectFit:'cover'}}/>
                      </div>
                    </div>
                ))
        }

    {
                productLandscape.map((item, index)=>(
                    <div className="col-md-4 mb-3">
                        <div className="image-card mb-4">
                        <img src={item} alt="" className="w-100 rounded-4" style={{height:'400px', background:'#ccc', objectFit:'cover'}}/>
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
            {/* {
                productData.map((item, index)=>(
                    <div className="col-md-3 mb-3">
                        <div className="image-card mb-4 bg-black">
                        <img src={item} alt="" className="w-100" style={{minHeight:'300px', background:'#ccc', objectFit:'cover'}} />
                      </div>
                    </div>
                ))
            } */}
       
    </div>
   </div>
  
   </section>
  </div>
  )
}

export default Stills