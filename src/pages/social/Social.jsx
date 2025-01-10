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
        <Banner title='Social Media Looks' subtitle='Our All Social Media Looks Facebook, Whatsapp, Instagram' image=""/>
        <div className='py-5'>
        <div className="px-3 px-md-5 py-2">
          
        <h1 className="fs-1 fw-bold text-white">Instagram  Looks</h1>
        <div className="line"></div>
        </div>
        <Instagram/>
            <br />
        <div className="px-3 px-md-5 py-2">
          
          <h1 className="fs-1 fw-bold text-white">Whatsapp Looks</h1>
          <div className="line"></div>
          </div>

          <WhatsApp/>
            <br />
          <div className="px-3 px-md-5 py-2">
          
          <h1 className="fs-1 fw-bold text-white">Facebook Looks</h1>
          <div className="line"></div>
          </div>

          <Facebbok/>
    </div>
    </div>
  )
}

export default Social