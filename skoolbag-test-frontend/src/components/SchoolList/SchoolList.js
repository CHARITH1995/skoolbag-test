import React, { useEffect, useState } from "react";
import SchoolCard from "../schoolCard/SchoolCard";

const SchoolList = (schoolList) => {
  return (
    <div>
      {schoolList.schoolList.map((school, i) => (
        <div key={i}>
          <SchoolCard
            id={school.schoolId}
            email={school.email}
            principal={school.principalName}
            name={school.schoolName}
          />
        </div>
      ))}
    </div>
  );
};

export default SchoolList;
