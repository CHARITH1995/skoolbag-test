import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar/NavBar";
import SchoolForm from "../../components/SchoolForm/SchoolForm";
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../actions/index";
import { token } from '../../config/token';
import { toast } from "react-toastify";

const AddSchoolPage = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const addSchool = (school) => {
    setIsSubmit(true);  
    dispatch(
      allActions.schoolAddAction.schoolAdd(
        school.schoolName,
        school.principalName,
        school.email,
        school.suburb,
        school.postalCode,
        school.state,
        school.street,
        school.studentCount
      )
    );
  };

  const isLoading = useSelector((state) => {
    return state.addSchool.is_adding;
  });

  const isSuccess = useSelector((state) => {
    return state.addSchool.addSchool;
  });

  useEffect(()=>{
    if(!token()){
      history.push('/');
    }

  },[token()])

  useEffect(() => {
    if (isSuccess &&  isSubmit) {
      toast.success("Successfully Inserted !!");
    }
    if (!isSuccess && !isLoading && isSubmit) {
      toast.error("Fail !");
    }
  }, [isLoading]);

  return (
    <div>
      <NavBar />
      <div className="container">
        <SchoolForm
          addSchool={addSchool}
          readOnly={false}
          isAdd={true}
          addSchoolName={""}
          schoolEmail={""}
          schoolPrincipalName={""}
          schoolStreet={""}
          schoolPostalCode={''}
          schoolSuburb={""}
          schoolState={""}
          schoolStudentCount={''}
          
        />
      </div>
    </div>
  );
};

export default AddSchoolPage;
