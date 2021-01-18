import React, { useEffect, useState } from "react";
import SchoolCard from "../schoolCard/SchoolCard";
import { Form } from "react-bootstrap";

const SchoolList = (schoolList) => {

  const [searchText, setSearchText] = useState("");

  const searching = (searchText) => {
    return (x) => {
      var search = [];
      search =
        x.schoolName.includes(searchText) ||
        x.street.toLowerCase().includes(searchText) || x.suburb.toLowerCase().includes(searchText) || x.state.toLowerCase().includes(searchText)  || x.postalcode.toString().includes(searchText) || !searchText
      if (search.length != 0) {
        return search;
      } else {
        return false;
      }
    };
  };

  return (
    <div>
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Search schools"
              onChange={(t) => setSearchText(t.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
      {schoolList.schoolList.filter(searching(searchText)).map((school, i) => (
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
