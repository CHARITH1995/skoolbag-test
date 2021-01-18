import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const Slideritem = () => {
  return (
    <div>
      <img
        className="d-block w-100"
        src="https://upload.wikimedia.org/wikipedia/commons/b/bf/University_of_South_Australia%2C_School_of_Mines%2C_North_Terrace%2C_Adelaide%2C_South_Australia.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </div>
  );
};

export default Slideritem;
