import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import '../styles/Slider.css'

function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
      "https://images.pexels.com/photos/7194007/pexels-photo-7194007.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1500&dpr=5",
      "https://images.pexels.com/photos/11217479/pexels-photo-11217479.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1500&dpr=5",
      "https://images.pexels.com/photos/8498322/pexels-photo-8498322.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1500&dpr=5",
    ];
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
      setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };



  return (
    <div className="slider">
    <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
      <img src={data[0]} alt="" />
      <img src={data[1]} alt="" />
      <img src={data[2]} alt="" />
    </div>
    <div className="icons">
      <div className="icon" onClick={prevSlide}>
        <WestOutlinedIcon />
      </div>
      <div className="icon" onClick={nextSlide}>
        <EastOutlinedIcon />
      </div>
    </div>
  </div>
  )
}

export default Slider
