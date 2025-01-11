import React, { useEffect, useRef } from 'react'
import './style.css'
import m1 from '../../assets/movie/1b739c74284099.5c2a29444cdef.png';
import m2 from '../../assets/movie/2015_Kannada_film_Masterpiece_promotional_poster.jpg'
import m3 from '../../assets/movie/2015_Kannada_film_Rangitaranga_poster.jpg'
import m4 from '../../assets/movie/71i8a-PnChL._AC_UF1000,1000_QL80_.jpg'
import m5 from '../../assets/movie/94995583.jpg'
import m6 from '../../assets/movie/EEKXcpcXsAEF3yc.jpg'
import m7 from '../../assets/movie/FzyencmaYAENp05.jpg'
import m8 from '../../assets/movie/MV5BMmE5NTRjZDgtNzAyNi00ZjU0LWFjODgtYWE5ZGQ4N2UwNGI4XkEyXkFqcGc@._V1_.jpg'
import m9 from '../../assets/movie/MV5BNmRjYmExMzgtY2IzZi00OGFkLWExMDgtM2IwMGRmMjhmODEzXkEyXkFqcGc@._V1_.jpg'
import m10 from '../../assets/movie/MV5BNzRhMjg3ZmQtMDc1Mi00YzVhLWIwYjEtZjdmODU4ZjEyNDMzXkEyXkFqcGc@._V1_QL75_UX820_.jpg'
import m11 from '../../assets/movie/MV5BOWQ3ZWVjN2YtOWY4NC00MWU2LWI1OTQtNWU5NGI0MjAwOTY5XkEyXkFqcGc@._V1_.jpg'
import m12 from '../../assets/movie/MV5BY2U4MDRlOGQtMTFmYS00NmQzLTlhYjMtMTFiZWNmNjJmYjM2XkEyXkFqcGc@._V1_.jpg'
import m13 from '../../assets/movie/MV5BYzE2YTQ1N2YtNzgwNS00ODYyLWE0ZDMtNDFiYTI1OGNhNmJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
import m14 from '../../assets/movie/MV5BZTRhODExY2MtNDAwNC00YmE0LTk5MmItNGUwZDU1MDUyYzNjXkEyXkFqcGc@._V1_.jpg'
import m15 from '../../assets/movie/P_HO00004474.jpg'
import m16 from '../../assets/movie/Screenshot_20250110-233049~2.png'
import m17 from '../../assets/movie/Shravani-Subramanya-Kannada-Movie-DVD.jpg'
import m18 from '../../assets/movie/This-May-Be-The-New-Release-Date-Of--RRR---1642673662-1886.jpg'
import m19 from '../../assets/movie/james-photos-images-75025.jpg'
import m20 from '../../assets/movie/kgf-chapter-2-photos-images-77106.jpg'
import m21 from '../../assets/movie/prabhas-kalki-2898-ad-photos-images-87388.jpg'
import m22 from '../../assets/movie/thithi-poster.jpg'
import m23 from '../../assets/movie/wp7567739.jpg'
import m24 from '../../assets/movie/yuvaratna-yuvarathnaa-photos-images-2131.jpg'



function Part() {
    const data = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21, m22, m23, m24];
    const scrollContainer = useRef(null); // Ref for scrollable container
    const autoSlideInterval = useRef(null); // Ref for interval to clear it when necessary

    // Scroll to the next set of items
    const handleNext = () => {
        scrollContainer.current.scrollBy({ left: 250, behavior: 'smooth' });
    };

    // Scroll to the previous set of items
    const handlePrev = () => {
        scrollContainer.current.scrollBy({ left: -250, behavior: 'smooth' });
    };

    // Auto slide function
    useEffect(() => {
        autoSlideInterval.current = setInterval(() => {
            handleNext(); // Auto-scroll forward every 3 seconds
        }, 3000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(autoSlideInterval.current);
    }, []);

    return (
        <section className="container-fluid p-3 p-md-5 movie-works">
            <h1 className="fs-1 fw-bold text-white text-center">
                <span className="text-aqua">FILMS</span> WE HAVE BEEN PART OF...
            </h1>

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
    );
}

export default Part;