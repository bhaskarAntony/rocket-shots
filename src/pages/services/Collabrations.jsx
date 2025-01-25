import React from 'react'
import './style.css'
import i1 from '../../assets/advertise/FB_IMG_1736529165616.jpg'
import i2 from '../../assets/advertise/FB_IMG_1736529233322.jpg'
import i3 from '../../assets/advertise/Honevale_Films.jpg'
import i4 from '../../assets/advertise/KVNProduction.png'
import i5 from '../../assets/advertise/Screenshot_20250110-223402~2.png'
import i6 from '../../assets/advertise/Screenshot_20250110-223647~2.png'
import i7 from '../../assets/advertise/Screenshot_20250110-224207~3.png'
import i8 from '../../assets/advertise/Screenshot_20250110-230024.png'
import i9 from '../../assets/advertise/crystal-park-cinemas.jpg'
import i10 from '../../assets/advertise/obNPfhum_400x400.jpg'
import i11 from '../../assets/advertise/titled-design-2023-01-20t185401-621~2.jpg'
import i12 from '../../assets/advertise/xwxoF5mG_400x400.jpg'

import i13 from '../../assets/advertise/2/Screenshot_20250110-222929~2.png'
import i14 from '../../assets/advertise/2/Screenshot_20250110-223301~3.png'
import i15 from '../../assets/advertise/2/Screenshot_20250110-223721~3.png'
import i16 from '../../assets/advertise/2/Screenshot_20250110-223835~3.png'

function Collabrations() {
    const data = [i3,i4,i10,  i16, i14, i15, i1,  i2,   i5, i6, i7, i8, i9,  i11, i12, i13,  ];
  return (
   <section className="container-fluid p-3 p-md-5 collabrators">
    <h1 className="fs-1 fw-bold text-white text-center my-4 mb-5">Our Collaborators</h1>
        <div className="row">
            {
                data.map((item, index)=>(
                    <div className="col-md-2">
                        <div className="c-card p-3">
                            <img src={item} alt="rocketshots bangalore" className="w-100" style={{height:'100px', objectFit:'contain'}} />
                        </div>
                    </div>
                ))
            }
        </div>
   </section>
  )
}

export default Collabrations