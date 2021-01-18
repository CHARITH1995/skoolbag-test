import React, { useEffect, useState } from "react";
import RecentlyAddedItem from '../RecentItem/RecentItem';

const RecentlyAddedItemList = (recentList) =>{

    return(
        <div>
      {recentList.recentList.map((school, i) => (
        <div key={i}>
          <RecentlyAddedItem
            name={school.schoolName}
            id = {school.schoolId}
          />
        </div>
      ))}
    </div>
    )
}

export default RecentlyAddedItemList;