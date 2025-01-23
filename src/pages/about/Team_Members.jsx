import React from 'react'
import './style.css'
import image1 from '../../components/founder/raks.png' 
import image2 from '../../components/founder/likith1.png' 
import image3 from '../../components/founder/vikas.png' 
import image4 from '../../components/founder/adarsh.png' 
import image5 from './1000191944-removebg-preview.png'
import sumanth from './ee/sumanth.png'
import govind from './ee/govind.png'
import ajay from './ee/ajay.png'
import abhishek from './abhishek.png';

function Team_Members() {
    const data = [
        {
            image:image1,
            position:'Founder',
            name:'Ranav Kshirsagr',
             link:'/portfolio/ranav'
        },
        {
            image:image2,
            position:'Co-Founder',
            name:'Likith Raj',
            link:'/portfolio/likith'
        },
        {
            image:image3,
            position:'Managing Director',
            name:'Vikas V Angadi',
           link:'/portfolio/vikas'
        },
        {
            image:image4,
            position:'Marketing & Team Head',
            name:'Adarsh Inamdar'
        },
        {
            image:image5,
            position:'Branding and Advertising Head',
            name:'Shashank Udupa',
            link:'/portfolio/shashank'
        },
        {
            image:abhishek,
            position:'Senior Editor',
            name:'Abhishek',
             link:'/portfolio/abhishek'
        },
        {
            image:govind,
            position:'Creative Curator',
            name:'GovindRaj J',
             link:'/portfolio/govindhraj'
        },
        {
            image:sumanth,
            position:'Content Creator',
            name:'Sumanth Ram',
             link:'/portfolio/sumanth'
        },
       
        {
            image:ajay,
            position:'Editor',
            name:'Ajay kumar Shinde',
             link:'/portfolio/ajay'
        }
    ]
  return (
   <section className="container-fluid p-3 p-md-5 dark2">
    <h1 className="fs-1 fw-bold text-center mb-4 text-white">Our Team <span className="text-aqua">Members</span></h1>
    <div className="line"></div>
        <div className="row align-items-end">
            {
               data.map((item, index)=>(
                <div className="col-md-3 mb-4">
               <a href={item.link} className="nav-link">
               <div className="member-card p-3">
                    <img src={item.image} alt={item.name} className="w-100" />
                    <div className="green"></div>
                    <div className="content text-center text-white p-3">
                        <h4 className="fs-4 fw-bold">{item.name}</h4>
                    </div>
                    <p className="p-2 bg-dark mb-0 text-center text-aqua">
                        {item.position}
                    </p>
                </div>
               </a>
                </div>
               ))
            }
        </div>
   </section>
  )
}

export default Team_Members