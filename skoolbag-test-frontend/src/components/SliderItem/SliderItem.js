import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const Slideritem = ({ imageUrl, caption, discription }) => {
  return (
    <div>
      <img className="d-block w-100" src={imageUrl} alt="First slide" />
      <Carousel.Caption>
        <h3>{caption}</h3>
        <p>{discription}</p>
      </Carousel.Caption>
    </div>
  );
};

export default Slideritem;
