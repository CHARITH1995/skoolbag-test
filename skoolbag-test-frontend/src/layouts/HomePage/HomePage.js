import React, { useEffect, useState } from "react";
import "./HomeStyle.css";

import NavBar from "../../components/Navbar/NavBar";
import Slider from "../../components/Slider/slider";
import SchoolList from "../../components/SchoolList/SchoolList";
import RecentlyAddedItemList from "../../components/Recentlist/RecentList";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="center">
          <Slider />
        </div>
        <div className="column left">
          <h6>Recently Added Schools</h6>
          <RecentlyAddedItemList/>
        </div>
        <div className="column right">
          <h2>School List</h2>
          <SchoolList/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
