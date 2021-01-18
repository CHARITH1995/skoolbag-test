import React, { useEffect, useState, useCallback } from "react";
import "./HomeStyle.css";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../../components/Navbar/NavBar";
import Slider from "../../components/Slider/slider";
import SchoolList from "../../components/SchoolList/SchoolList";
import RecentlyAddedItemList from "../../components/Recentlist/RecentList";
import allActions from "../../actions/index";



const Homepage = () => {
  const dispatch = useDispatch();

  const getAllSchools = useCallback(
    () => dispatch(allActions.getSchoolAction.getSchools()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const getRecentSchools = useCallback(
    () =>
      dispatch(allActions.getRecentlyAddedActions.getRecentlyAddedSchools()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const recentSchools = useSelector((state) => {
    return state.getRecentlyAdded.recentSchools;
  });

  const schoolList = useSelector((state) => {
    return state.getSchools.schools;
  });

  useEffect(() => {
    getAllSchools();
  }, [getAllSchools]);

  useEffect(() => {
    getRecentSchools();
  }, [getRecentSchools]);

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="center">
          <Slider />
        </div>
        <div className="column left">
          <h6>Recently Added Schools</h6>
          <RecentlyAddedItemList recentList={recentSchools} />
        </div>
        <div className="column right">
          <h2>School List</h2>
          <SchoolList schoolList={schoolList} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
