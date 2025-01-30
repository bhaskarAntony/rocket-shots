import React, { useState, useEffect } from "react";
import Hammer from "hammerjs";
import image1 from '../../components/founder/raks.png' 
import image2 from '../../components/founder/likith1.png' 
import image3 from '../../components/founder/vikas.png' 
import image4 from '../../components/founder/adarsh.png' 
import abhishek from '../../pages/about/abhishek.png';
import image5 from '../../pages/about/1000191944-removebg-preview.png'


const Slider = () => {
    const slides = [
        {
            image:image1,
             position:'Founder',
            name:'Ranav Kshirsagr',
            link:''
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
            name:'Vikas V Angadi'
        },
        // {
        //     image:image4,
        //      position:'Marketing & Team Head',
        //     name:'Adarsh Inamdar'
        // },
        {
            image:image5,
             position:'Branding and advertising Head',
            name:'Shashank udupa'
        },
        {
          image:abhishek,
         position:'Senior Editor',
            name:'Abhishek'
      }
    ]
  const [activeIndex, setActiveIndex] = useState(2); // Default active slide index

  const updateSlides = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < slides.length - 1 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : slides.length - 1
    );
  };

  useEffect(() => {
    const swipeHandler = new Hammer(document.getElementById("slider"));

    swipeHandler.on("swipeleft", () => {
      nextSlide();
    });

    swipeHandler.on("swiperight", () => {
      prevSlide();
    });

    return () => {
      swipeHandler.destroy();
    };
  }, []);

  return (
  <section>
    <h1 className="fs-1 fw-bold text-center p-3 pt-5 text-white">Our <span className="text-aqua">Team Members</span></h1>
    <div className="line"></div>
      <div className="slider-container overflow-hidden mt-0">
      <span className="arrow-left" onClick={prevSlide}></span>
      <span className="arrow-right" onClick={nextSlide}></span>
      <div className="slider" id="slider">
        {slides.map((slide, index) => {
          let className = "slide";
          if (index === activeIndex) className += " active";
          else if (index === (activeIndex - 1 + slides.length) % slides.length)
            className += " prev-1";
          else if (index === (activeIndex - 2 + slides.length) % slides.length)
            className += " prev-2";
          else if (index === (activeIndex + 1) % slides.length)
            className += " next-1";
          else if (index === (activeIndex + 2) % slides.length)
            className += " next-2";

          return (
            <div className={className} key={index}>
              <img src={slide.image} alt={`Slide ${index}`} className="w-100" />
              <p>{slide.text}</p>
            </div>
          );
        })}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => updateSlides(index)}
          ></span>
        ))}
      </div>
      <div className="captions text-center">
       <h4 className="fs-4 fw-bold"> {slides[activeIndex].name}</h4>
       <small className="small text-aqua">{slides[activeIndex].position}</small>
      </div>
    </div>
  </section>
  );
};

export default Slider;
