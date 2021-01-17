import React, { useEffect, useState } from "react";
import { Modal ,Form,Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import allActions from "../../actions/index";
import { toast } from "react-toastify";

import TextInput from '../TextInput/TextInput';

import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is Required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),
})

const SignInModal = ({signInShow , handleClose}) => {

  const dispatch = useDispatch();
  const [isSubmit , setIsSubmit] = useState(false)

  const handleSubmit = (user)=>{
    setIsSubmit(true);
    dispatch(
      allActions.userLoginAction.userLogin(
        user.email,
        user.password,
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
        <Formik
            initialValues={{
              password: "",
              email: "",
            }}
            validationSchema={schema}
            onSubmit={(user) => handleSubmit(user)}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
              dirty,
              isValid,
            }) => {
              console.log(errors);
              return (
                <form onSubmit={handleSubmit}>
                  <TextInput
                    label={"Email"}
                    type={"email"}
                    name={"email"}
                    placeholder={"Enter your Email"}
                  />
                  <TextInput
                    label={"Password"}
                    type={"password"}
                    name={"password"}
                    placeholder={"Enter your password"}
                  />
                  <Button
                    variant="primary"
                    type="submit"
                    className={!(dirty && isValid) ? "disabled-btn" : ""}
                    disabled={!(dirty && isValid)}
                  >
                    Sign In
                  </Button>
                </form>
              );
            }}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignInModal;
