import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SchoolForm.css";

const SchoolForm = () => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>School Name</Form.Label>
          <Form.Control type="email" placeholder="Enter email" readOnly={true} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Pricipal's Name</Form.Label>
          <Form.Control type="text" placeholder="Enter the pricipal's name" readOnly={true} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Street" className="form-container" readOnly={true} />
          <Form.Control type="text" placeholder="Suburb" className="form-container" readOnly={true}/>
          <Form.Control type="number" placeholder="Postalcode" className="form-container" readOnly={true}/>
          <Form.Control type="text" placeholder="State" className="form-container" readOnly={true}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Number of Registered Students</Form.Label>
          <Form.Control type="number" placeholder="# of students" readOnly={true}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SchoolForm;
