import React from "react";
import Carousel from "react-3d-carousel";
import img1 from '../../components/founder/raks.png'

const ThreeDCarousel = () => {
  const slides = [
    { key: 1, content: <img src={img1} alt="Image 1" /> },
    { key: 2, content: <img src={img1} alt="Image 2" /> },
    { key: 3, content: <img src={img1} alt="Image 3" /> },
    { key: 4, content: <img src={img1} alt="Image 4" /> },
  ];

  return (
    <div style={{ width: "500px", height: "300px", margin: "0 auto" }}>
      <Carousel slides={slides} autoplay={true} interval={3000} />
    </div>
  );
};

export default ThreeDCarousel;
