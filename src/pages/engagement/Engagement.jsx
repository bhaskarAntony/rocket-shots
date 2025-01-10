import React from 'react'
import './style.css'
import { Carousel } from 'react-bootstrap'
import e1 from '../../assets/engagement/New Project 10 [CD2EF65]~2.png'
import e2 from '../../assets/engagement/New Project 12.png'
import e3 from '../../assets/engagement/New Project 13 [523107C]~2.png'
import e4 from '../../assets/engagement/New Project 14 [ABCE1A7]~2.png'
import e5 from '../../assets/engagement/New Project 15 [2208888]~2.png'
import e6 from '../../assets/engagement/New Project 16 [0D570D5]~2.png'
import e7 from '../../assets/engagement/New Project 17 [7DF0AAD]~2.png'
import e8 from '../../assets/engagement/New Project 19.png'
import e9 from '../../assets/engagement/New Project 20 [841C1A2]~2.png'
import e10 from '../../assets/engagement/New Project 21 [09332F2]~2.png'
import e11 from '../../assets/engagement/New Project 22 [B0C404D]~2.png'
import e12 from '../../assets/engagement/New Project 23 [FFCD1E6]~2.png'
import e13 from '../../assets/engagement/New Project 242.png'
import e14 from '../../assets/engagement/New Project 25 [80D0BBC]~2.png'
import e15 from '../../assets/engagement/New Project 26.png'
import e16 from '../../assets/engagement/New Project 27.png'
import e17 from '../../assets/engagement/New Project 28.png'
import e18 from '../../assets/engagement/New Project 9 [1A93D67]~3.png'
import Banner from '../services/Banner'
import Header from '../../components/header/Header'


function Engagement() {
    const data = [
        {
            image:e1,
            likes:12,
            comments:34,
            shares:30,
            views:201,
            brand:'rocketshots and nammakarnatakamemes'
        },
        {
            image:e2,
            likes:10471,
            comments:34,
            shares:30,
            views:201,
            brand:'Sangeetha Mobiles'
        },
        {
            image:e3,
            likes:4004,
            comments:34,
            shares:30,
            views:201,
            brand:'Dr Rajkumar Academy'
        },
        {
            image:e4,
            likes:3520,
            comments:2,
            shares:30,
            views:201,
            brand:'Sangeethe Mobiles'
        },
        {
            image:e5,
            likes:213524,
            comments:34,
            shares:30,
            views:201,
            brand:'Sangeethe Mobiles'
        },
        {
            image:e6,
            likes:71271,
            comments:34,
            shares:30,
            views:201,
            brand:'Sangeethe Mobiles'
        },
       
        {
            image:e7,
            likes:2141,
            comments:34,
            shares:30,
            views:201,
            brand:'Sri Mahalakshmi Sweets'
        },
        {
            image:e8,
            likes:56284,
            comments:34,
            shares:30,
            views:201,
            brand:'Sri Mahalakshmi Sweets'
        },
        {
            image:e9,
            likes:1350,
            comments:34,
            shares:30,
            views:201,
            brand:'Donne Biriyani Palace'
        },
        {
            image:e10,
            likes:33132,
            comments:34,
            shares:30,
            views:201,
            brand:'Donne Biriyani Palace'
        },
        {
            image:e11,
            likes:14543,
            comments:34,
            shares:30,
            views:201,
            brand:'rocketshots and nammakarnatakamemes'
        },
        {
            image:e12,
            likes:12,
            comments:34,
            shares:30,
            views:201,
            brand:'Rocketshots and Anchor Anushree'
        },
        {
            image:e13,
            likes:55074,
            comments:34,
            shares:30,
            views:201,
            brand:'Sri Mahalakshmi Sweets'
        },
        {
            image:e14,
            likes:11320,
            comments:34,
            shares:30,
            views:201,
            brand:'GoliBlast'
        },
        {
            image:e15,
            likes:12,
            comments:34,
            shares:30,
            views:201,
            brand:'PV Cinemas'
        },
        {
            image:e16,
            likes:83907,
            comments:34,
            shares:30,
            views:201,
            brand:'Golden Star Ganesh'
        },
        {
            image:e17,
            likes:451537,
            comments:34,
            shares:30,
            views:201,
            brand:'Kiccha Sudeepa'
        },
        {
            image:e18,
            likes:33617,
            comments:34,
            shares:30,
            views:201,
            brand:'Payal Changappa'
        }
    ]
  return (
   <>
   <Header/>
   <Banner title="Engagment Status" image='https://img.freepik.com/free-photo/happy-diverse-people-using-digital-devices_53876-96225.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid'/>
    <section className="container-fluid p-3 p-md-5 bg-dark">
           <Carousel>
        {
            data.map((item, index)=>(
                <Carousel.Item>
              <div className="row e-card p-3 p-md-5">
                <div className="col-md-3 mb-3">
                    <h1 className="fs-1 fw-bold text-white">{item.brand}</h1>
                    <div className="line"></div>
                </div>
                <div className="col-md-6 mb-3">
                <img src={item.image} alt="" />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </div>
                <div className="col-md-3 mb-3">
                    <h1 className="fs-1 text-aqua">Engagment</h1>
                    <div className="line"></div>
                    <ul className="likes">
                        <li>{item.likes} likes</li>
                    </ul>
                </div>
              </div>
      </Carousel.Item>
            ))
        }
     
    </Carousel>
    </section>
   </>
  )
}

export default Engagement