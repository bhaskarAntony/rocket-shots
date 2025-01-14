import React, { useState } from 'react'
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
import CountUp from 'react-countup'
const formatViews = (views) => {
    if (typeof views === 'string' && (views.toUpperCase()).includes('K')) {
        return { value: parseFloat(views) * 1000, suffix: 'K' }
    } else if (typeof views === 'string' && views.includes('M')) {
        return { value: parseFloat(views) * 1000000, suffix: 'M' }
    }
    return { value: views, suffix: '' }
}

function Engagement() {
    const [activeIndex, setActiveIndex] = useState(0) // Track active slide index
    const data = [
        {
            image:e1,
            likes:12,
            comments:34,
            shares:30,
            views:'818K',
            brand:'rocketshots and nammakarnatakamemes'
        },
        {
            image:e2,
            likes:10471,
            comments:34,
            shares:30,
            views:'701k',
            brand:'Sangeetha Mobiles'
        },
        {
            image:e3,
            likes:4004,
            comments:34,
            shares:30,
            views:'120k',
            brand:'Dr Rajkumar Academy'
        },
        {
            image:e4,
            likes:3520,
            comments:2,
            shares:30,
            views:'1.1M',
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
            views:'11.1M',
            brand:'Sangeethe Mobiles'
        },
       
        {
            image:e7,
            likes:2141,
            comments:34,
            shares:30,
            views:'20.4M',
            brand:'Sri Mahalakshmi Sweets'
        },
        {
            image:e8,
            likes:56284,
            comments:34,
            shares:30,
            views:'473K',
            brand:'Sri Mahalakshmi Sweets'
        },
        {
            image:e9,
            likes:1350,
            comments:34,
            shares:30,
            views:'47.8K',
            brand:'Donne Biriyani Palace'
        },
        {
            image:e10,
            likes:33132,
            comments:34,
            shares:30,
            views:'380K',
            brand:'Donne Biriyani Palace'
        },
        {
            image:e11,
            likes:14543,
            comments:34,
            shares:30,
            views:'121K',
            brand:'rocketshots and nammakarnatakamemes'
        },
        {
            image:e12,
            likes:12,
            comments:34,
            shares:30,
            views:'672K',
            brand:'Rocketshots and Anchor Anushree'
        },
        {
            image:e13,
            likes:55074,
            comments:34,
            shares:30,
            views:'548K',
            brand:'Sri Mahalakshmi Sweets'
        },
        {
            image:e14,
            likes:11320,
            comments:34,
            shares:30,
            views:'144K',
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
            views:'1M',
            brand:'Golden Star Ganesh'
        },
        {
            image:e17,
            likes:451537,
            comments:34,
            shares:30,
            views:'9.9M',
            brand:'Kiccha Sudeepa'
        },
        {
            image:e18,
            likes:33617,
            comments:34,
            shares:30,
            views:'713K',
            brand:'Payal Changappa'
        }
    ]

    
  return (
    <>
    <Header />
    <Banner
        title="Engagement Status"
        image="https://img.freepik.com/free-photo/happy-diverse-people-using-digital-devices_53876-96225.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_hybrid"
    />
    <section className="container-fluid p-3 p-md-5 bg-dark">
        <Carousel onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}>
            {data.map((item, index) => {
                const { value, suffix } = formatViews(item.views) // Format views
                return (
                    <Carousel.Item key={index}>
                        <div className="e-card">
                            <div className="row p-3 p-md-5">
                                <div className="col-md-3 mb-3">
                                    <h1 className="fs-1 fw-bold text-white">{item.brand}</h1>
                                    <div className="line"></div>
                                    <button className="btn btn-light rounded-pill p-3 px-4 text-aqua">View On Instagram</button>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <img src={item.image} alt={item.brand} />
                                </div>
                                <div className="col-md-3 mb-3">
                                    <h1 className="fs-1 text-white">Engagement</h1>
                                    <div className="line"></div>
                                    <ul className="likes">
                                        <li>
                                            <i className="bi bi-eye"></i>{' '}
                                            {activeIndex === index && (
                                                <CountUp end={value} duration={1.5} separator="," />
                                            )}
                                            {suffix} Views
                                        </li>
                                        <li>
                                            <i className="bi bi-hand-thumbs-up"></i>{' '}
                                            {activeIndex === index && (
                                                <CountUp end={item.likes} duration={1.5} separator="," />
                                            )}  Likes
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    </section>
</>
  )
}

export default Engagement