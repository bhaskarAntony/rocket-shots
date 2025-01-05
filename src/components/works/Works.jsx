import React from 'react'
import insta1 from '../../assets/videos/insta1.mp4'
import insta2 from '../../assets/videos/insta2.mp4'
import insta3 from '../../assets/videos/insta3.mp4'
import insta4 from '../../assets/videos/insta4.mp4'
import insta5 from '../../assets/videos/insta5.mp4'
import insta6 from '../../assets/videos/insta6.mp4'
import './style.css';
import v5 from '../../pages/Gallery/v5.mp4'

function Works() {
  return (
    <section className="container-fluid p-3 p-md-5 dark2 text-white works">
        <p className="fs-5 text-aqua" data-aos="fade-down">LATEST WORKS</p>
        <h1 className="display-3 fw-bold" data-aos="fade-up">Our Recent  Works</h1>
                <div class="row mt-5">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
       
       <div className="video">
       <video src={v5} className="w-100 v1" autoPlay loop muted controls 
        data-aos="zoom-in-right"></video>
        <div className="popup">

        </div>
       </div>
         <video src={insta3} className="w-100 v3" autoPlay loop muted controls data-aos="zoom-in"></video>
        

           
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
        <video src={insta2} className="w-100 v2" autoPlay loop muted controls data-aos="zoom-in"></video>
      
      
        <video src='https://firebasestorage.googleapis.com/v0/b/sporti-2e307.appspot.com/o/sporti%20videos%2Fsporti_1%20(1).mp4?alt=media&token=65f28e6b-12a2-4f0b-b028-503adc534f0a' className="w-100 v1" autoPlay loop muted controls data-aos="zoom-in-left"></video>
        

      
      
           
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
        <video src='https://rr2---sn-npoe7ns6.googlevideo.com/videoplayback?expire=1736100328&ei=iHV6Z4yUNOKD4-EP2f2GoQI&ip=2001%3A448a%3A3070%3A421e%3A1d7d%3A85fe%3A520a%3A8b2b&id=o-ACN9CRUZTPuOV2ykKJlp0mJJEQ9DY6bQ86skN3Lf03e4&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AfMhrI-x0eKvsYiVbVSFcQBmjm8i-_5Mx_XgLEa1G8EW5xJ-M3pNcplyhQPyIuKRbTzMbxz4n_6tCrQu&spc=x-caUPnz7gRV3bNo_-M0q1HvlpD0531_bTLB9mEx2no-Vzh9Y3iZN1B-TSfrmKA3Nw&vprv=1&svpuc=1&mime=video%2Fmp4&ns=JDcrUJMWfbGibuobQ2TbfU4Q&rqh=1&gir=yes&clen=1073407&ratebypass=yes&dur=22.058&lmt=1731612405126022&fexp=24350590,24350737,24350827,24350851,24350897,51326932,51331020,51335594,51371294&c=MWEB&sefc=1&txp=5319224&n=G9kwhCiB0VMFcA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhANWlYpm-yFJx3qAVZiFOPtqhuIbSRBvcyz7utBHlOyu3AiEA0VRQp6X13SBRvtKVN_LlViJedEeLfcEU1RMzjb_ZS8Q%3D&title=Sangeetha%20mobiles%20ad%20%7C%20Ranav%20Kshirsagr%20%7C%20Moksha%20Kushal%20%7C%20Srivatsa%20%7C%20SangeethaMobiles%20%7C%20Rocketshots&rm=sn-2uuxa3vh-cqvz7s,sn-nposl7z&rrc=79,104,80&req_id=9a4e0d5756f2a3ee&ipbypass=yes&redirect_counter=3&cm2rm=sn-h55se7s&cms_redirect=yes&cmsv=e&met=1736078744,&mh=mE&mip=49.206.23.177&mm=34&mn=sn-npoe7ns6&ms=ltu&mt=1736078426&mv=m&mvi=2&pl=21&rms=ltu,au&lsparams=ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRAIgKC7G0IIVNJ6dKyeamKh3-CdLhfGZprgG_aExwsP6KrYCIEQ4b_ovtPVOLHjyCqF6JSsbJN6H-rKmYtqbCBaOQTJM' className="w-100 v1" autoPlay loop muted controls data-aos="zoom-in-right"></video>
        <video src={insta6} className="w-100 v2" autoPlay loop muted controls data-aos="zoom-in-left"></video>
        {/* <video src='https://firebasestorage.googleapis.com/v0/b/sporti-2e307.appspot.com/o/sporti%20videos%2Fsporti_1%20(1).mp4?alt=media&token=65f28e6b-12a2-4f0b-b028-503adc534f0a' className="w-100 v1" autoPlay loop muted controls data-aos="zoom-in-left"></video> */}
        </div>
        </div>
        <center className="mt-4">
          <a href="/gallery" className="btn btn-light p-2 px-4 rounded-pill text-aqua">View more</a>
        </center>
    </section>
  )
}

export default Works