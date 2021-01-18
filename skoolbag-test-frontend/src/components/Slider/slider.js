import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";

import SliderItem from "../SliderItem/SliderItem";

const Slider = () => {
  return (
    <div className="slider-container">
      <Carousel> 
        <Carousel.Item>
        <SliderItem 
          imageUrl = {'https://patch.com/img/cdn/users/68414/2012/07/raw/3a50cfa1871fb1a717a7e7e17477e862.jpg'}
          caption = {'School Caption'}
          discription = {'school caption description'}
        
        />
        </Carousel.Item>
        <Carousel.Item>
        <SliderItem 
          imageUrl = {'https://upload.wikimedia.org/wikipedia/commons/b/bf/University_of_South_Australia%2C_School_of_Mines%2C_North_Terrace%2C_Adelaide%2C_South_Australia.jpg'}
          caption = {'School Caption'}
          discription = {'school caption description'}
        />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
