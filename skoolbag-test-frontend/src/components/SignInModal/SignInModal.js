import React, { useEffect, useState } from "react";
import { Modal ,Form,FormControl,Button} from "react-bootstrap";

const SignInModal = ({signInShow , handleClose}) => {
  return (
    <div>
      <Modal show={signInShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In using here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Email :</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                readOnly={false}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignInModal;
