import React, { useEffect, useState } from "react";
import { Modal, Form, FormControl, Button } from "react-bootstrap";

import NavBar from "../../components/Navbar/NavBar";

const userprofile = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Form>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              readOnly={true}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name :</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              readOnly={true}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email :</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              readOnly={true}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Street"
              className="form-container"
              readOnly={true}
            />
            <Form.Control
              type="text"
              placeholder="Suburb"
              className="form-container"
              readOnly={true}
            />
            <Form.Control
              type="number"
              placeholder="Postalcode"
              className="form-container"
              readOnly={true}
            />
            <Form.Control
              type="text"
              placeholder="State"
              className="form-container"
              readOnly={true}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default userprofile;
