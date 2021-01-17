import React, { useEffect, useState, useCallback } from "react";
import { Modal, Form, FormControl, Button } from "react-bootstrap";
import { useField } from "formik";
import './TextInputStyle.css';

const TextInput = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <div>
      <Form.Group>
        {props.label && <Form.Label>{props.label}</Form.Label>}
        <Form.Control {...field} {...props} />
        {meta.error && meta.touched && (
          <p className="error-text">{meta.error}</p>
        )}
      </Form.Group>
    </div>
  );
};

export default TextInput;
