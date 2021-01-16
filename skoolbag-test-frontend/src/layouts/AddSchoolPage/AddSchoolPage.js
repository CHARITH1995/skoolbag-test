import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar/NavBar";
import SchoolForm from "../../components/SchoolForm/SchoolForm";
import { Button } from "react-bootstrap";

const AddSchoolPage = () => {
  const [schoolName, setSchoolName] = useState("");
  const [principalName, setPrincipalName] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [suburb, setsuburb] = useState("");
  const [state, setState] = useState("");
  const [studentCount, setStudentCount] = useState(0);


  const addSchool = () =>{
      
  }

  return (
    <div>
      <NavBar />
      <div className="container">
        <SchoolForm
          setSchoolName={setSchoolName}
          setPrincipalName={setPrincipalName}
          setStreet={setStreet}
          setsuburb={setsuburb}
          setPostalCode = {setPostalCode}
          setState={setState}
          setStudentCount={setStudentCount}
          is_editable = {true}
        />
        <Button variant="primary" type="submit" onClick={addSchool}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddSchoolPage;
