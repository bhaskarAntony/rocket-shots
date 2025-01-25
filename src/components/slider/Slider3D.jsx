import React from "react";
import { Carousel } from "react-carousel3";
import image1 from '../../components/founder/raks.png' 
import image2 from '../../components/founder/likith1.png' 
import image3 from '../../components/founder/vikas.png' 
import image4 from '../../components/founder/adarsh.png' 
import abhishek from '../../pages/about/abhishek.png';
import image5 from '../../pages/about/1000191944-removebg-preview.png'


const style = {
  width: 10,
  height: 30
};
const imgStyle = {
  padding: "2px",
  background: "black",
  borderRadius: "20px",
};
function Slider3D() {
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
          }
        ]
  return (
    
    <div
      style={{
        margin: "0px",
        padding: "0px",
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(to bottom,  white 0%, gray 100%)"
      }}
    >
      <Carousel
        height={"100vh"}
        width={700}
        yOrigin={0}
        xOrigin={0}
        yRadius={50}
        xRadius={600}
      >
            <div>
        {slides.map((item, index) => (
            <div key={index}>
            <img alt={item.name} src={item.image} style={imgStyle} />
            </div>
        ))}
        </div>
      </Carousel>
    </div>
  );
}
export default Slider3D;