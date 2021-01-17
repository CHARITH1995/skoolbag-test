import React, { useEffect, useState, useCallback } from "react";
import { Modal, Form, FormControl, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../actions/index";
import { Formik } from "formik";
import * as yup from "yup";

import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import TextInput from "../TextInput/TextInput";

const schema = yup.object({
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("FirstName is Required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("LastName is Required"),
  email: yup.string().email("Invalid email").required("Email is Required"),
  suburb: yup.string().required("suburb is Required"),
  postalCode: yup.number().required("postalCode is Required"),
  state: yup.string().required("State is Required"),
  street: yup.string().required("Street is Required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUpModal = ({ signUpShow, handleClose }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (user) => {
    setIsSubmit(true);
    dispatch(
      allActions.userAction.registerUser(
        user.firstName,
        user.lastName,
        user.password,
        user.email,
        user.suburb,
        user.postalCode,
        user.state,
        user.street
      )
    );
  };

  const isLoading = useSelector((state) => {
    return state.user.isLoad;
  });

  const isSuccess = useSelector((state) => {
    return state.user.registered;
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully Registered!");
    }
    if (!isSuccess && !isLoading && isSubmit) {
      toast.error("Fail Registered!");
    }
  }, [isLoading]);

  return (
    <div>
      <Modal show={signUpShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up using Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              password: "",
              email: "",
              suburb: "",
              postalCode: "",
              state: "",
              street: "",
              confirmPassword: "",
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
                    label={"First Name"}
                    type={"text"}
                    name={"firstName"}
                    placeholder={"Enter your First Name"}
                  />
                  <TextInput
                    label={"LastName"}
                    type={"text"}
                    name={"lastName"}
                    placeholder={"Enter your Last Name"}
                  />
                  <TextInput
                    label={"Email"}
                    type={"email"}
                    name={"email"}
                    placeholder={"Enter your Email"}
                  />
                  <TextInput
                    label={"Address"}
                    type={"text"}
                    name={"street"}
                    placeholder={"Enter Street Name"}
                  />
                  <TextInput
                    type={"text"}
                    name={"suburb"}
                    placeholder={"Enter Suburb Name"}
                  />
                  <TextInput
                    type={"text"}
                    name={"state"}
                    placeholder={"Enter State Name"}
                  />
                  <TextInput
                    type={"number"}
                    name={"postalCode"}
                    placeholder={"Enter postalcode "}
                  />
                  <TextInput
                    label={"Password"}
                    type={"password"}
                    name={"password"}
                    placeholder={"Enter your password"}
                  />
                  <TextInput
                    label={"Confirm Password"}
                    type={"password"}
                    name={"confirmPassword"}
                    placeholder={"Confirm the Password"}
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
      {isLoading ? (
        <div>
          <SpinnerLoading isLoading={isLoading} />
        </div>
      ) : null}
    </div>
  );
};

export default SignUpModal;
