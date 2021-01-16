import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";

import SliderItem from "../SliderItem/SliderItem";

const Slider = () => {
  return (
    <div className="slider-container">
      <Carousel>
        <Carousel.Item>
        <SliderItem />
        </Carousel.Item>
        <Carousel.Item>
        <SliderItem />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
