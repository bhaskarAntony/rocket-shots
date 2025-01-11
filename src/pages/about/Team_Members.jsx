import React from 'react'
import './style.css'
import image1 from '../../components/founder/raks.png' 
import image2 from '../../components/founder/likith1.png' 
import image3 from '../../components/founder/vikas.png' 
import image4 from '../../components/founder/adarsh.png' 
import image5 from './1000191944-removebg-preview.png'
import abhishek from './abhishek.png';
import bhaskar_image from './bhaskar.png'

function Team_Members() {
    const data = [
        {
            image:image1,
            position:'Founder',
            name:'Ranav Kshirsagr'
        },
        {
            image:image2,
            position:'Co-Founder',
            name:'Likith Raj'
        },
        {
            image:image3,
            position:'Managing Director',
            name:'Vikas V Angadi'
        },
        {
            image:image4,
            position:'Marketing & Team Head',
            name:'Adarsh Inamdar'
        },
        {
            image:image5,
            position:'Branding and advertising Head',
            name:'Shashank udupa'
        },
        {
            image:abhishek,
            position:'Senior Editor',
            name:'Abhishek'
        },
        // {
        //     image:bhaskar_image,
        //     position:'Senior Developer',
        //     name:'Bhaskar Antony'
        // }
    ]
  return (
   <section className="container-fluid p-3 p-md-5 dark2">
    <h1 className="fs-1 fw-bold text-center mb-4 text-white">Our Team <span className="text-aqua">Members</span></h1>
    <div className="line"></div>
        <div className="row align-items-end">
            {
               data.map((item, index)=>(
                <div className="col-md-3 mb-4">
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
                </div>
               ))
            }
        </div>
   </section>
  )
}

export default Team_Members