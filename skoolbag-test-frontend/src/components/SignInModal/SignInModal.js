import React, { useEffect, useState } from "react";
import { Modal ,Form,FormControl,Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../actions/index";
import { toast } from "react-toastify";

const SignInModal = ({signInShow , handleClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [isSubmit , setIsSubmit] = useState(false)

  const userSignIn = ()=>{
    setIsSubmit(true);
    dispatch(
      allActions.userLoginAction.userLogin(
        email,
        password,
      )
    )
  }

  const isLogging = useSelector((state) => {
    return state.userLogin.is_login;
  });

  const isLoginSuccess = useSelector((state)=>{
    return state.userLogin.login
  })

  useEffect(()=>{
    console.log("is_logging",isLogging)
    console.log("login",isLoginSuccess)
    if(isLoginSuccess){
      toast.success("Login Successfull !");
      handleClose()
    }
    if(!isLoginSuccess && !isLogging  && isSubmit){
      toast.error("Login Fail!");
    }
  },[isLogging])

  



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
                onChange={(t) => setEmail(t.target.value)}
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={userSignIn}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignInModal;
