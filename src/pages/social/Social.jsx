import React from 'react'
import Instagram from './Instagram'
import WhatsApp from './Whatsapp'
import Facebbok from './Facebbok'
import Banner from '../services/Banner'
import Header from '../../components/header/Header'

function Social() {
  return (
    <div>
        <Header/>
        <Banner title='Social Media Looks' subtitle='Our All Social Media Looks Facebook, Whatsapp, Instagram' image="https://img.freepik.com/premium-photo/positive-multicultural-young-people-using-smartphones-collage_116547-36776.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid"/>
        <div className='py-5'>
        <div className="px-3 px-md-5 py-2">
          
        <h1 className="fs-1 fw-bold text-white"><span className="text-danger"><i class="bi bi-instagram"></i> Instagram</span> Looks</h1>
        <div className="line"></div>
        </div>
        <Instagram/>
            <br />
      

          <div className="px-3 px-md-5 py-2">
          
          <h1 className="fs-1 fw-bold text-white"><span className="text-primary"><i class="bi bi-facebook"></i> Facebook</span> Looks</h1>
          <div className="line"></div>
          </div>

          <Facebbok/>
          <br />

          <div className="px-3 px-md-5 py-2">
          
          <h1 className="fs-1 fw-bold text-white"><span className="text-success"><i class="bi bi-whatsapp"></i> Whatsapp</span> Looks</h1>
          <div className="line"></div>
          </div>
          <br />
          <WhatsApp/>
            <br />
        
    </div>
    </div>
  )
}

export default Social