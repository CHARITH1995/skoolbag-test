import React, { useEffect, useState, useCallback } from "react";
import { Modal, Form, FormControl, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../actions/index";

import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";

const SignUpModal = ({ signUpShow, handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [suburb, setsuburb] = useState("");
  const [state, setState] = useState("");
  const [showModal , setShowModal] = useState(false);
  const [isSubmit , setIsSubmit] = useState(false)
  const dispatch = useDispatch();


  useEffect(()=>{
    setShowModal(signUpShow)
  });


  const userSignUp = () => {
    setIsSubmit(true);
    dispatch(
      allActions.userAction.registerUser(
        firstName,
        lastName,
        password,
        email,
        suburb,
        postalCode,
        state,
        street
      )
    )
    
  }

  const isLoading = useSelector((state) => {
    return state.user.isLoad;
  });

  const isSuccess = useSelector((state)=>{
    return state.user.registered
  })

  useEffect(()=>{
    
    if(isSuccess){
      toast.success("Successfully Registered!");
    }
    if(!isSuccess && !isLoading && isSubmit){
      toast.error("Fail Registered!");
    }
  },[isLoading])



  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up using Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                readOnly={false}
                onChange={(t) => setFirstName(t.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                readOnly={false}
                onChange={(t) => setLastName(t.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email :</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                readOnly={false}
                onChange={(t) => setEmail(t.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Street"
                className="form-container"
                onChange={(t) => setStreet(t.target.value)}
              />
              <Form.Control
                type="text"
                placeholder="Suburb"
                className="form-container"
                onChange={(t) => setsuburb(t.target.value)}
              />
              <Form.Control
                type="number"
                placeholder="Postalcode"
                className="form-container"
                onChange={(t) => setPostalCode(t.target.value)}
              />
              <Form.Control
                type="text"
                placeholder="State"
                className="form-container"
                onChange={(t) => setState(t.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(t) => setPassword(t.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={(t) => setConfirmPassword(t.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={userSignUp}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
      {isLoading ? (
        <div>
          <SpinnerLoading isLoading={isLoading} />
        </div>
      ) : null}
    </div>
  );
};

export default SignUpModal;
