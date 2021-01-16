import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SchoolForm.css";

const SchoolForm = (
  setSchoolName,
  setPrincipalName,
  setStreet,
  setPostalCode,
  setsuburb,
  setState,
  setStudentCount,
  is_editable
) => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>School Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter School Name"
            readOnly={is_editable}
            onChange={(t) => setSchoolName(t.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Pricipal's Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the pricipal's name"
            readOnly={is_editable}
            onChange={(t) => setPrincipalName(t.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Street"
            className="form-container"
            readOnly={is_editable}
            onChange={(t) => setStreet(t.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Suburb"
            className="form-container"
            readOnly={is_editable}
            onChange={(t) => setsuburb(t.target.value)}
          />
          <Form.Control
            type="number"
            placeholder="Postalcode"
            className="form-container"
            readOnly={is_editable}
            onChange={(t) => setPostalCode(t.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="State"
            className="form-container"
            readOnly={is_editable}
            onChange={(t) => setState(t.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Number of Registered Students</Form.Label>
          <Form.Control
            type="number"
            placeholder="# of students"
            readOnly={is_editable}
            onChange={(t) => setSchoolName(t.target.value)}
          />
        </Form.Group>
        
      </Form>
    </div>
  );
};

export default SchoolForm;
