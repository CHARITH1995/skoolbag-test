import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/Navbar/NavBar";
import SchoolForm from "../../components/SchoolForm/SchoolForm";
import allActions from "../../actions/index";

const Schoolpage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();



  const getSchoolById = useCallback(
    () => dispatch(allActions.getSchoolByIdAction.getASchoolById(id)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const school = useSelector((state) => {
    return state.getSchoolById.school;
  });

  useEffect(() => {
    getSchoolById();
  }, [getSchoolById]);

  return (
    <div>
      <NavBar />
      <div className="container">
          <SchoolForm
            readOnly={true}
            isAdd={false}
            addSchoolName={school.schoolName}
            schoolEmail={school.email}
            schoolPrincipalName={school.principalName}
            schoolStreet={school.street}
            schoolPostalCode={school.postalcode}
            schoolSuburb={school.suburb}
            schoolState={school.state}
            schoolStudentCount={school.studentCount}
          />
      </div>
    </div>
  );
};

export default Schoolpage;
