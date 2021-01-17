import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./schoolCardStyle.css";

const SchoolCard = ({id,name , email , principal}) => {
  return (
    <div className="card-container">
      <Card>
        <Card.Header>{name}</Card.Header>
        <div>
          <div className="column-card left-card">
            <Card.Img
              variant="top"
              className="image-style"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuRcPLCWDX8EGs7VGNAUWIiMPfV8WPSYmm_g&usqp=CAU"
            />
          </div>
          <div className="column-card right-card">
            <Card.Body>
              <Card.Title>Mr : {principal}</Card.Title>
              <Card.Text>{email}</Card.Text>
              <div className="container">
                <Link
                  to={"/school/view/" + id}
                  className="btn btn-primary button-style"
                >
                  View
                </Link>
                {/* <Link
                  to={"/school/update/" + 23131}
                  className="btn btn-primary"
                >
                  Update
                </Link> */}
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SchoolCard;
