import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SchoolForm.css";

import { Formik } from "formik";
import * as yup from "yup";
import TextInput from "../TextInput/TextInput";

const schema = yup.object({
  schoolName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("School Name is Required"),
  principalName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Pricipal's Name is Required"),
  email: yup.string().email("Invalid email").required("Email is Required"),
  suburb: yup.string().required("suburb is Required"),
  postalCode: yup.number().required("postalCode is Required"),
  state: yup.string().required("State is Required"),
  street: yup.string().required("Street is Required"),
  studentCount: yup.number().required("Registered Student count is Required"),
});

const SchoolForm = ({
  addSchool,
  readOnly,
  isAdd,
  addSchoolName,
  schoolEmail,
  schoolPrincipalName,
  schoolStreet,
  schoolPostalCode,
  schoolSuburb,
  schoolState,
  schoolStudentCount,
}) => {
  const [schoolName, setSchoolName] = useState(addSchoolName);
  const [principalName, setPrincipalName] = useState(schoolPrincipalName);
  const [email, setEmail] = useState(schoolEmail);
  const [street, setStreet] = useState(schoolStreet);
  const [postalCode, setPostalCode] = useState(schoolPostalCode);
  const [suburb, setsuburb] = useState(schoolSuburb);
  const [state, setState] = useState(schoolState);
  const [studentCount, setStudentCount] = useState(schoolStudentCount);

  return (
    <div>
      <Formik
        initialValues={{
          schoolName: schoolName,
          principalName: principalName,
          email: email,
          suburb: suburb,
          postalCode: postalCode,
          state: state,
          street: street,
          studentCount: studentCount,
        }}
        validationSchema={schema}
        onSubmit={(school) => addSchool(school)}
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
          return (
            <form onSubmit={handleSubmit}>
              <TextInput
                label={"School Name"}
                type={"text"}
                name={"schoolName"}
                readOnly={readOnly}
                placeholder={"Enter the School Name"}
              />
              <TextInput
                label={"Principal's Name"}
                type={"text"}
                readOnly={readOnly}
                name={"principalName"}
                placeholder={"Enter the Principal's Name"}
              />
              <TextInput
                label={"Email"}
                type={"email"}
                name={"email"}
                readOnly={readOnly}
                placeholder={"Enter your Email"}
              />
              <TextInput
                label={"Address"}
                type={"text"}
                name={"street"}
                readOnly={readOnly}
                placeholder={"Enter Street Name"}
              />
              <TextInput
                type={"text"}
                name={"suburb"}
                readOnly={readOnly}
                placeholder={"Enter Suburb Name"}
              />
              <TextInput
                type={"text"}
                name={"state"}
                readOnly={readOnly}
                placeholder={"Enter State Name"}
              />
              <TextInput
                type={"number"}
                name={"postalCode"}
                readOnly={readOnly}
                placeholder={"Enter postalcode "}
              />
              <TextInput
                label={"Student Count"}
                type={"number"}
                name={"studentCount"}
                readOnly={readOnly}
                placeholder={"Enter the Registered Student count"}
              />
              {isAdd && (
                <Button
                  variant="primary"
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
                  Sign In
                </Button>
              )}
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SchoolForm;
