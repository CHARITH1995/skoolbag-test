import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecentlyAddedItem = ({ name, id }) => {
  return (
    <div>
      <Link to={"/school/view/" + id}>
        <Alert variant="success">
          <Alert.Heading>
            <h6>{name}</h6>
          </Alert.Heading>
        </Alert>
      </Link>
    </div>
  );
};

export default RecentlyAddedItem;
