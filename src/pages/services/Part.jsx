import React, { useRef } from 'react'
import './style.css'
import m1 from '../../assets/movie/044b9f46229891.584c7ac23368e.jpg'
import m2 from '../../assets/movie/1600x1200_MasterPiece_17358_75f3c1bc-ceb7-4f73-8d97-eca583376832.jpg'
import m3 from '../../assets/movie/1b739c74284099.5c2a29444cdef.png'
import m4 from '../../assets/movie/2-VC-square-logo-18.jpg'
import m5 from '../../assets/movie/2015_Kannada_film_Rangitaranga_poster.jpg'
import m6 from '../../assets/movie/71i8a-PnChL._AC_UF1000,1000_QL80_.jpg'
import m7 from '../../assets/movie/94995583.jpg'
import m8 from '../../assets/movie/EEKXcpcXsAEF3yc.jpg'
import m9 from '../../assets/movie/FzyencmaYAENp05.jpg'
import m10 from '../../assets/movie/MV5BNTE1ZThlMDktYjQ2ZS00NmQ3LWE1NWQtYTY5ZDZlYmU4YmU3XkEyXkFqcGc@._V1_QL75_UX480_.jpg'
import m11 from '../../assets/movie/MV5BY2U4MDRlOGQtMTFmYS00NmQzLTlhYjMtMTFiZWNmNjJmYjM2XkEyXkFqcGc@._V1_.jpg'
import m12 from '../../assets/movie/P_HO00004474.jpg'
import m13 from '../../assets/movie/Screenshot_20250110-233049~2.png'
import m14 from '../../assets/movie/Shravani-Subramanya-Kannada-Movie-DVD.jpg'
import m15 from '../../assets/movie/ee.jpg'
import m16 from '../../assets/movie/et00341472-egknnewrct-landscape.jpg'
import m17 from '../../assets/movie/kgf-chapter-2-photos-images-77106.jpg'
import m18 from '../../assets/movie/prabhas-kalki-2898-ad-photos-images-87388.jpg'
import m19 from '../../assets/movie/pro.jpg'
import m20 from '../../assets/movie/pro2.jpg'
import m21 from '../../assets/movie/pro3.jpg'
import m22 from '../../assets/movie/rrr-movie-review2532022m10.jpg'
import m23 from '../../assets/movie/thithi-poster.jpg'
import m24 from '../../assets/movie/uh.jpg'
import m25 from '../../assets/movie/untitled-design-16-3-2~2.png'
import m26 from '../../assets/movie/wp7567739.jpg'
import m27 from '../../assets/movie/yuvaratna-yuvarathnaa-photos-images-2131.jpg'


function Part() {
    const data = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21, m22, m23, m24, m25, m26, m27]
    const scrollContainer = useRef(null) // Ref for scrollable container

    const handleNext = () => {
        scrollContainer.current.scrollBy({ left: 250, behavior: 'smooth' })
    }

    const handlePrev = () => {
        scrollContainer.current.scrollBy({ left: -250, behavior: 'smooth' })
    }

    return (
        <section className="container-fluid p-3 p-md-5 movie-works">
            <h1 className="fs-1 fw-bold text-white text-center"><span className="text-aqua">FILMS</span> WE HAVE BEEN PART OF...</h1>
            
            <div className="d-flex justify-content-between mb-3">
                <button className="btn btn-light" onClick={handlePrev}>
                    <i className="bi bi-arrow-left-circle"></i> Prev
                </button>
                <button className="btn btn-light" onClick={handleNext}>
                    Next <i className="bi bi-arrow-right-circle"></i>
                </button>
            </div>
            <div
                className="d-flex overflow-auto"
                ref={scrollContainer}
                style={{
                    scrollSnapType: 'x mandatory',
                    gap: '10px',
                    scrollPadding: '10px',
                }}
            >
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                        style={{
                            width: '250px',
                            height: '400px',
                            scrollSnapAlign: 'start',
                        }}
                    >
                        <img
                            src={item}
                            alt=""
                            className="w-100 h-100 rounded"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Part